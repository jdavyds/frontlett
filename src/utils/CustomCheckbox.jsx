/* eslint-disable react/prop-types */

export const CustomCheckboxGroup = ({
  options,
  name,
  setSelected,
  selected,
}) => {
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.value]);
    } else {
      setSelected(selected.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="flex flex-col gap-3" tabIndex={0}>
      {options.map((option, index) => (
        <div key={index} className="flex gap-3 justify-between items-center">
          <nav key={index} className="flex gap-3 items-center">
            <input
              type="checkbox"
              className="h-5 w-5"
              name={name}
              id={option.name}
              value={option.name}
              checked={selected.includes(option.name)}
              onChange={handleCheckboxChange}
            />{" "}
            <span>{option.name}</span>
          </nav>
          <span
            className={` rounded text-xs w-7 h-7 flex justify-center items-center
          ${
            selected.includes(option.name)
              ? "bg-[#D0E2F3] text-primary"
              : "bg-[#C4C4C478]"
          }
          `}
          >
            {option.no}
          </span>
        </div>
      ))}
    </div>
  );
};
