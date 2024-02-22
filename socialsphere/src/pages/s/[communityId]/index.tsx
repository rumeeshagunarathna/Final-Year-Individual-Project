import { firestore } from "../../../firebase/clientApp";
import { Community, communityState } from "../../../atoms/communitiesAtom";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import safeJsonStringify from "safe-json-stringify";
import React, { useEffect } from "react";
import NotFound from "../../../components/Community/NotFound";
import Header from "../../../components/Community/Header";
import PageContent from "../../../components/Layout/PageContent";
import CreatePostLink from "../../../components/Community/CreatePostLink";
import Posts from "../../../components/Posts/Posts";
import { useSetRecoilState } from "recoil";
import About from "../../../components/Community/About";

type CommunityPageProps = {
  communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  console.log("Here is the Data", communityData);

  const setCommunityStateValue = useSetRecoilState(communityState);

  

  useEffect(() => {
     console.log("Community data received:", communityData);
    setCommunityStateValue((prev) => ({
      ...prev,
      currentCommunity: communityData,
    }));
  }, [communityData]);
  

  if (!communityData) {
    console.log("Community data is not available.");
    return <NotFound />;
  }
  // Log the community ID here
  console.log("Community ID in CommunityPage:", communityData.id);

  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>
          <CreatePostLink />
          <Posts communityData={communityData} />
        </>
        <>
          {/* Log the community data in the About component */}
          {console.log("Community Data in About:", communityData)}
          <About communityData={communityData} />
        </>
      </PageContent>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  //get the community data and pass it to the client component
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    // Could add a error page here.
        console.log("getServerSideProps error", error);
    return {
      props: {
        error: "An error occurred while fetching community data.",
      },
    };
        
  }
}
export default CommunityPage;
