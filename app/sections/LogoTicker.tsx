import quantumLogo from "@/images/quantum.svg";
import acmeLogo from "@/images/acme-corp.svg";
import echoValleyLogo from "@/images/echo-valley.svg";
import pulseLogo from "@/images/pulse.svg";
import outsideLogo from "@/images/outside.svg";
import apexLogo from "@/images/apex.svg";
import celestialLogo from "@/images/celestial.svg";
import twiceLogo from "@/images/twice.svg";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  return <div>Logo Ticker</div>;
}
