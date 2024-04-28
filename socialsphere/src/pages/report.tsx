
// import React from "react";
// import { useState } from "react";
// import { useSetRecoilState } from "recoil";
// import { addDoc, collection } from "firebase/firestore";
// import { firestore } from "../firebase/clientApp";
// import { authModalState } from "../atoms/authModalAtoms";
// import {
//   Input,
//   FormControl,
//   Button,
//   Flex,
//   Text,
//   Select,
//   Radio,
//   RadioGroup,
//   FormLabel,
//   Stack,
//   Divider,
// } from "@chakra-ui/react";
// import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
// import { Textarea } from "@chakra-ui/react";
// import { Switch } from "@chakra-ui/react";


// const report: React.FC = () => {

// const [checkedItems, setCheckedItems] = React.useState([false, false]);

// const allChecked = checkedItems.every(Boolean);
// const isIndeterminate = checkedItems.some(Boolean) && !allChecked;



//   const setAuthModelState = useSetRecoilState(authModalState);
//   const [report, setReportData] = useState({
//     name: "",
//     relatedto: "",
//     report: "user", // Default gender value
//     reason: "", // Add a new field for country
//     content:'', 
//   });
//   const [error, setError] = useState("");

//   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (error) setError("");
//     // Perform validation if needed

//     try {
//       await addDoc(collection(firestore, "report"), report);
//       console.log("User data added successfully");
//       // Clear form fields after successful submission
//       setReportData({
//         name: "",
//         relatedto: "",
//         report: "user",
//         reason: "",
//         content: "",
//       }); // Reset country to empty string
//     } catch (error) {
//       console.error("Error adding user data:", error);
//       setError("Error adding user data. Please try again.");
//     }
//   };

//   const onChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setReportData((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   const onRadioChange = (value: string) => {
//     setReportData((prev) => ({
//       ...prev,
//       report: value,
//     }));
//   };

//   return (
    

//     <Flex
//       align="center"
//       justify="center"
//       height="100vh"
//       width="100%"
//       p={2} 
//       bgColor="blue.500"
//     >
//       <Flex
//         direction="column"
//         p={6}
//         mt={3}
//         mb={3}
//         rounded="md"
//         bg="white"
//         boxShadow="lg"
//         maxH="1000px"
//         maxW="1000px" 
//         w="100%"
//         h="100%"
//       >
//         <Flex>
//           <Text
//             align="center"
//             color="blue.500"
//             fontWeight={700}
//             fontSize={30}
//             mb={2}
//           >
//             Submit a Report
//           </Text>
//         </Flex>
//         <Divider></Divider>
//         <FormLabel mb={2} fontWeight={500}>
//           Thanks for looking out for yourself and your fellow members by
//           reporting things that break the rules. Let us know what's happening,
//           and we'll look into it.{" "}
//         </FormLabel>
//         <Divider></Divider>

//         {/* Gender */}

//         <FormLabel>I want to Report</FormLabel>
//         <RadioGroup onChange={onRadioChange} value={report.report} mb={3}>
//           <Flex direction="row">
//             <Radio value="user"> A User</Radio>
//             <Radio value="post"> A Post</Radio>
//             <Radio value="community"> A Community</Radio>
//           </Flex>
//         </RadioGroup>
//         <Divider></Divider>
//         <Checkbox
//           mt={3}
//           value={report.content}
//           isChecked={allChecked}
//           isIndeterminate={isIndeterminate}
//           onChange={(e) =>
//             setCheckedItems([e.target.checked, e.target.checked])
//           }
//         >
//           This is releted to?
//         </Checkbox>
//         <Stack pl={6} mt={2} spacing={1} mb={2}>
//           <Checkbox
//             isChecked={checkedItems[0]}
//             onChange={(e) =>
//               setCheckedItems([e.target.checked, checkedItems[1]])
//             }
//           >
//             Yours or an entity or an individual you represent
//           </Checkbox>
//           <Checkbox
//             isChecked={checkedItems[1]}
//             onChange={(e) =>
//               setCheckedItems([checkedItems[0], e.target.checked])
//             }
//           >
//             Someone else's
//           </Checkbox>
//           <Divider></Divider>
//         </Stack>
//         <form onSubmit={onSubmit}>
       
          
//           {/* Country */}
//           <FormControl mb={2} mt={2}>
//             <FormLabel>Report</FormLabel>
//             <Select
//               required
//               name="reason"
//               placeholder="Select the reason for this report"
//               onChange={onChange}
//               value={report.reason}
//             >
//               <option value="Harassment">Harassment</option>
//               <option value="Threatening violence">Threatening violence</option>
//               <option value="Minor abuse or sexualization">
//                 Minor abuse or sexualization
//               </option>
//               <option value="Hate">Hate</option>
//               <option value="Sharing personal information">
//                 Sharing personal information
//               </option>
//               <option value="Non-consensual intimate media">
//                 Non-consensual intimate media
//               </option>
//               <option value="Prohibited transaction">
//                 Prohibited transaction
//               </option>
//               <option value="Impersonation">Impersonation</option>
//               <option value="Self-harm or suicide">Self-harm or suicide</option>
//               <option value="Spam">Spam</option>
//               <option value="Copyright violation">Copyright violation</option>
//               <option value="Trademark violation">Trademark violation</option>
//               {/* Add more options as needed */}
//             </Select>
//           </FormControl>

//           {/* Name */}
//           <FormControl mb={2} mt={2}>
//             <FormLabel>Your Thoughts?</FormLabel>
//             <Input
//               required
//               name="name"
//               placeholder="Your thoughts.."
//               type="text"
//               onChange={onChange}
//               value={report.name}
//             />
//           </FormControl>

//           <FormLabel fontWeight={700} mt={4} mb={2}>Block this User/Community</FormLabel>
//           <FormControl display="flex" alignItems="center" mt={2} mb={2}>
//             <FormLabel htmlFor="email-alerts" mb="2" mt={2}>
//               You won't be able to send direct messages or chat requests to each
//               other.
//             </FormLabel>
//             <Switch id="email-alerts" />
//           </FormControl>

//           {/* Error message */}
//           {error && (
//             <Text textAlign="center" mt={2} fontSize="10pt" color="red">
//               {error}
//             </Text>
//           )}
          
//           <Button
//             alignSelf="flex-start"
//             marginLeft="auto"
//             mt={4}
//             width="20%"
//             colorScheme="teal"
//             type="submit"
//           >
//             Submit
//           </Button>
//         </form>
//       </Flex>
//     </Flex>
//   );
// };

// export default report;

"use client";

// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   HStack,
//   InputRightElement,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
//   Link,
//   Divider,
//   Checkbox,
//   Radio,
//   RadioGroup,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// import { report } from "process";



// import React from "react";

// import { useSetRecoilState } from "recoil";
// import { addDoc, collection } from "firebase/firestore";
// import { firestore } from "../firebase/clientApp";
// import { authModalState } from "../atoms/authModalAtoms";
// import {
  
//   Select,
  
// } from "@chakra-ui/react";
// import {  CheckboxGroup } from "@chakra-ui/react";
// import { Textarea } from "@chakra-ui/react";
// import { Switch } from "@chakra-ui/react";

// export default function SignupCard() {
//   const [checkedItems, setCheckedItems] = React.useState([false, false]);

//   const allChecked = checkedItems.every(Boolean);
//   const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
//   const setAuthModelState = useSetRecoilState(authModalState);
//   const [report, setReportData] = useState({
//     name: "",
//     relatedto: "",
//     report: "user", // Default gender value
//     reason: "", // Add a new field for country
    
//   });
//   const [error, setError] = useState("");

//     const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//       event.preventDefault();
//       if (error) setError("");
//       // Perform validation if needed

//       try {
//         await addDoc(collection(firestore, "report"), report);
//         console.log("User data added successfully");
//         // Clear form fields after successful submission
//         setReportData({
//           name: "",
//           relatedto: "",
//           report: "user",
//           reason: "",
         
//         }); // Reset country to empty string
//       } catch (error) {
//         console.error("Error adding user data:", error);
//         setError("Error adding user data. Please try again.");
//       }
//     };

//     const onChange = (
//       event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//     ) => {
//       setReportData((prev) => ({
//         ...prev,
//         [event.target.name]: event.target.value,
//       }));
//     };

//     const onRadioChange = (value: string) => {
//       setReportData((prev) => ({
//         ...prev,
//         report: value,
//       }));
//     };
  
  
  

//   return (
//     <Flex
//       minH={"100vh"}
//       align={"center"}
//       justify={"center"}
//       bg={useColorModeValue("gray.50", "gray.800")}
//     >
//       <Stack
//         spacing={8}
//         mx={"auto"}
//         maxW={"xlg"}
//         py={12}
//         px={6}
//         width={"100vh"}
//       >
//         <Stack align={"center"}>
//           <Heading fontSize={"4xl"} textAlign={"center"}>
//             Report Page
//           </Heading>
//           <Text fontSize={"lg"} color={"gray.600"}>
//             Submit a report/complaint. ✌️
//           </Text>
//         </Stack>
//         <Box
//           rounded={"lg"}
//           bg={useColorModeValue("white", "gray.700")}
//           boxShadow={"lg"}
//           p={8}
//         >
//           <Stack spacing={4}>
//             <FormLabel mb={2} fontWeight={500}>
//               Thanks for looking out for yourself and your fellow members by
//               reporting things that break the rules. Let us know what's
//               happening,and we'll look into it.{" "}
//             </FormLabel>
//             <Divider></Divider>
//             <FormLabel>I want to Report</FormLabel>
//             <RadioGroup onChange={onRadioChange} value={report.report} mb={3}>
//               <Flex direction="row">
//                 <Radio value="user"> A User</Radio>
//                 <Radio value="post"> A Post</Radio>
//                 <Radio value="community"> A Community</Radio>
//               </Flex>
//             </RadioGroup>
//             <Divider></Divider>
//             <Checkbox
//               mt={3}
//               value={report.relatedto}
//               isChecked={allChecked}
//               isIndeterminate={isIndeterminate}
//               onChange={(e) =>
//                 setCheckedItems([e.target.checked, e.target.checked])
//               }
//             >
//               This is releted to?
//             </Checkbox>
//             <Stack pl={6} mt={2} spacing={1} mb={2}>
//               <Checkbox
//                 value={report.relatedto}
//                 isChecked={checkedItems[0]}
//                 onChange={(e) =>
//                   setCheckedItems([e.target.checked, checkedItems[1]])
//                 }
//               >
//                 Yours or an entity or an individual you represent
//               </Checkbox>
//               <Checkbox
//                 value={report.relatedto}
//                 isChecked={checkedItems[1]}
//                 onChange={(e) =>
//                   setCheckedItems([checkedItems[0], e.target.checked])
//                 }
//               >
//                 Someone else's
//               </Checkbox>
//               <Divider></Divider>
//             </Stack>
//             <form onSubmit={onSubmit}>
//               {/* Country */}
//               <FormControl mb={2} mt={2}>
//                 <FormLabel>Report</FormLabel>
//                 <Select
//                   required
//                   name="reason"
//                   placeholder="Select the reason for this report"
//                   onChange={onChange}
//                   value={report.reason}
//                 >
//                   <option value="Harassment">Harassment</option>
//                   <option value="Threatening violence">
//                     Threatening violence
//                   </option>
//                   <option value="Minor abuse or sexualization">
//                     Minor abuse or sexualization
//                   </option>
//                   <option value="Hate">Hate</option>
//                   <option value="Sharing personal information">
//                     Sharing personal information
//                   </option>
//                   <option value="Non-consensual intimate media">
//                     Non-consensual intimate media
//                   </option>
//                   <option value="Prohibited transaction">
//                     Prohibited transaction
//                   </option>
//                   <option value="Impersonation">Impersonation</option>
//                   <option value="Self-harm or suicide">
//                     Self-harm or suicide
//                   </option>
//                   <option value="Spam">Spam</option>
//                   <option value="Copyright violation">
//                     Copyright violation
//                   </option>
//                   <option value="Trademark violation">
//                     Trademark violation
//                   </option>
//                   {/* Add more options as needed */}
//                 </Select>
//               </FormControl>

//               {/* Name */}
//               <FormControl mb={2} mt={2}>
//                 <FormLabel>Your Thoughts?</FormLabel>
//                 <Input
//                   required
//                   name="name"
//                   placeholder="Your thoughts.."
//                   type="text"
//                   onChange={onChange}
//                   value={report.name}
//                 />
//               </FormControl>

//               <FormLabel fontWeight={700} mt={4} mb={2}>
//                 Block this User/Community
//               </FormLabel>
//               <FormControl display="flex" alignItems="center" mt={2} mb={2}>
//                 <FormLabel htmlFor="email-alerts" mb="2" mt={2}>
//                   You won't be able to send direct messages or chat requests to
//                   each other.
//                 </FormLabel>
//                 <Switch id="email-alerts" />
//               </FormControl>

//               {/* Error message */}
//               {error && (
//                 <Text textAlign="center" mt={2} fontSize="10pt" color="red">
//                   {error}
//                 </Text>
//               )}
//               {/* <Button type="submit" width="100%" height="36px" mt={2} mb={2}>
//             Submit
//           </Button> */}
//               <Button
//                 alignSelf="flex-start"
//                 marginLeft="auto"
//                 mt={4}
//                 width="20%"
//                 colorScheme="teal"
//                 type="submit"
//               >
//                 Submit
//               </Button>
//             </form>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }



import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Divider,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  FormHelperText,
  GridItem,
  InputLeftAddon,
  SimpleGrid,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { report } from "process";

import React from "react";

import { useSetRecoilState } from "recoil";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import { authModalState } from "../atoms/authModalAtoms";
import { Select } from "@chakra-ui/react";


export default function SignupCard() {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  const setAuthModelState = useSetRecoilState(authModalState);
  const [report, setReportData] = useState({
    name: "",
    relatedto: "",
    report: "user",
    reason: "",
    link: "", // Add link field to the report object
    email: "", // Add email field to the report object
  });
  const [error, setError] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError("");

    try {
      await addDoc(collection(firestore, "report"), report);
      console.log("User data added successfully");
      setReportData({
        name: "",
        relatedto: "",
        report: "user",
        reason: "",
        link: "", // Reset link field
        email: "", // Reset email field
      });
      setCheckedItems([false, false]);
    } catch (error) {
      console.error("Error adding user data:", error);
      setError("Error adding user data. Please try again.");
    }
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setReportData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };


  
  const onRadioChange = (value: string) => {
    setReportData((prev) => ({
      ...prev,
      report: value,
    }));
  };

  const onCheckboxChange = (index: number) => {
    const updatedCheckedItems = checkedItems.map((item, idx) =>
      idx === index ? !item : item
    );
    setCheckedItems(updatedCheckedItems);

    const relatedtoValue = updatedCheckedItems[index] ? "Yours" : "";
    setReportData((prev) => ({
      ...prev,
      relatedto: relatedtoValue,
    }));
  };


  const onLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReportData((prev) => ({
      ...prev,
      link: event.target.value,
    }));
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReportData((prev) => ({
      ...prev,
      email: event.target.value,
    }));
  };
const toast = useToast();
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"xlg"}
        py={12}
        px={6}
        width={"100vh"}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Report Page
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Submit a report/complaint. ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormLabel mb={2} fontWeight={500}>
              Thanks for looking out for yourself and your fellow members by
              reporting things that break the rules. Let us know what's
              happening, and we'll look into it.
            </FormLabel>
            <Divider />
            <FormLabel>I want to Report</FormLabel>
            <RadioGroup onChange={onRadioChange} value={report.report} mb={3}>
              <Flex direction="row">
                <Radio value="user">A User</Radio>
                <Radio value="post">A Post</Radio>
                <Radio value="community">A Community</Radio>
              </Flex>
            </RadioGroup>
            <Divider />
            <Checkbox
              mt={3}
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={(e) =>
                setCheckedItems([e.target.checked, e.target.checked])
              }
            >
              This is related to?
            </Checkbox>
            <Stack pl={6} mt={2} spacing={1} mb={2}>
              <Checkbox
                isChecked={checkedItems[0]}
                onChange={() => onCheckboxChange(0)}
              >
                Yours or an entity or an individual you represent
              </Checkbox>
              <Checkbox
                isChecked={checkedItems[1]}
                onChange={() => onCheckboxChange(1)}
              >
                Someone else's
              </Checkbox>
              <Divider />
            </Stack>
            <form onSubmit={onSubmit}>
              <FormControl mb={2} mt={2}>
                <FormLabel>Report</FormLabel>
                <Select
                  required
                  name="reason"
                  placeholder="Select the reason for this report"
                  onChange={onChange}
                  value={report.reason}
                >
                  <option value="Harassment">Harassment</option>
                  <option value="Threatening violence">
                    Threatening violence
                  </option>
                  <option value="Minor abuse or sexualization">
                    Minor abuse or sexualization
                  </option>
                  <option value="Hate">Hate</option>
                  <option value="Sharing personal information">
                    Sharing personal information
                  </option>
                  <option value="Non-consensual intimate media">
                    Non-consensual intimate media
                  </option>
                  <option value="Prohibited transaction">
                    Prohibited transaction
                  </option>
                  <option value="Impersonation">Impersonation</option>
                  <option value="Self-harm or suicide">
                    Self-harm or suicide
                  </option>
                  <option value="Spam">Spam</option>
                  <option value="Copyright violation">
                    Copyright violation
                  </option>
                  <option value="Trademark violation">
                    Trademark violation
                  </option>
                </Select>
              </FormControl>

              <FormControl mb={2} mt={2}>
                <FormLabel>Your Thoughts?</FormLabel>
                <Input
                  required
                  name="name"
                  placeholder="Your thoughts.."
                  type="text"
                  onChange={onChange}
                  value={report.name}
                />
              </FormControl>

              <SimpleGrid columns={1} spacing={6} mt={2}>
                <FormControl as={GridItem} colSpan={[3, 2]} mt={2}>
                  <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    link to the related post:
                  </FormLabel>
                  <InputGroup size="sm">
                    <InputLeftAddon
                      bg="gray.50"
                      _dark={{
                        bg: "gray.800",
                      }}
                      color="gray.500"
                      rounded="md"
                    >
                      http://
                    </InputLeftAddon>
                    <Input
                      type="tel"
                      placeholder="www.example.com"
                      focusBorderColor="blue.400"
                      rounded="md"
                      onChange={onLinkChange} // Add onChange for link
                      value={report.link} // Bind value to link field in report
                    />
                  </InputGroup>
                </FormControl>

                <FormControl id="email" mt={1}>
                  <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    Your email
                  </FormLabel>
                  <Textarea
                    placeholder="you@example.com"
                    rows={2}
                    shadow="sm"
                    focusBorderColor="blue.400"
                    fontSize={{
                      sm: "sm",
                    }}
                    onChange={onEmailChange} // Add onChange for email
                    value={report.email} // Bind value to email field in report
                  />
                  <FormHelperText>
                    Thank you for your report.We'll take a careful look at this
                    content.
                  </FormHelperText>
                </FormControl>
              </SimpleGrid>

              <FormLabel fontWeight={700} mt={4} mb={2}>
                Block this User/Community
              </FormLabel>
              <FormControl display="flex" alignItems="center" mt={2} mb={2}>
                <FormLabel htmlFor="email-alerts" mb="2" mt={2}>
                  You won't be able to send direct messages or chat requests to
                  each other.
                </FormLabel>
                <Switch id="email-alerts" />
              </FormControl>

              {error && (
                <Text textAlign="center" mt={2} fontSize="10pt" color="red">
                  {error}
                </Text>
              )}

              <Button
                alignSelf="flex-start"
                marginLeft="auto"
                mt={4}
                width="20%"
                colorScheme="teal"
                type="submit"
                
                onClick={() => {
                  toast({
                    title: 'Report submited.',
                    description: "Thank you for your report.We'll take a careful look at this",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}
              >
                Submit
              </Button>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
