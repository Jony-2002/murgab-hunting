import "./Statistics.css";

export default function Statistics() {
  return (
    <div className="statistics-container relative bottom-[3.5rem] z-10 flex justify-center items-start flex-wrap text-center gap-[100px] text-[#8E7E57] px-[50px]">
      <div>
        <h4 className="text-[51px] font-semibold mb-4">5</h4>
        <p>Available Species</p>
      </div>
      <div>
        <h4 className="text-[51px] font-semibold mb-4">+500</h4>
        <p>Conservation Initiatives</p>
      </div>
      <div>
        <h4 className="text-[51px] font-semibold mb-4">+1k</h4>
        <p>Satisfied clients</p>
      </div>
      <div>
        <h4 className="text-[51px] font-semibold mb-4 statistic__item flex justify-center items-center text-center gap-2">
          <span>+200</span>
          <span className="text-sm small__item">
            km<sup>2</sup>
          </span>
        </h4>
        <p>Managed Land</p>
      </div>
    </div>
  );
}
