import Efforts from "../Efforts/Efforts";
import SecondaryEfforts from "../SecondaryEfforts/SecondaryEfforts";
import "./AboutConservation.css"

export default function AboutConservation() {
  return (
    <section id="conservation" className="mb-[100px]">
      <div className="w-[1200px] max-w-full mx-auto text-white">
        <div className="text-center">
          <h3 className="text-2xl font-semibold uppercase mb-[100px] tracking-[1.5px]">
            Wildlife Conservation Efforts
          </h3>
          <p className="w-[780px] mx-auto max-w-full px-[16px]">
            At Murgab Hunting, we firmly believe in and practice the principle
            that responsible hunting serves as a vital tool for wildlife
            conservation. Our approach harmonizes the passion for hunting with a
            deep commitment to preserving the natural heritage of Tajikistan’s
            Pamir Mountains.
          </p>
        </div>
      </div>
      <Efforts />
      <p className="text-white text-center px-5 mt-[100px] w-[900px] max-w-full mx-auto font-medium essence">
        In essence, at Murgab Hunting, we do more than just offer hunting
        expeditions; we foster a legacy of conservation, ensuring that the
        thrill of the hunt today leads to the preservation of wildlife for
        tomorrow.
      </p>
      <SecondaryEfforts />
    </section>
  );
}
