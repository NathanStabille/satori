import { Options } from "@/types/optionsType";
import { OptionSwitch } from "./OptionSwitch";
import { useState } from "react";


const options: Options = [
  {
    id: "playpix",
  },
  { id: "dupoc" },
];

export const StyleSwitch = () => {

  const [id, setId] = useState(options[0].id)
  return <OptionSwitch options={options} option={id} setOption={setId} />;
};
