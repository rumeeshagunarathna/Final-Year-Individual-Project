import { ComponentStyleConfig } from "@chakra-ui/theme";


export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "black",
      _hover: {
        bg: "black",
      },
    },
    outline: {
      color: "black",
      border: "1px solid",
      borderColor: "black",
    },
    oauth: {
      height: "34px",
      bg:'whhite',
      border: "1px solid",
      borderColor: "black",
      _hover: {
        bg: "white",
      },
    },
  },
};