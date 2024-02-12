import Footer from "../layout/Footer";
import Header from "../layout/Header";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function Employer() {
  const [currency, setCurrency] = useState("naira");
  const [virtualts, setVirtualts] = useState([]);
  const [totalSalary, setTotalSalary] = useState({});
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleAddVirtualt = () => {
    setVirtualts([
      ...virtualts,
      { position: "", level: "1", slots: "1", regularSalary: 0 },
    ]);
  };
  // const handleRemoveVirtualts = (index) => {
  //   const updatedPositions = [...virtualts];
  //   updatedPositions.splice(index, 1);
  //   setVirtualts(updatedPositions);
  // };
  useEffect(() => {
    const calculateTotalSalary = () => {
      let totalFrontlettSalary = 0;
      let totalRegSalary = 0;

      virtualts.forEach((position) => {
        const { position: selectedPosition, level, slots } = position;

        const frontlettSalary = calculateFrontlettSalary(
          selectedPosition,
          level,
          slots
        );
        totalFrontlettSalary += frontlettSalary;

        const regSalary = calculateRegularSalary(selectedPosition, level);
        totalRegSalary += regSalary;
      });

      setTotalSalary({
        frontlett: totalFrontlettSalary,
        regular: totalRegSalary,
      });
    };

    calculateTotalSalary();
  }, [virtualts]);

  const calculateFrontlettSalary = (position, level, slots) => {
    let baseSalary = 0;

    if (position === "frontend") {
      baseSalary = 25000;
    } else if (position === "backend") {
      baseSalary = 30000;
    } else if (position === "product designer") {
      baseSalary = 20000;
    } else if (position === "project manager") {
      baseSalary = 25000;
    }

    const levelMultiplier = (parseInt(level.slice(-1)) - 1) * 10000;
    const adjustedBaseSalary = baseSalary + levelMultiplier;
    const slotMultiplier = adjustedBaseSalary * slots;

    return slotMultiplier;
  };
  const calculateRegularSalary = (position, level) => {
    if (position === "frontend") {
      if (level === "1") return 130000;
      if (level === "2") return 160000;
      if (level === "3") return 200000;
      if (level === "4") return 250000;
    } else if (position === "backend") {
      if (level === "1") return 150000;
      if (level === "2") return 180000;
      if (level === "3") return 220000;
      if (level === "4") return 300000;
    } else if (position === "product designer") {
      if (level === "1") return 110000;
      if (level === "2") return 130000;
      if (level === "3") return 170000;
      if (level === "4") return 200000;
    } else if (position === "project manager") {
      if (level === "1") return 130000;
      if (level === "2") return 160000;
      if (level === "3") return 200000;
      if (level === "4") return 250000;
    }

    return 0;
  };
  const handleChangePosition = (e, index) => {
    const updatedVirtualts = [...virtualts];
    updatedVirtualts[index].position = e.target.value;
    updatedVirtualts[index].frontlettSalary = calculateFrontlettSalary(
      e.target.value,
      updatedVirtualts[index].level,
      updatedVirtualts[index].slots
    );
    updatedVirtualts[index].regularSalary = calculateRegularSalary(
      e.target.value,
      updatedVirtualts[index].level
    );
    setVirtualts(updatedVirtualts);
  };

  const handleChangeLevel = (e, index) => {
    const updatedVirtualts = [...virtualts];
    updatedVirtualts[index].level = e.target.value;
    updatedVirtualts[index].frontlettSalary = calculateFrontlettSalary(
      updatedVirtualts[index].position,
      e.target.value,
      updatedVirtualts[index].slots
    );
    updatedVirtualts[index].regularSalary = calculateRegularSalary(
      updatedVirtualts[index].position,
      e.target.value
    );
    setVirtualts(updatedVirtualts);
  };

  const handleChangeSlots = (e, index) => {
    const updatedVirtualts = [...virtualts];
    updatedVirtualts[index].slots = e.target.value;
    updatedVirtualts[index].frontlettSalary = calculateFrontlettSalary(
      updatedVirtualts[index].position,
      updatedVirtualts[index].level,
      e.target.value
    );
    setVirtualts(updatedVirtualts);
  };

  return (
    <main className="bg-[#E5E5E5]">
      <Header />
      <section className="flex flex-col gap-5 justify-center items-center text-center py-12 md:py-16">
        <b className="text-bold text-3xl">
          Hire your complete team with Frontlett and save more on{" "}
          <br className="hidden md:block" /> your original budget.
        </b>
        <p className="font-[600] md:text-lg">
          Find out how by doing the maths.
        </p>
      </section>
      <section className="px-5 md:px-20">
        <div className="flex flex-col px-14 py-8 gap-5 bg-white rounded-md">
          <b className="md:text-2xl text-bold">
            Frontlett Salary Cost Calculator
          </b>
          <p className="text-[#00000087]">
            This calculator helps you compare and see how Frontlett lets you
            move faster by hiring more and saving more. It’s a double edge
            sword.
          </p>
          <nav className="w-1/2 flex flex-col gap-5">
            <label className="flex justify-between items-center">
              <span>Preferred Currency</span>
              <FormControl sx={{ minWidth: 120 }}>
                <Select
                  value={currency}
                  onChange={handleChange}
                  displayEmpty
                  sx={{
                    height: 40,
                    border: "1px solid",
                    borderColor: "#1279E0",
                  }}
                >
                  <MenuItem value="naira">Naira</MenuItem>
                  <MenuItem disabled value="dollar">
                    Dollar
                  </MenuItem>
                  <MenuItem disabled value="pound">
                    Pound
                  </MenuItem>
                  <MenuItem disabled value="euro">
                    Euro
                  </MenuItem>
                </Select>
              </FormControl>
            </label>
            <label className="flex justify-between items-center">
              <span>Number of Hours Per Slot</span>
              <span className="bg-[#F5F5F5] text-light px-5 h-10 rounded-md flex justify-center items-center">
                2hrs Per Slot
              </span>
            </label>
          </nav>
          <b className="md:text-lg text-bold border-t pt-5">
            Virtualt Specifications
          </b>
          <table className="border-separate border-spacing-5">
            <thead>
              <tr className="">
                <td>Choose a Virtualt Position</td>
                <td>Preferred Employee Level</td>
                <td>Number of Slot</td>
                <td>Regular Salary</td>
                <td>Frontlett Salary</td>
              </tr>
            </thead>
            <tbody className="">
              {virtualts.map((virtualt, index) => (
                <tr key={index}>
                  <td>
                    <FormControl sx={{ minWidth: "100%" }}>
                      <Select
                        value={virtualt.position}
                        onChange={(e) => handleChangePosition(e, index)}
                        displayEmpty
                        sx={{
                          height: 40,
                        }}
                        className="bg-[#C4C4C41A] active:border border-[#1279E0]"
                      >
                        <MenuItem value="frontend">Frontend Developer</MenuItem>
                        <MenuItem value="backend">Backend Developer</MenuItem>
                        <MenuItem value="product designer">
                          Product Designer
                        </MenuItem>
                        <MenuItem value="project manager">
                          Project Manager
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                  <td>
                    <FormControl sx={{ minWidth: "100%" }}>
                      <Select
                        value={virtualt.level}
                        onChange={(e) => handleChangeLevel(e, index)}
                        displayEmpty
                        sx={{
                          height: 40,
                        }}
                        className="bg-[#C4C4C41A] active:border border-[#1279E0]"
                      >
                        <MenuItem value="1">Intern Level 1</MenuItem>
                        <MenuItem value="2">Junior Level 1</MenuItem>
                        <MenuItem value="3">Mid Level 1</MenuItem>
                        junior2 <MenuItem value="4">Senior Level 1</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                  <td>
                    <FormControl sx={{ minWidth: "100%" }}>
                      <Select
                        value={virtualt.slots}
                        onChange={(e) => handleChangeSlots(e, index)}
                        displayEmpty
                        sx={{
                          height: 40,
                        }}
                        className="bg-[#C4C4C41A] active:border border-[#1279E0]"
                      >
                        <MenuItem value="1">1 Slot</MenuItem>
                        <MenuItem value="2">2 Slot</MenuItem>
                        <MenuItem value="3">3 Slot</MenuItem>
                        <MenuItem value="4">4 Slot</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                  <td>
                    <span className="bg-primary text-white px-5 h-10 rounded-md flex justify-center items-center">
                      ₦{virtualt.regularSalary}
                    </span>
                  </td>
                  <td>
                    <span className="bg-[#1279E01A] text-[#1D1D1B] px-5 h-10 rounded-md flex justify-center items-center">
                      ₦{virtualt.frontlettSalary}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <span
                    className="bg-[#C4C4C41A] border border-[#1279E0] px-5 h-10 rounded-md flex gap-2 justify-center items-center"
                    onClick={handleAddVirtualt}
                  >
                    <span> Add a Virtualt</span>
                    <FaPlus
                      className="text-bold text-sm"
                    />
                  </span>
                </td>
                <td></td>
                <td></td>
                <td>
                  <span className="bg-primary text-white px-5 h-10 rounded-md flex justify-center items-center">
                    ₦{totalSalary.regular}
                  </span>
                </td>
                <td>
                  <span className="bg-[#1279E01A] text-[#1D1D1B] px-5 h-10 rounded-md flex justify-center items-center">
                    ₦{totalSalary.frontlett}
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <div className="py-14 flex justify-center">
        <button className="bg-[#1279E0] rounded-md h-10 px-5 text-white">
          Download Result
        </button>
      </div>
      <Footer />
    </main>
  );
}
