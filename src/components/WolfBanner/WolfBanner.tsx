import "./WolfBanner.css";

export default function WolfBanner() {
  return (
    <section className="pt-[200px] relative pb-14 px-[85px] wolf__banner">
      <h1 className="text-white text-[80px] font-bold uppercase tracking-[2px]">
        Wolf
      </h1>
      <div className="text-[#C5C5C5] mt-[160px]">
        <h3 className="text-5xl font-semibold">5,000</h3>
        <p className="mt-2">Total Number</p>
      </div>
      <div className="gradient-marcopolo absolute left-0 -bottom-[44px]"></div>
    </section>
  );
}
