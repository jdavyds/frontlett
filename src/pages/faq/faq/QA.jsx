import { useState} from "react";

import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../../../utils/Faqs";

export default function Qa() {
  
  const [activeIndices, setActiveIndices] = useState(new Set());
  const handleButtonClick = (faqName, index) => {
    const key = `${faqName}-${index}`;
    if (activeIndices.has(key)) {
      activeIndices.delete(key);
    } else {
      activeIndices.add(key);
    }
    setActiveIndices(new Set(activeIndices));
  };

  return (
    <main className="flex flex-col gap-10">
      {faqs.map((faq, index) => (
        <section
          key={index}
          id={faq.name}
          className="md:w-3/4 flex flex-col gap-5 border rounded"
        >
          <h2 className="text-xl font-[700] text-primary capitalize py-3 px-5 border-b">
            {faq.name}
          </h2>
          <ul className="w-full flex flex-col gap-4 p-4">
            {faq.list.map((info, index) => (
              <nav
                className="bg-white w-full py-2 md:py-4 px-4 md:px-7 flex flex-col gap-3 leading-relaxed transition ease-in-out duration-1000 h-fit rounded-lg "
                key={index}
              >
                <div
                  className="flex justify-between items-center cursor-pointer gap-3"
                  onClick={() => handleButtonClick(faq.name, index)}
                >
                  <span className="poppins text-lg font-[500]">
                    {info.question}
                  </span>
                  <button className={`flex justify-center items-center`}>
                    <FaPlus
                      className={`text-[#787878] transition-all ease-in-out duration-1000 ${
                        activeIndices.has(`${faq.name}-${index}`)
                          ? "rotate-45"
                          : ""
                      }`}
                    />
                  </button>
                </div>
                <AnimatePresence>
                  {activeIndices.has(`${faq.name}-${index}`) && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-clip flex flex-col gap-2"
                    >
                      <p className={`poppins text-[#4D4D4D]`}>
                        {activeIndices.has(`${faq.name}-${index}`) &&
                          info.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
