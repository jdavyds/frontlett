import { useState } from "react";
import { CustomCheckboxGroup } from "../../utils/CustomCheckbox";

export default function Aside() {
  const [type, setType] = useState([]);
  const [level, setLevel] = useState([]);
  const [salary, setSalary] = useState([]);

  return (
    <aside className="flex flex-col gap-10 text-[#00000087]">
      <div className="flex flex-col gap-5 rounded-xl p-5 bg-[#1279E01A]">
        <b className="text-[#1A3047] text-xl">Create Job Alert</b>
        <p className="">You don’t have to miss a job. Create an alert.</p>
        <input
          type="text"
          placeholder="Enter job title"
          className="h-12 w-full rounded-lg bg-white px-5"
        />
        <button className="bg-[#1279E0] text-white h-12 px-8 rounded-lg">
          Create Job Alert
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <b className="text-[#1A3047] text-xl">Type of employment</b>
        <CustomCheckboxGroup
          options={[
            { name: "On-site", no: 5 },
            { name: "Remote", no: 5 },
          ]}
          name="qualification"
          setSelected={setType}
          selected={type}
        />
      </div>
      <div className="flex flex-col gap-5">
        <b className="text-[#1A3047] text-xl">Seniority Level</b>
        <CustomCheckboxGroup
          options={[
            { name: "Entry Level", no: 5 },
            { name: "Mid Level", no: 5 },
            { name: "Senior Level", no: 5 },
            { name: "Management", no: 5 },
          ]}
          name="level"
          setSelected={setLevel}
          selected={level}
        />
      </div>
      <div className="flex flex-col gap-5">
        <b className="text-[#1A3047] text-xl">Salary Range</b>
        <CustomCheckboxGroup
          options={[
            { name: "N100,000 - N200,000", no: 5 },
            { name: "N200,000 - N300,000", no: 5 },
            { name: "N300,000 - N400,000", no: 5 },
            { name: "N400,000 - N500,000", no: 5 },
          ]}
          name="location"
          setSelected={setSalary}
          selected={salary}
        />
      </div>
    </aside>
  );
}
