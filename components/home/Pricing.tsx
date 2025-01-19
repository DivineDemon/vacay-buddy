// import { features } from "@/lib/constants";
// import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const Pricing = () => {
  return (
    <section id="pricing" className="w-full flex flex-col gap-5 justify-center items-center py-[100px]">
      <div className="container">
        <div className="flex flex-col gap-2 mb-[100px]">
          <h2 className="text-[#6D5FFD] text-lg font-bold tracking-wide uppercase text-center">Pricing</h2>
          <h3 className="text-foreground text-center md:text-5xl text-xl my-3 font-bold ">
            Simple, transparent pricing
          </h3>
          <p className="text-center text-gray-500 max-w-[600px] mx-auto mt-1">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat.</p>
        </div>
        <div className="flex gap-5 flex-col md:flex-row">
          <article
            className="flex flex-col justify-between flex-1 xl:size-4/12 md:size-10/12 size-full 
                  rounded-3xl p-8 shadow-xl shadow-gray-200 dark:shadow-none"
          >
            <div className="flex items-center gap-4 mb-3">
              <Image src='/free-plan.svg' alt="plan" width={60} height={100} quality={100} priority />
              <div className="flex flex-col">
                <div className="text-gray-400">Free Plan</div>
                <h3 id="tier-standard" className="text-black text-2xl font-extrabold leading-8">
                  0 Credit
                </h3>
              </div>
            </div>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fugiat. Suscipit, quae facere.</p>
            <span className="text-5xl font-bold my-4 tracking-tight text-black">
              $00
            </span>
            <div className="flex flex-col">
              <ul role="list" className=" space-y-3 text-sm leading-6 text-foreground">
                <h4 className="text-sm">What's Included</h4>
                <li className="flex gap-x-3 text-base">
                  <Image src='/paid-check.svg' width={20} height={100} quality={100} alt="check" priority />
                  All analytics features
                </li>
                <li className="flex gap-x-3 text-base">
                  <Image src='/paid-check.svg' width={20} height={100} quality={100} alt="check" priority />
                  Up to 250,000 tracked visits
                </li>
                <li className="flex gap-x-3 text-base">
                  <Image src='/paid-check.svg' width={20} height={100} quality={100} alt="check" priority />
                  Normal support
                </li>
                <li className="flex gap-x-3 text-base">
                  <Image src='/paid-check.svg' width={20} height={100} quality={100} alt="check" priority />
                  Up to 3 team members
                </li>
              </ul>
            </div>
            <button className="rounded-full py-5 hover:bg-[#111] transition-all text-white my-6 w-full bg-[#6D5FFD]">Get Started</button>
          </article>
          <article
            className="flex flex-col justify-between flex-1 xl:size-4/12 md:size-10/12 size-full bg-[#6D5FFD]
               rounded-3xl p-8 shadow-xl shadow-gray-400 dark:shadow-none lg:-translate-y-10">
            <div className="flex items-center gap-4 mb-3">
              <Image src='/popular-plan.svg' alt="plan" width={60} height={100} quality={100} priority />
              <div className="flex flex-col">
                <div className="text-gray-200">Paid Plan</div>
                <h3 id="tier-standard" className="text-white text-2xl font-extrabold leading-8">
                  05 Credits
                </h3>
              </div>
            </div>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fugiat. Suscipit, quae facere.</p>
            <span className="text-5xl font-bold my-4 tracking-tight text-white">
              $89
            </span>
            <div className="flex flex-col">
              <ul role="list" className=" space-y-3 text-sm leading-6 text-gray-300">
                <h4 className="text-sm text-white">What's Included</h4>
                <li className="flex gap-x-3 text-base">
                  <Image src='/popular-check.svg' width={20} height={100} quality={100} alt="check" priority />
                  All analytics features
                </li>
                <li className="flex gap-x-3 text-base">
                  <Image src='/popular-check.svg' width={20} height={100} quality={100} alt="check" priority />
                  Up to 1,000,000 tracked visits
                </li>
                <li className="flex gap-x-3 text-base">
                  <Image src='/popular-check.svg' width={20} height={100} quality={100} alt="check" priority />
                  Premium support
                </li>
                <li className="flex gap-x-3 text-base">
                  <Image src='/popular-check.svg' width={20} height={100} quality={100} alt="check" priority />
                  Up to 10 team members
                </li>
              </ul>
            </div>
            <button className="rounded-full py-5 font-bold my-6 w-full bg-white hover:bg-[#111] transition-all hover:text-white text-[#6D5FFD]">Get Started</button>
          </article>
          <article
            className="flex flex-col justify-between flex-1 xl:size-4/12 md:size-10/12 size-full rounded-3xl p-8 shadow-xl shadow-gray-200 dark:shadow-none">
            <div className="flex items-center gap-4 mb-3">
              <Image src='/paid-plan.svg' alt="plan" width={60} height={100} quality={100} priority />
              <div className="flex flex-col">
                <div className="text-gray-400">Paid Plan</div>
                <h3 id="tier-standard" className="text-black text-2xl font-extrabold leading-8">
                  10 Credits
                </h3>
              </div>
            </div>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fugiat. Suscipit, quae facere.</p>
            <span className="text-5xl font-bold my-4 tracking-tight text-black">
              $129
            </span>
            <div className="flex flex-col">
              <ul role="list" className=" space-y-3 text-sm leading-6 text-foreground">
                <h4 className="text-sm">What's Included</h4>
                <li className="flex gap-x-3 text-base">
                  <Image src='/popular-check.svg' width={20} height={100} quality={100} alt="check" priority />
                  All analytics features
                </li>
                <li className="flex gap-x-3 text-base">
                  <Image src='/popular-check.svg' width={20} height={100} quality={100} alt="check" priority />
                  Up to 5,000,000 tracked visits
                </li>
                <li className="flex gap-x-3 text-base">
                  <Image src='/popular-check.svg' width={20} height={100} quality={100} alt="check" priority />
                  Dedicated support
                </li>
                <li className="flex gap-x-3 text-base">
                  <Image src='/popular-check.svg' width={20} height={100} quality={100} alt="check" priority />
                  Up to 50 team members
                </li>
              </ul>
            </div>
            <button className="rounded-full py-5 hover:bg-[#111] transition-all text-white my-6 w-full bg-[#6D5FFD]">Get Started</button>
          </article>
        </div>
      </div>
    </section>
  );
};

// const PricingCard = ({ isFreePlan }: { isFreePlan: boolean }) => {
//   return (
//     <article
//       className="flex flex-col justify-between flex-1 min-w-96 md:min-w-80
//                   rounded-3xl p-8 shadow-xl shadow-blue-200 dark:shadow-none"
//     >
//       <div className="flex flex-col">
//         <div>{isFreePlan ? "Free" : "Paid"} Plan</div>
//         <h3 id="tier-standard" className="text-black text-2xl font-extrabold leading-8">
//           {isFreePlan ? "1 Credit" : "5 Credits"}
//         </h3>
//         <p className="mt-3 flex items-baseline gap-x-1">
//           <span className="line-through text-2xl font-sans text-muted-foreground/70">₹400</span>
//           <span className="text-3xl font-bold tracking-tight text-muted-foreground">
//             {isFreePlan ? "₹0" : "₹80"}
//           </span>
//         </p>
//       </div>
//       <div className="flex flex-col">
//         <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-foreground xl:mt-10">
//           {features.map((faature, index) => (
//             <li className="flex gap-x-3 text-base" key={index}>
//               <Image src='/popular-check.svg' width={20} height={100} quality={100} alt="check" priority />
//               {faature}
//             </li>
//           ))}
//         </ul>

//         <p className="text-xs text-muted-foreground text-base-content-secondary/80 font-medium mt-5">
//           {isFreePlan ? "Free Plan" : "One-time payment"}. No subscription
//         </p>
//       </div>
//     </article>
//   );
// };

export default Pricing;
