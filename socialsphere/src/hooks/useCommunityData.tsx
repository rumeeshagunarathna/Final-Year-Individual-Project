import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  Community,
  CommunitySnippet,
  communityState,
} from "../atoms/communitiesAtom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/clientApp";
import { getDocs, collection, writeBatch, doc, increment } from "firebase/firestore";
import { authModalState } from "../atoms/authModalAtoms";

const useCommunityData = () => {
  const [user] = useAuthState(auth);

  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);
      const setAuthModalState = useSetRecoilState(authModalState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onJoinOrLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    //Is the user signed in?
        //If not => open auth modal
        if (!user) {
              setAuthModalState({ open: true, view: "login" });
              return;
        }

    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData);
  };

  const getMySnippets = async () => {
    setLoading(true);
    try {
      //get users sippets
      const snippetDocs = await getDocs(
        collection(firestore, `users/${user?.uid}/communitySnippets`)
      );
      const snippets = snippetDocs.docs.map((doc) => ({ ...doc.data() }));
      setCommunityStateValue((prev) => ({
        ...prev,
        mySnippets: snippets as CommunitySnippet[],
      }));

      console.log("Here are the snippets", snippets);
    } catch (error: any) {
      console.log("getMySnippert error", error);
      setError(error.message);
    }

    setLoading(false);
  };

  const joinCommunity = async (communityData: Community) => {
    //Batch write
    //creating a new community snippet
    //update the numberOffMembers(1)
    try {
      const batch = writeBatch(firestore);
      const newSnippet: CommunitySnippet = {
        communityId: communityData.id,
        imageURL: communityData.imageURL || "",
         //isModerator: false,
      };
      batch.set(
        doc(
          firestore,
          `users/${user?.uid}/communitySnippets`,
          communityData.id
        ),
        newSnippet
      );
      batch.update(doc(firestore, "communities", communityData.id), {
        numberOffMembers: increment(1),
      });
      await batch.commit();

          //update recoil state- communityState.mySnippets
          setCommunityStateValue((prev) => ({
                ...prev,
                mySnippets: [...prev.mySnippets, newSnippet],
          }));

    } catch (error: any) {
      console.log("joinCommunity error", error);
      setError(error.message);
    }
        
        setLoading(false);   
  };

  const leaveCommunity = async (communityId: string) => {
    //Batch write
    
        try {
          const batch = writeBatch(firestore);

          //deletingg a new community snippet
          batch.delete(
            doc(firestore, `users/${user?.uid}/communitySnippets`, communityId)
          );
          //update the numberOffMembers(-1)
          batch.update(doc(firestore, "communities", communityId), {
            numberOffMembers: increment(-1),
          });
          await batch.commit();

              //(remove)update recoil state- communityState.mySnippets
              setCommunityStateValue(prev => ({
                    ...prev,
                    mySnippets: prev.mySnippets.filter((item) => item.communityId !== communityId),
              }));

        } catch (error: any) {
              console.log('leaveCommunity error', error.message);
              setError(error.message);
        }
        setLoading(false);
  };

  useEffect(() => {
    if (!user) return;
    getMySnippets();
  }, [user]);

  return {
    // data and functions
    communityStateValue,
    onJoinOrLeaveCommunity,
    loading,
  };
};
export default useCommunityData;
