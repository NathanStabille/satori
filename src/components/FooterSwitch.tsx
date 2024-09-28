import { Options } from "@/types/optionsType";
import { OptionSwitch } from "./OptionSwitch";
import { useState } from "react";

const options: Options = [
  {
    id: "player",
  },
  { id: "affiliate" },
];

export const FooterSwitch = () => {
  const [id, setId] = useState(options[0].id);

  return (
    <div className="flex h-full w-full items-center justify-between">
      {/* x.com(Twitter) link */}
      <div className="ml-5 flex items-center justify-center">
        <label className="relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-lg border bg-gray-50 duration-300">
          <input className="peer hidden" type="checkbox" />
          <div className="left-2 top-2 z-20 h-6 w-6 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 via-emerald-700 to-emerald-500 opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300" />
        </label>
        <h1>x</h1>
      </div>
      {/* x.com(Twitter) */}

      {/* instagram link */}
      <div className="ml-5 flex items-center justify-center">
        <label className="relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-lg border bg-gray-50 duration-300">
          <input className="peer hidden" type="checkbox" />
          <div className="left-2 top-2 z-20 h-6 w-6 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 via-emerald-700 to-emerald-500 opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300" />
        </label>
        <h1>instagram</h1>
      </div>
      {/* instagram  link */}

      {/* site */}
      <div className="ml-5 flex items-center justify-center">
        <label className="relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-lg border bg-gray-50 duration-300">
          <input className="peer hidden" type="checkbox" />
          <div className="left-2 top-2 z-20 h-6 w-6 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 via-emerald-700 to-emerald-500 opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300" />
        </label>
        <h1>site</h1>
      </div>
      {/* site */}

      {/* threads */}

      <div className="ml-5 flex items-center justify-center">
        <label className="relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-lg border bg-gray-50 duration-300">
          <input className="peer hidden" type="checkbox" />
          <div className="left-2 top-2 z-20 h-6 w-6 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 via-emerald-700 to-emerald-500 opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300" />
        </label>
        <h1>Threads</h1>
      </div>
      {/* threads */}

      <OptionSwitch options={options} option={id} setOption={setId} />
    </div>
  );
};
