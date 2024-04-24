

// import { ChakraProvider } from "@chakra-ui/react";
// import type { AppProps } from "next/app";
// import { theme } from '../chakrastyle/theme'
// import Layout from "@/components/Layout/Layout";
// import { RecoilRoot } from "recoil";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <RecoilRoot>
//     <ChakraProvider theme={theme}>
//       <Layout>
//         <Component {...pageProps} />
//         </Layout>
//       </ChakraProvider>
//       </RecoilRoot>
//   );
// }

// import { ChakraProvider } from "@chakra-ui/react";
// import type { AppProps } from "next/app";
// import { theme } from "../chakrastyle/theme";
// import Layout from "@/components/Layout/Layout";
// import { RecoilRoot } from "recoil";

// import { ContextProvider } from "../pages/context";

// import "@/styles/globals.css";
// import "@/styles/auth.css";
// import "@/styles/chats.css";
// import "@/styles/index.css";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <RecoilRoot>
//       <ChakraProvider theme={theme}>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </ChakraProvider>
//       <ContextProvider>
//         <Component {...pageProps} />
//       </ContextProvider>
//     </RecoilRoot>
//   );
// }


import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../chakrastyle/theme";
import Layout from "@/components/Layout/Layout";
import { RecoilRoot } from "recoil";

import { ContextProvider } from "../pages/context";

import "@/styles/globals.css"
import "@/styles/auth.css";
import "@/styles/chats.css";
import "@/styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <ContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
}

