import GetQuote from "../components/modal/getQuote";
import Service from "./components/Service";
import TeamSection from "./components/Team";


export const metadata = {
  title: "Terms and Conditions - Safari Adventures",
  description: "Review the terms and conditions for booking and traveling with Safari Adventures.",
};

export default function TermsPage() {
  return (
    <div>
        <Service />
        <TeamSection />
        <GetQuote/>
    </div>
  );
}