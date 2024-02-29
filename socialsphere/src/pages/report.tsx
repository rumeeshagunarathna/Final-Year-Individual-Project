

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import { authModalState } from "../atoms/authModalAtoms";
import {
  Input,
  Button,
  Flex,
  Text,
  Select,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

const report: React.FC = () => {
  const setAuthModelState = useSetRecoilState(authModalState);
  const [report, setReportData] = useState({
    name: "",
    age: "",
    gender: "male", // Default gender value
    country: "", // Add a new field for country
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
      setReportData({ name: "", age: "", gender: "male", country: "" }); // Reset country to empty string
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
      gender: value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Name */}
      <Input
        required
        name="name"
        placeholder="Name"
        type="text"
        mb={2}
        onChange={onChange}
        value={report.name}
      />
      {/* Age */}
      <Input
        required
        name="age"
        placeholder="Age"
        type="number"
        mb={2}
        onChange={onChange}
        value={report.age}
      />
      {/* Gender */}
      <Text mb={2}>Gender:</Text>
      <RadioGroup onChange={onRadioChange} value={report.gender}>
        <Flex direction="row">
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          <Radio value="other">Other</Radio>
        </Flex>
      </RadioGroup>
      {/* Country */}
      <Select
        required
        name="country"
        placeholder="Select Country"
        mb={2}
        onChange={onChange}
        value={report.country}
      >
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">UK</option>
        {/* Add more options as needed */}
      </Select>
      {/* Error message */}
      {error && (
        <Text textAlign="center" mt={2} fontSize="10pt" color="red">
          {error}
        </Text>
      )}
      <Button type="submit" width="100%" height="36px" mt={2} mb={2}>
        Submit
      </Button>
    </form>
  );
};

export default report;
