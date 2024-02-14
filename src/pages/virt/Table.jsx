/* eslint-disable react/prop-types */
import PriceHead from "../../utils/PriceHead";
import check from "../../assets/check.svg";
import checki from "../../assets/check-i.svg";

export default function Table() {
  return (
    <main className="flex flex-col gap-10 py-10">
      <div className="-mt-[7%] flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] px-5 overflow-x-scroll snap gap-3 py-5">
        <nav className=""></nav>
        <nav className="">
          <PriceHead
            title="Intern"
            items={[
              {
                text: (
                  <>
                    Annual Registration <br /> (Billed Yearly)
                  </>
                ),
                price: "10,000",
              },
              {
                text: (
                  <>
                    Annual Registration <br /> (Billed Monthly)
                  </>
                ),
                price: "2,000",
              },
              {
                text: "Monthly Salary",
                price: "30,000",
              },
              {
                text: "Virtualt Salary/Slot",
                price: "7,500",
              },
            ]}
          />
        </nav>
        <nav className="">
          <PriceHead
            title="Junior"
            items={[
              {
                text: (
                  <>
                    Annual Registration <br /> (Billed Yearly)
                  </>
                ),
                price: "10,000",
              },
              {
                text: (
                  <>
                    Annual Registration <br /> (Billed Monthly)
                  </>
                ),
                price: "3,000",
              },
              {
                text: "Monthly Salary",
                price: "50,000",
              },
              {
                text: "Virtualt Salary/Slot",
                price: "15,000",
              },
            ]}
          />
        </nav>
        <nav className="">
          <PriceHead
            title="Intermediate"
            items={[
              {
                text: (
                  <>
                    Annual Registration <br /> (Billed Yearly)
                  </>
                ),
                price: "15,000",
              },
              {
                text: (
                  <>
                    Annual Registration <br /> (Billed Monthly)
                  </>
                ),
                price: "4,000",
              },
              {
                text: "Monthly Salary",
                price: "100,000-150,000",
              },
              {
                text: "Virtualt Salary/Slot",
                price: "25,000-37,500",
              },
            ]}
          />
        </nav>
        <nav className="">
          <PriceHead
            title="Senior"
            items={[
              {
                text: (
                  <>
                    Annual Registration <br /> (Billed Yearly)
                  </>
                ),
                price: "20,000",
              },
              {
                text: (
                  <>
                    Annual Registration <br /> (Billed Monthly)
                  </>
                ),
                price: "5,000",
              },
              {
                text: "Monthly Salary",
                price: "200,000-300,000",
              },
              {
                text: "Virtualt Salary/Slot",
                price: "50,000-75,000",
              },
            ]}
          />
        </nav>
        <nav className="">
          <PriceHead
            title="Advanced/Exec."
            items={[
              {
                text: (
                  <>
                    Annual Registration <br /> (Billed Yearly)
                  </>
                ),
                price: "50,000",
              },
              {
                text: (
                  <>
                    Annual Registration <br /> (Billed Monthly)
                  </>
                ),
                price: "10,000",
              },
              {
                text: "Monthly Salary",
                price: "400,000-800,000",
              },
              {
                text: "Virtualt Salary/Slot",
                price: "100,000-200,000",
              },
            ]}
          />
        </nav>
        <nav className="">
          <PriceHead
            title="Advisor"
            items={[
              {
                text: (
                  <>
                    Annual Registration <br /> (Billed Yearly)
                  </>
                ),
                price: "50,000",
              },
              {
                text: (
                  <>
                    Annual Registration <br /> (Billed Monthly)
                  </>
                ),
                price: "10,000",
              },
              {
                text: "Monthly Salary",
                price: "5,000,000-1,500,000",
              },
              {
                text: "Virtualt Salary/Slot",
                price: "100,000-200,000",
              },
            ]}
          />
        </nav>
      </div>
      <section className="flex flex-col gap-5">
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="No of Profile Post" />
          <FeatureList title="1" />
          <FeatureList title="Up to 2" />
          <FeatureList title="Up to 5" />
          <FeatureList title="Up to 5" />
          <FeatureList title="Up to 10" />
          <FeatureList title="Up to 10" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Minimum Slots" />
          <FeatureList title="1" />
          <FeatureList title="1" />
          <FeatureList title="1" />
          <FeatureList title="1" />
          <FeatureList title="1" />
          <FeatureList title="1" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Maximum Slots" />
          <FeatureList title="4" />
          <FeatureList title="4" />
          <FeatureList title="4" />
          <FeatureList title="4" />
          <FeatureList title="4" />
          <FeatureList title="4" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Resignation Notice"
            sub="(Purpose is to help you build long term hires)"
          />
          <FeatureList title="4-8 Weeks" />
          <FeatureList title="4-8 Weeks" />
          <FeatureList title="4-8 Weeks" />
          <FeatureList title="4-8 Weeks" />
          <FeatureList title="4-8 Weeks" />
          <FeatureList title="4-8 Weeks" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="1 Month Salary Deposit"
            sub="(All Virtualting staffs are mandated to deposit one month salary, in case they resign without notice)"
          />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Take a loan on your salary deposit" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Collaboration Tool" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Work as an Intern Virtualt" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Work as an Junior Virtualt" />
          <FeatureList iconi={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Work as an Intermediate Virtualt" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Work as an Senior Virtualt" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Work as an Advance Virtualt" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Work as an Executive Virtualt" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Work as an Advisory Virtualt" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="HR Specialist Support"
            sub="(We'll assign an HR Specialist to learn about your skill and help you write a true-value profile that will help you succeed on Frontlett) (*Powered By Founder School)"
          />
          <FeatureList
            title="1 Free Profile Writing"
            sub="(Then ₦20,000/Profile)"
          />
          <FeatureList
            title="1 Free Roles Profile Writing"
            sub="(Then ₦20,000/Profile)"
          />
          <FeatureList
            title="2 Free Roles Profile Writing"
            sub="(Then ₦20,000/Profile)"
          />
          <FeatureList
            title="2 Free Roles Profile Writing"
            sub="(Then ₦20,000/Profile)"
          />
          <FeatureList
            title="5 Free Roles Profile Writing"
            sub="(Then ₦20,000/Profile)"
          />
          <FeatureList
            title="5 Free Roles Profile Writing"
            sub="(Then ₦20,000/Profile)"
          />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Remote Work" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="On-site Work" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="1 Day Shift" sub="(1 Day/Week)" />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
          <FeatureList
            icon={true}
            sub="(Available for same location and logistic covered)"
          />
          <FeatureList
            icon={true}
            sub="(Available for same location and logistic covered)"
          />
          <FeatureList
            icon={true}
            sub="(Available for same location and logistic covered)"
          />
          <FeatureList
            icon={true}
            sub="(Available for same location and logistic covered)"
          />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Multiple Day Shift" sub="(1 Day/Week)" />
          <FeatureList icon={true} sub="Minimum 2 slots and Remote)" />
          <FeatureList icon={true} sub="Minimum 2 slots and Remote)" />
          <FeatureList
            icon={true}
            sub="(Minimum 2 slots and in-office available for same location and logistic covered)"
          />
          <FeatureList
            icon={true}
            sub="(Minimum 2 slots and in-office available for same location and logistic covered)"
          />
          <FeatureList
            icon={true}
            sub="(Minimum 2 slots and in-office available for same location and logistic covered)"
          />
          <FeatureList
            icon={true}
            sub="(Minimum 2 slots and in-office available for same location and logistic covered)"
          />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Time Shift" sub="(8am – 12noon) & (2pm – 6pm)" />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
          <FeatureList
            icon={true}
            sub="(Minimum 2 slots and in-office available for same location and logistic covered)"
          />
          <FeatureList
            icon={true}
            sub="(Minimum 2 slots and in-office available for same location and logistic covered)"
          />
          <FeatureList
            icon={true}
            sub="(Minimum 2 slots and in-office available for same location and logistic covered)"
          />
          <FeatureList
            icon={true}
            sub="(Minimum 2 slots and in-office available for same location and logistic covered)"
          />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Salary Account" sub="(*Powered By Glade.ng)" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Free Onboarding Training"
            sub="(*Powered By Workerbility.com)"
          />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Tracking Software" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Free HR Support" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Free Legal Advisory" sub="(*Powered By ByLaaw.com)" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="5% Monthly Fee Cashback "
            sub="(Paid into your Grantty.org account to fund a startup of your choice)"
          />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="py-10 w-full flex justify-center items-center">
          <h3 className="text-[40px] font-bold">Optional Offerings</h3>
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Advanced Skill Training " />
          <FeatureList title="N10,000/Course" />
          <FeatureList title="N10,000/Course" />
          <FeatureList title="N20,000/Course" />
          <FeatureList title="N30,000/Course" />
          <FeatureList title="N30,000/Course" />
          <FeatureList title="N50,000/Course" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Staff Group Line"
            sub="(With unlimited free mobile calls & limited free data. Available in select countries) (*Powered By ZimrMobile.com)"
          />
          <FeatureList title="₦1,000/Mth/Line" />
          <FeatureList title="₦1,000/Mth/Line" />
          <FeatureList title="₦1,000/Mth/Line" />
          <FeatureList title="₦1,000/Mth/Line" />
          <FeatureList title="₦1,000/Mth/Line" />
          <FeatureList title="₦1,000/Mth/Line" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Remote Home Office Setup"
            sub="(*Powered By Rakayar.com)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦25,000 or ₦5,000/mth over 6 months  or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦25,000 or ₦5,000/mth over 6 months  or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦25,000 or ₦5,000/mth over 6 months  or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦25,000 or ₦5,000/mth over 6 months  or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦25,000 or ₦5,000/mth over 6 months  or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦25,000 or ₦5,000/mth over 6 months  or Request Package)"
          />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="PC Power Bank"
            sub="(Pay-Small-Small: Available in select countries) (*Powered By Rakayar.com)"
          />
          <FeatureList
            icon={true}
            sub="From ₦50,000 or ₦8,000/mth or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="From ₦50,000 or ₦8,000/mth or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="From ₦50,000 or ₦8,000/mth or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="From ₦50,000 or ₦8,000/mth or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="From ₦50,000 or ₦8,000/mth or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="From ₦50,000 or ₦8,000/mth or Request Package)"
          />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Laptop Purchase"
            sub="(Pay-Small-Small: Available in select countries) (*Powered By Rakayar.com)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦70,000 or ₦15,000/mth or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦70,000 or ₦15,000/mth or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦70,000 or ₦15,000/mth or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦70,000 or ₦15,000/mth or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦70,000 or ₦15,000/mth or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦70,000 or ₦15,000/mth or Request Package)"
          />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 py-2">
          <div></div>
          <nav className="w-full py-14 shadow-xl px-5 flex flex-col gap-5 text-center items-center justify-center rounded-lg">
            <b className="font-bold text-primary text-xl">Intern</b>
            <button className="bg-primary rounded-md min-h-10 h-10 w-full px-5 text-white">
              Get Started
            </button>
          </nav>
          <nav className="w-full py-14 shadow-xl px-5 flex flex-col gap-5 text-center items-center justify-center rounded-lg">
            <b className="font-bold text-primary text-xl">Junior</b>
            <button className="bg-primary rounded-md min-h-10 h-10 w-full px-5 text-white">
              Get Started
            </button>
          </nav>
          <nav className="w-full py-14 shadow-xl px-5 flex flex-col gap-5 text-center items-center justify-center rounded-lg">
            <b className="font-bold text-primary text-xl">Intermediate</b>
            <button className="bg-primary rounded-md min-h-10 h-10 w-full px-5 text-white">
              Get Started
            </button>
          </nav>
          <nav className="w-full py-14 shadow-xl px-5 flex flex-col gap-5 text-center items-center justify-center rounded-lg">
            <b className="font-bold text-primary text-xl">Senior</b>
            <button className="bg-primary rounded-md min-h-10 h-10 w-full px-5 text-white">
              Get Started
            </button>
          </nav>
          <nav className="w-full py-14 shadow-xl px-5 flex flex-col gap-5 text-center items-center justify-center rounded-lg">
            <b className="font-bold text-primary text-xl">Advanced/Exec</b>
            <button className="bg-primary rounded-md min-h-10 h-10 w-full px-5 text-white">
              Get Started
            </button>
          </nav>
          <nav className="w-full py-14 shadow-xl px-5 flex flex-col gap-5 text-center items-center justify-center rounded-lg">
            <b className="font-bold text-primary text-xl">Advisor</b>
            <button className="bg-primary rounded-md min-h-10 h-10 w-full px-5 text-white">
              Get Started
            </button>
          </nav>
        </div>
      </section>
    </main>
  );
}

const Feature = ({ title, sub }) => {
  return (
    <div className="flex flex-col gap-2 pr-2">
      <h4 className="text-xl font-semibold">{title}</h4>
      <span className="italic">{sub}</span>
    </div>
  );
};

const FeatureList = ({ title, sub, icon, iconi }) => {
  return (
    <div className="flex gap-2 px-4 w-full items-center">
      {icon && <img src={check} alt="" />}
      {iconi && <img src={checki} alt="" />}
      <div className="flex flex-col gap-2">
        {title && <h4 className=" font-medium">{title}</h4>}
        {sub && <span className="italic text-xs text-[#00000087]">{sub}</span>}
      </div>
    </div>
  );
};
