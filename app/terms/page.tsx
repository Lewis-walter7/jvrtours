'use client';

import GetQuote from "../components/modal/getQuote";
import Terms from "./components/terms";

export const metadata = {
  title: "Terms and Conditions - Safari Adventures",
  description: "Review the terms and conditions for booking and traveling with Safari Adventures.",
};

export default function TermsPage() {
  return (
    <div>
        <Terms />
        <GetQuote />
    </div>
  );
}