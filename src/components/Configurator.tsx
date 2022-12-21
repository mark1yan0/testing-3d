import { useCustomization } from "../context/Customization";

const Configurator = () => {
  const {
    material,
    toggleMaterial,
    legs,
    setLegs,
    chairColors,
    chairColor,
    setChairColor,
    cushionColors,
    cushionColor,
    setCushionColor,
  } = useCustomization();

  return (
    <div className="fixed right-6 top-10 w-80 p-6 flex flex-col gap-4">
      <div>
        <h4 className="title">Chair material</h4>
        <div className="values">
          <div
            className='item'
            onClick={() => toggleMaterial("leather")}
          >
            <p className={`label ${material === "leather" ? "text-white border-b-2 border-white" : ""}`}>Leather</p>
          </div>
          <div
            className='item'
            onClick={() => toggleMaterial("fabric")}
          >
            <p className={`label ${material === "fabric" ? "text-white border-b-2 border-white" : ""}`}>Fabric</p>
          </div>
        </div>
      </div>
      <div>
        <h4 className="title">Chair color</h4>
        <div className="values">
          {chairColors?.map((item: any, index: number) => (
            <div
              key={index}
              className='item'
              onClick={() => setChairColor(item)}
            >
              <p className={`label ${
                item.color === chairColor?.color ? "text-white border-b-2 border-white" : ""
              }`}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="title">Cushion color</h4>
        <div className="values">
          {cushionColors?.map((item: any, index: number) => (
            <div
              key={index}
              className='item'
              onClick={() => setCushionColor(item)}
            >
              <div
                className={`dot ${
                  item.color === cushionColor?.color ? "border-2 border-white" : ""
                }`}
                style={{ backgroundColor: item.color }}
              />
              <p className="label">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="title">Legs</h4>
        <div className="values">
          <div
            className={`item ${legs === 1 ? "text-white border-b-2 border-white" : ""}`}
            onClick={() => setLegs(1)}
          >
            <p className="label">Design</p>
          </div>
          <div
            className={`item ${legs === 2 ? "text-white border-b-2 border-white" : ""}`}
            onClick={() => setLegs(2)}
          >
            <p className="label">Classic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;