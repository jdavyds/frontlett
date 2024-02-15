/* eslint-disable react/prop-types */
import PriceHead from "../../utils/PriceHead";
import check from "../../assets/check.svg";
import checki from "../../assets/check-i.svg";

export default function Table() {
  return (
    <main className="flex flex-col gap-10 py-10">
      <div className="-mt-[7%] flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] px-5 overflow-x-scroll snap gap-3 py-5">
        <nav className=""></nav>
        <nav className="">
          <PriceHead
            title="Basic"
            items={[
              {
                text: "Annual Registration",
                price: "20,000",
              },
              {
                text: "Monthly Payment",
                price: "4,000",
              },
            ]}
          />
        </nav>
        <nav className="">
          <PriceHead
            title="Startup"
            items={[
              {
                text: "Annual Registration",
                price: "50,000",
              },
              {
                text: "Monthly Payment",
                price: "10,000",
              },
            ]}
          />
        </nav>
        <nav className="">
          <PriceHead
            title="Small Business"
            items={[
              {
                text: "Annual Registration",
                price: "100,000",
              },
              {
                text: "Monthly Payment",
                price: "20,000",
              },
            ]}
          />
        </nav>
        <nav className="">
          <PriceHead
            title="Corporate"
            items={[
              {
                text: "Annual Registration",
                price: "200,000",
              },
              {
                text: "Monthly Payment",
                price: "40,000",
              },
            ]}
          />
        </nav>
      </div>
      <section className="flex flex-col gap-5">
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Monthly Retainership" />
          <FeatureList title="25% of Salary" />
          <FeatureList title="25% of Salary" />
          <FeatureList title="20% of Salary" />
          <FeatureList title="20% of Salary " />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Minimum Hires" />
          <FeatureList title="1" />
          <FeatureList title="2" />
          <FeatureList title="6" />
          <FeatureList title="11" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Maximum Hires" />
          <FeatureList title="1" />
          <FeatureList title="Up to 5" />
          <FeatureList title="Up to 10" />
          <FeatureList title="Unlimited" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Maximum Employees" />
          <FeatureList title="1" />
          <FeatureList title="Up to 5" />
          <FeatureList title="Up to 10" />
          <FeatureList title="Unlimited" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Minimum Slots/hire" />
          <FeatureList title="1" />
          <FeatureList title="1" />
          <FeatureList title="1" />
          <FeatureList title="1" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Can Hire Intern Skill"
            sub="(Starts at N40,000/$100/Mth) (Virtualt at N10,000/$25/Mth)"
          />
          <FeatureList title="4 weeks" />
          <FeatureList title="4 weeks" />
          <FeatureList title="6 weeks" />
          <FeatureList title="8 weeks" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Collaboration Tool" />
          <FeatureList title="2 included" />
          <FeatureList title="3 included" />
          <FeatureList title="5 included" />
          <FeatureList title="10 included" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="1 Month Salary Deposit"
            sub="(All Virtualting staffs are mandated to deposit one month salary)"
          />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Can Hire Intermediate Skill"
            sub="(Starts at N100,000/$250/Mth) (Virtualt at N25,000/$62.5/Mth)"
          />
          <FeatureList iconi={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Can Hire Senior Skill"
            sub="(Starts at N200,000/$500/Mth) (Virtualt at N50,000/$125/Mth)"
          />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Can Hire Advance Skill"
            sub="(Starts at N200,000/$500/Mth) (Virtualt at N100,000/$125/Mth)"
          />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Can Hire Executive Skill"
            sub="(Starts at N800,000/$2k/Mth) (Virtualt at N20,000/$50/Mth)"
          />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Can Hire Advisor/Founder Coach"
            sub="(Starts at N200,000/$500/Mth) (Virtualt at N20,000/$50/Mth)"
          />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Business Analyst Support"
            sub="(*By Founder School)"
          />
          <FeatureList title="1 Free" />
          <FeatureList title="2 Free" />
          <FeatureList title="5 Free" />
          <FeatureList title="10 Free" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Remote Work" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="1 Day Shift" sub="(1 Day/Week)" />
          <FeatureList iconi={true} />
          <FeatureList icon={true} sub="(Remote)" />
          <FeatureList
            icon={true}
            sub="(Available for same location and willingness to cover logistic cost)"
          />
          <FeatureList
            icon={true}
            sub="(Available for same location and willingness to cover logistic cost)"
          />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Multiple Day Shift" sub="(3 Day/Week)" />
          <FeatureList iconi={true} />
          <FeatureList icon={true} sub="Minimum 2 slots and Remote)" />
          <FeatureList
            icon={true}
            sub=" (Minimum 2 slots and in-office available for same location and willingness to cover logistic cost)"
          />
          <FeatureList
            icon={true}
            sub=" (Minimum 2 slots and in-office available for same location and willingness to cover logistic cost)"
          />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Time Shift" sub="(8am – 12noon) & (2pm – 6pm)" />
          <FeatureList iconi={true} />
          <FeatureList iconi={true} />
          <FeatureList
            icon={true}
            sub="(Minimum 2 slots and in-office available for same location and willingness to cover logistic cost)"
          />
          <FeatureList
            icon={true}
            sub="(Minimum 2 slots and in-office available for same location and willingness to cover logistic cost)"
          />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Free Digital Bank" sub="(*Powered By Glade.ng)" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Free Onboarding Training"
            sub="(*Powered By Workerbility.com)"
          />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Tracking Software" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Free HR Support" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Free Legal Advisory" sub="(*Powered By ByLaaw.com)" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="5% Retainership Cashback "
            sub="(Paid into your Grantty.org account to fund a startup of your choice)"
          />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="py-10 w-full flex justify-center items-center">
          <h3 className="text-[40px] font-bold">Optional Offerings</h3>
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="AWS Account Setup" sub="(*By HostULL)" />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
          <FeatureList icon={true} />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Virtual Desktop (3hrs/day)"
            sub="Work Doc Storage Microsoft Office Tools Data Security (*By HostULL)"
          />
          <FeatureList icon={true} title="₦8,000 50GB ₦3,000/mth" />
          <FeatureList icon={true} title="₦10,000 100GB ₦4,000/mth" />
          <FeatureList icon={true} title="₦12,000 250GB ₦5,000/mth" />
          <FeatureList icon={true} title="₦15,000 1TGB ₦6,000/mth" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Project Manager Assistant"
            sub="(*By Founder School)"
          />
          <FeatureList title="N20,000/Role" />
          <FeatureList title="N15,000/Role" />
          <FeatureList title="N12,500/Role" />
          <FeatureList title="N10,000/Role" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Remote Home Office Setup" sub="(*By Rakayar)" />
          <FeatureList icon={true} sub="(Request package)" />
          <FeatureList icon={true} sub="(Request package)" />
          <FeatureList icon={true} sub="(Request package)" />
          <FeatureList icon={true} sub="(Request package)" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="PC Power Bank"
            sub="(Pay-Small-Small: Available in select countries) (*By Rakayar)"
          />
          <FeatureList icon={true} sub="(From ₦7,000/mth or Request Package)" />
          <FeatureList icon={true} sub="(From ₦7,000/mth or Request Package)" />
          <FeatureList icon={true} sub="(From ₦7,000/mth or Request Package)" />
          <FeatureList icon={true} sub="(From ₦7,000/mth or Request Package)" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="CUG Line Monthly Rental" sub="(*By Zimr Mobile)" />
          <FeatureList title="N2,000/line" />
          <FeatureList title="N750/line" />
          <FeatureList title="N600/line" />
          <FeatureList title="N500/line" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Zoho Corporate Email/mth" sub="(*By HostULL)" />
          <FeatureList title="N500/Email" />
          <FeatureList title="N450/Email" />
          <FeatureList title="N400/Email" />
          <FeatureList title="N350/Email" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="GSuite Corporate Email/mth" sub="(*By HostULL)" />
          <FeatureList title="N3,000/Email" />
          <FeatureList title="N2,750/Email" />
          <FeatureList title="N2,500/Email" />
          <FeatureList title="N2,200/Email" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Discounted Employee"
            sub="Onboarding Kit (*By Skimake Prints)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦20,000/mth or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦20,000/mth or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦20,000/mth or Request Package)"
          />
          <FeatureList
            icon={true}
            sub="(From ₦20,000/mth or Request Package)"
          />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature
            title="Business Verification"
            sub="(*By Safe Business Online)"
          />
          <FeatureList icon={true} sub="(From ₦10,000/yr or Request Package)" />
          <FeatureList icon={true} sub="(From ₦10,000/yr or Request Package)" />
          <FeatureList icon={true} sub="(From ₦10,000/yr or Request Package)" />
          <FeatureList icon={true} sub="(From ₦10,000/yr or Request Package)" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Health Insurance" sub="(*By Avon Health)" />
          <FeatureList title="N3,000/Month" />
          <FeatureList title="N2,500/Month" />
          <FeatureList title="N2,000/Month" />
          <FeatureList title="N1,500/Month" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 bg-light-bg py-2">
          <Feature title="Visibility Insurance" sub="(*By Avon Health)" />
          <FeatureList title="N3,000/Month" />
          <FeatureList title="N2,500/Month" />
          <FeatureList title="N2,000/Month" />
          <FeatureList title="N1,500/Month" />
        </div>
        <div className="flex md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x px-5 md:px-10 overflow-x-scroll snap gap-3 py-2">
          <div></div>
          <nav className="w-full py-14 shadow-xl px-5 flex flex-col gap-5 text-center items-center justify-center rounded-lg">
            <b className="font-bold text-primary text-xl">Basic</b>
            <button className="bg-primary rounded-md min-h-10 h-10 w-full px-5 text-white">
              Get Started
            </button>
          </nav>
          <nav className="w-full py-14 shadow-xl px-5 flex flex-col gap-5 text-center items-center justify-center rounded-lg">
            <b className="font-bold text-primary text-xl">Startup</b>
            <button className="bg-primary rounded-md min-h-10 h-10 w-full px-5 text-white">
              Get Started
            </button>
          </nav>
          <nav className="w-full py-14 shadow-xl px-5 flex flex-col gap-5 text-center items-center justify-center rounded-lg">
            <b className="font-bold text-primary text-xl">Small Business</b>
            <button className="bg-primary rounded-md min-h-10 h-10 w-full px-5 text-white">
              Get Started
            </button>
          </nav>
          <nav className="w-full py-14 shadow-xl px-5 flex flex-col gap-5 text-center items-center justify-center rounded-lg">
            <b className="font-bold text-primary text-xl">Corporate</b>
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
