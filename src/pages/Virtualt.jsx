import Footer from "../layout/Footer";
import Header from "../layout/Header";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import ScrollToTop from "../layout/Scroll";

export default function Virtualt() {
  const [currency, setCurrency] = useState("naira");
  const [position, setPosition] = useState("");
  const [level, setLevel] = useState("");
  const [slots, setSlots] = useState(1);
  const [frontlettSalary, setFrontlettSalary] = useState(0);

  useEffect(() => {
    const calculateFrontlettSalary = () => {
      let baseSalary = 0;

      if (position === "frontend") {
        if (level === "1") {
          baseSalary = 25000;
        } else if (level === "2") {
          baseSalary = 35000;
        } else if (level === "3") {
          baseSalary = 45000;
        } else if (level === "4") {
          baseSalary = 55000;
        }
      } else if (position === "backend") {
        if (level === "1") {
          baseSalary = 30000;
        } else if (level === "2") {
          baseSalary = 40000;
        } else if (level === "3") {
          baseSalary = 50000;
        } else if (level === "4") {
          baseSalary = 60000;
        }
      } else if (position === "productdesigner") {
        if (level === "1") {
          baseSalary = 20000;
        } else if (level === "2") {
          baseSalary = 30000;
        } else if (level === "3") {
          baseSalary = 40000;
        } else if (level === "4") {
          baseSalary = 50000;
        }
      } else if (position === "projectmanager") {
        if (level === "1") {
          baseSalary = 25000;
        } else if (level === "2") {
          baseSalary = 35000;
        } else if (level === "3") {
          baseSalary = 45000;
        } else if (level === "4") {
          baseSalary = 55000;
        }
      }

      const frontlettSalary = baseSalary * 2 ** (slots - 1);
      setFrontlettSalary(frontlettSalary);
    };

    calculateFrontlettSalary();
  }, [position, level, slots]);

  return (
    <main className="bg-[#E5E5E5]">
      <ScrollToTop />
      <Header />
      <section className="flex flex-col gap-5 justify-center items-center text-center py-12 md:py-16">
        <b className="text-bold text-3xl">
          Determine Your Take-Home Salary Way
          <br className="hidden md:block" />
          Before Pay Day
        </b>
        <p className="font-[600] md:text-lg">
          Find out how by doing the maths.
        </p>
      </section>
      <section className="px-5 md:px-20">
        <div className="flex flex-col px-14 py-8 gap-5 bg-white rounded-md">
          <b className="md:text-2xl text-bold">
            Frontlett Salary Cost Calculator - Virtualt
          </b>
          <p className="text-[#00000087]">
            This calculator determines your Frontlett Salary per Slot for a
            specific position and skill level.
          </p>
          <nav className="flex-col md:grid grid-cols-2 gap-y-5 gap-x-[10%]">
            <label className="flex justify-between items-center">
              <span>Preferred Currency</span>
              <FormControl sx={{ minWidth: 150 }}>
                <Select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
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
              <span>NSITF</span>
              <span className="bg-[#F5F5F5] text-light px-5 h-10 rounded-md flex items-center w-[150px]">
                2%
              </span>
            </label>
            <label className="flex justify-between items-center">
              <span>Number of Hours Per Slot</span>
              <span className="bg-[#F5F5F5] text-light px-5 h-10 rounded-md flex items-center w-[150px]">
                2hrs Per Slot
              </span>
            </label>
            <label className="flex justify-between items-center">
              <span>NHF</span>
              <span className="bg-[#F5F5F5] text-light px-5 h-10 rounded-md flex items-center w-[150px]">
                3%
              </span>
            </label>
            <label className="flex justify-between items-center">
              <span>Pension</span>
              <span className="bg-[#F5F5F5] text-light px-5 h-10 rounded-md flex items-center w-[150px]">
                5%
              </span>
            </label>
            <label className="flex justify-between items-center">
              <span>Other Deductions</span>
              <span className="bg-[#F5F5F5] text-light px-5 h-10 rounded-md flex items-center w-[150px]">
                -
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
                <td>Skill Level</td>
                <td>Number of Slot</td>
                <td>Gross Salary</td>
                <td>Net Salary</td>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <Select
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
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
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      displayEmpty
                      sx={{
                        height: 40,
                      }}
                      className="bg-[#C4C4C41A] active:border border-[#1279E0]"
                    >
                      <MenuItem value="1">Intern Level 1</MenuItem>
                      <MenuItem value="2">Junior Level 1</MenuItem>
                      <MenuItem value="3">Mid Level 1</MenuItem>
                      <MenuItem value="4">Senior Level 1</MenuItem>
                    </Select>
                  </FormControl>
                </td>
                <td>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <Select
                      value={slots}
                      onChange={(e) => setSlots(parseInt(e.target.value))}
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
                    ₦{frontlettSalary - (10 / 100) * frontlettSalary}
                  </span>
                </td>
                <td>
                  <span className="bg-[#1279E01A] text-[#1D1D1B] px-5 h-10 rounded-md flex justify-center items-center">
                    ₦{frontlettSalary}
                  </span>
                </td>
              </tr>
            </tbody>
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
