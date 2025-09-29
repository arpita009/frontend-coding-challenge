import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StepperProvider } from "../context/stepperContext";

function MyApp({ Component, pageProps }: AppProps) {
	return <StepperProvider>
      <Component {...pageProps} />
    </StepperProvider>;
}

export default MyApp;
