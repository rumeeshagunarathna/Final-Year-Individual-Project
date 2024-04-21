
import React from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import { authModalState } from "../atoms/authModalAtoms";
import {
  Input,
  FormControl,
  Button,
  Flex,
  Text,
  Select,
  Radio,
  RadioGroup,
  FormLabel,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";


const report: React.FC = () => {

const [checkedItems, setCheckedItems] = React.useState([false, false]);

const allChecked = checkedItems.every(Boolean);
const isIndeterminate = checkedItems.some(Boolean) && !allChecked;



  const setAuthModelState = useSetRecoilState(authModalState);
  const [report, setReportData] = useState({
    name: "",
    relatedto: "",
    report: "user", // Default gender value
    reason: "", // Add a new field for country
    content:'', 
  });
  const [error, setError] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError("");
    // Perform validation if needed

    try {
      await addDoc(collection(firestore, "report"), report);
      console.log("User data added successfully");
      // Clear form fields after successful submission
      setReportData({
        name: "",
        relatedto: "",
        report: "user",
        reason: "",
        content: "",
      }); // Reset country to empty string
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

  return (
    // <form onSubmit={onSubmit}>
    //   {/* Name */}
    //   <Input
    //     required
    //     name="name"
    //     placeholder="Name"
    //     type="text"
    //     mb={2}
    //     onChange={onChange}
    //     value={report.name}
    //   />
    //   {/* Age */}
    //   <Input
    //     required
    //     name="age"
    //     placeholder="Age"
    //     type="number"
    //     mb={2}
    //     onChange={onChange}
    //     value={report.age}
    //   />
    //   {/* Gender */}
    //   <Text mb={2}>Gender:</Text>
    //   <RadioGroup onChange={onRadioChange} value={report.gender}>
    //     <Flex direction="row">
    //       <Radio value="male">Male</Radio>
    //       <Radio value="female">Female</Radio>
    //       <Radio value="other">Other</Radio>
    //     </Flex>
    //   </RadioGroup>
    //   {/* Country */}
    //   <Select
    //     required
    //     name="country"
    //     placeholder="Select Country"
    //     mb={2}
    //     onChange={onChange}
    //     value={report.country}
    //   >
    //     <option value="USA">USA</option>
    //     <option value="Canada">Canada</option>
    //     <option value="UK">UK</option>
    //     {/* Add more options as needed */}
    //   </Select>
    //   {/* Error message */}
    //   {error && (
    //     <Text textAlign="center" mt={2} fontSize="10pt" color="red">
    //       {error}
    //     </Text>
    //   )}
    //   <Button type="submit" width="100%" height="36px" mt={2} mb={2}>
    //     Submit
    //   </Button>
    // </form>

    <Flex
      align="center"
      justify="center"
      height="100vh"
      width="100%"
      p={2} // Padding on all sides
      bgColor="blue.500"
    >
      <Flex
        direction="column"
        p={6}
        mt={3}
        mb={3}
        rounded="md"
        bg="white"
        boxShadow="lg"
        maxH="1000px"
        maxW="1000px" // Max width for the form
        w="100%"
        h="100%"
      >
        <Flex>
          <Text
            align="center"
            color="blue.500"
            fontWeight={700}
            fontSize={30}
            mb={2}
          >
            Submit a Report
          </Text>
        </Flex>
        <Divider></Divider>
        <FormLabel mb={2} fontWeight={500}>
          Thanks for looking out for yourself and your fellow members by
          reporting things that break the rules. Let us know what's happening,
          and we'll look into it.{" "}
        </FormLabel>
        <Divider></Divider>

        {/* Gender */}

        <FormLabel>I want to Report</FormLabel>
        <RadioGroup onChange={onRadioChange} value={report.report} mb={3}>
          <Flex direction="row">
            <Radio value="user"> A User</Radio>
            <Radio value="post"> A Post</Radio>
            <Radio value="community"> A Community</Radio>
          </Flex>
        </RadioGroup>
        <Divider></Divider>
        <Checkbox
          mt={3}
          value={report.content}
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) =>
            setCheckedItems([e.target.checked, e.target.checked])
          }
        >
          This is releted to?
        </Checkbox>
        <Stack pl={6} mt={2} spacing={1} mb={2}>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) =>
              setCheckedItems([e.target.checked, checkedItems[1]])
            }
          >
            Yours or an entity or an individual you represent
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }
          >
            Someone else's
          </Checkbox>
          <Divider></Divider>
        </Stack>
        <form onSubmit={onSubmit}>
          {/* Age */}
          {/* <FormControl mb={2}>
            <FormLabel>First name</FormLabel>
            <Input
              required
              name="age"
              placeholder="Age"
              type="number"
              onChange={onChange}
              value={report.age}
            />
          </FormControl> */}

          {/* Country */}
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
              <option value="Threatening violence">Threatening violence</option>
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
              <option value="Self-harm or suicide">Self-harm or suicide</option>
              <option value="Spam">Spam</option>
              <option value="Copyright violation">Copyright violation</option>
              <option value="Trademark violation">Trademark violation</option>
              {/* Add more options as needed */}
            </Select>
          </FormControl>

          {/* Name */}
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

          <FormLabel fontWeight={700} mt={4} mb={2}>Block this User/Community</FormLabel>
          <FormControl display="flex" alignItems="center" mt={2} mb={2}>
            <FormLabel htmlFor="email-alerts" mb="2" mt={2}>
              You won't be able to send direct messages or chat requests to each
              other.
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>

          {/* Error message */}
          {error && (
            <Text textAlign="center" mt={2} fontSize="10pt" color="red">
              {error}
            </Text>
          )}
          {/* <Button type="submit" width="100%" height="36px" mt={2} mb={2}>
            Submit
          </Button> */}
          <Button
            alignSelf="flex-start"
            marginLeft="auto"
            mt={4}
            width="20%"
            colorScheme="teal"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default report;
