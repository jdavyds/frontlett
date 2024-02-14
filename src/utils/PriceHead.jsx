/* eslint-disable react/prop-types */
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function PriceHead({ title, items }) {
  const [currency, setCurrency] = useState("naira");

  return (
    <div
      className={`flex flex-col gap-10 text-start px-4 py-10 shadow-lg bg-white rounded-lg w-full h-full`}
    >
      <b className="font-bold text-primary text-xl">{title}</b>
      <div
        className={`grid grid-cols-1 grid-rows-[repeat(${items.length}, 200px)] h-full gap-10`}
      >
        {items.map((item, i) => (
          <div
            className={`text-[#1A3047] w-full h-full flex flex-col gap-2`}
            key={i}
          >
            <p className="text-sm">{item.text}</p>
            <div className="flex justify-between items-end w-full gap-2">
              <b className="text-xl font-bold">{item.price}</b>
              <Select
                value={currency}
                onChange={(value) => setCurrency(value)}
                displayEmpty
                sx={{
                  height: 25,
                  fontSize: 12,
                  backgroundColor: "#ECEEEF",
                }}
              >
                <MenuItem value="naira">NGN</MenuItem>
                <MenuItem disabled value="dollar">
                  USD
                </MenuItem>
                <MenuItem disabled value="pound">
                  GBP
                </MenuItem>
                <MenuItem disabled value="euro">
                  EUR
                </MenuItem>
              </Select>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-primary rounded-md min-h-10 h-10 w-full px-5 text-white">
        Get Started
      </button>
    </div>
  );
}
