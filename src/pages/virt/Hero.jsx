export default function Hero() {
  return (
    <div className="min-h-[50vh] bg-light-bg py-10 md:py-24 px-5 md:px-20 flex flex-col  items-center gap-10 text-center">
      <h3 className="font-bold text-2xl md:text-[40px] md:w-1/2 text-tertiary leading-normal">
        Pricing to suit all sizes of business. Pick the plan that’s right for
        you.
      </h3>
      <p className="md:w-1/3">
        Our plans have been carefully arranged to suit you. You can change your
        plan or cancel whenever you decide.
      </p>
      <b className="text-xl">Employer Pricing</b>
    </div>
  );
}
