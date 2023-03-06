import Card from "./StatCard";
import cardData from "./Data";
import Arrow from "../Elements/ArrowAbove";
import Bolt from "../Elements/Bolt";
import Lines from "../Elements/Lines1";

export default function Stat() {
  return (
    <div className="flex flex-col mt-8 relative h-full w-full overflow-hidden">
      <div className="flex items-center flex-col my-4 w-full">
        <h2 className="text-xl md:text-5xl font-semibold w-11/12 md:w-7/12 text-center mt-10 mb-5">
          Numbers never matter to us,but <br/>your <p className="inline-flex text-emerald-600" >Support</p> Does ❣️
        </h2> 
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 w-full h-full justify-center"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(0, max(250px, 100%/4)))",
          }}
        >
          {cardData.map((item, index) => {
            return (
              <Card
                title={item.title}
                counter={item.counter}
                icon={item.icon}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
