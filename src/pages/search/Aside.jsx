import { useState } from "react";
import { CustomCheckboxGroup } from "../../utils/CustomCheckbox";

export default function Aside() {
  const [qualification, setQualification] = useState([]);
  const [level, setLevel] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skill, setSkill] = useState([]);
  const [rating, setRating] = useState([]);
  const [slot, setSlot] = useState([]);
  const [location, setLocation] = useState([]);
  
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
        <b className="text-[#1A3047] text-xl">Highest Qualification</b>
        <CustomCheckboxGroup
          options={[
            { name: "Degree", no: 5 },
            { name: "HND", no: 5 },
            { name: "OND", no: 5 },
            { name: "Others", no: 5 },
          ]}
          name="qualification"
          setSelected={setQualification}
          selected={qualification}
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
        <b className="text-[#1A3047] text-xl">Experience</b>
        <CustomCheckboxGroup
          options={[
            { name: "1-3 years", no: 5 },
            { name: "3-6 years", no: 5 },
            { name: "6-10 years", no: 5 },
            { name: "10+ years", no: 5 },
          ]}
          name="experience"
          setSelected={setExperience}
          selected={experience}
        />
      </div>
      <div className="flex flex-col gap-5">
        <b className="text-[#1A3047] text-xl">Skills</b>
        <CustomCheckboxGroup
          options={[
            { name: "Javascript", no: 5 },
            { name: "Python", no: 5 },
            { name: "React", no: 5 },
            { name: "Node", no: 5 },
          ]}
          name="skill"
          setSelected={setSkill}
          selected={skill}
        />
      </div>
      <div className="flex flex-col gap-5">
        <b className="text-[#1A3047] text-xl">Rating</b>
        <CustomCheckboxGroup
          options={[
            { name: "1 star", no: 5 },
            { name: "2 stars", no: 5 },
            { name: "3 stars", no: 5 },
            { name: "4 stars", no: 5 },
          ]}
          name="rating"
          setSelected={setRating}
          selected={rating}
        />
      </div>
      <div className="flex flex-col gap-5">
        <b className="text-[#1A3047] text-xl">Slot</b>
        <CustomCheckboxGroup
          options={[
            { name: "Full Time", no: 5 },
            { name: "Part Time", no: 5 },
            { name: "Contract", no: 5 },
            { name: "Remote", no: 5 },
          ]}
          name="slot"
          setSelected={setSlot}
          selected={slot}
        />
      </div>
      <div className="flex flex-col gap-5">
        <b className="text-[#1A3047] text-xl">Location</b>
        <CustomCheckboxGroup
          options={[
            { name: "Lagos", no: 5 },
            { name: "Abuja", no: 5 },
            { name: "Port Harcourt", no: 5 },
            { name: "Kano", no: 5 },
          ]}
          name="location"
          setSelected={setLocation}
          selected={location}
        />
      </div>
    </aside>
  );
}
