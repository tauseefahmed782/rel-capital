import Image from "next/image";
import interlockLogo from "@/assets/home-logo.png";
import cloudWatchLogo from "@/assets/home-logo2.png";
import boltshiftLogo from "@/assets/home-logo3.png";
import epicuriousLogo from "@/assets/home-logo4.png";
import polymathLogo from "@/assets/home-logo5.png";
import nietzscheLogo from "@/assets/home-logo6.png";

const clientBrands = [
  { name: "Nietzsche", logo: nietzscheLogo },
  { name: "Boltshift", logo: boltshiftLogo },
  { name: "CloudWatch", logo: cloudWatchLogo },
  { name: "Interlock", logo: interlockLogo },
  { name: "Epicurious", logo: epicuriousLogo },
  { name: "Polymath", logo: polymathLogo },
] as const;

export function HomeClients() {
  return (
    <section className="clients-strip" aria-label="ECA-backed finance institutions">
      <div className="clients-strip__inner">
        <p className="clients-strip__label">
          The institutions behind ECA-backed finance
        </p>

        <div className="clients-strip__brands">
          {clientBrands.map((brand) => (
            <div className="client-brand" key={brand.name}>
              <Image
                src={brand.logo}
                alt={brand.name}
                className="client-brand__logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
