"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import DrawerDialog from "@/components/shared/DrawerWithDialog";


interface TruncatedTextProps {
  text: string;
  limit: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = text.split(" ");
  const displayedText = isExpanded
    ? text
    : words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "");

  return (
    <p className="mt-1 text-[15px] text-gray-600 pr-8">
      {displayedText}{" "}
      {words.length > limit && (
        <span
          className="text-gray-500 cursor-pointer hover:underline"
          onClick={() => setIsExpanded(!isExpanded)}
        >{isExpanded ?"see less" : "see more"}
        </span>
      )}
    </p>
  );
};

const staticPlans = Array.from({ length: 50 }, (_, index) => ({
  _id: `plan-${index + 1}`,
  nameoftheplace: `Cappadocia ${index + 1}`,
  description: "Lorem Ipsum is simply dummy text of the printing and . Lorem ipsum dol Laboriosam nihil sequi officiis aliquam repellat.",
  dateRange: "23 Oct, 2024 - 27 Oct 2024",
  rating: "5.0",
  imageUrl: `/trip-${(index % 9) + 1}.svg`,
}));

export default function Dashboard() {
  const [searchPlanText, setSearchPlanText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const plansPerPage = 9;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPlanText(e.target.value);
    setCurrentPage(1);
  };

  const filteredPlans = staticPlans.filter((plan) =>
    plan.nameoftheplace.toLowerCase().includes(searchPlanText.toLowerCase())
  );

  const paginatedPlans = filteredPlans.slice(
    (currentPage - 1) * plansPerPage,
    currentPage * plansPerPage
  );

  const totalPages = Math.ceil(filteredPlans.length / plansPerPage);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const paginationItems = [];

    if (currentPage > 0) {
      paginationItems.push(
        <button
          key="first"
          onClick={() => goToPage(1)}
          className="w-[45px] h-[45px] bg-white border font-bold rounded-full hover:bg-gray-300"
        >
          {"<<"}
        </button>
      );
    }

    if (currentPage > 0) {
      paginationItems.push(
        <button
          key="previous"
          onClick={() => goToPage(currentPage - 1)}
          className="w-[45px] h-[45px] font-bold bg-white border rounded-full hover:bg-gray-300"
        >
          {"<"}
        </button>
      );
    }

    // Render page numbers in the range [currentPage-2, currentPage+2]
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
      paginationItems.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`w-[45px] h-[45px] rounded-full font-[500] ${i === currentPage ? 'bg-[#6D5FFD] text-white' : 'bg-white border  hover:bg-gray-300'}`}
        >
          {i}
        </button>
      );
    }

    // Display ... (ellipsis) if there are more pages after the current range
    if (currentPage + 2 < totalPages) {
      paginationItems.push(
        <span key="ellipsis-end" className="w-[45px] h-[45px] font-bold text-gray-500">
          ...
        </span>
      );
    }

    // Display > button for the next page (only if currentPage < totalPages)
    if (currentPage < totalPages) {
      paginationItems.push(
        <button
          key="next"
          onClick={() => goToPage(currentPage + 1)}
          className="w-[45px] h-[45px] font-bold bg-white border rounded-full hover:bg-gray-300"
        >
          {">"}
        </button>
      );
    }

    // Display >> button for the last page (only if currentPage < totalPages)
    if (currentPage < totalPages) {
      paginationItems.push(
        <button
          key="last"
          onClick={() => goToPage(totalPages)}
          className="w-[45px] h-[45px] bg-white border font-bold rounded-full hover:bg-gray-300"
        >
          {">>"}
        </button>
      );
    }

    return paginationItems;
  };

  return (
    <section className="w-full h-full flex-1 flex flex-col pb-10">
      <div className="container">
        <div className="flex justify-between sm:flex-row flex-col items-center py-10">
          <h2 className="text-3xl font-bold sm:my-0 my-4">My Trips</h2>

          <div className="flex gap-3 sm:flex-row xsm:flex-col flex-col">
            <div className="relative">
              <Search className="absolute left-2.5 top-3 h-4 w-4 text-[#6D5FFD]" />
              <Input
                id="searchPlan"
                name="searchPlan"
                onChange={handleSearch}
                value={searchPlanText}
                placeholder="Search Travel Plan..."
                type="search"
                className="w-25 cursor-pointer rounded-full focus-visible:outline-none focus:outline-none active:outline-none bg-background pl-8 transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
              />
            </div>
            <DrawerDialog shouldOpenForCreatePlan={true} />
          </div>
        </div>

        {/* Display the filtered and paginated plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {paginatedPlans.map((plan) => (
            <div key={plan._id} className="relative my-3">
              <div className="relative rounded">
                <Image src="/trip-shadow.svg" width={100} height={100} quality={100} priority alt="trip"
                  className="rounded-3xl object-center w-full h-full block z-[-1] absolute top-[50px]" />
                <Image
                  src={plan.imageUrl}
                  width={100}
                  height={100}
                  quality={100}
                  priority
                  alt="trip"
                  className="rounded-3xl object-center w-full h-full block z-10"
                />
                <div
                  className="w-[85px] bg-[#0C111F10] shadow-inner flex justify-center gap-2 items-center text-white absolute top-3 right-4 rounded-full py-[10px]"
                  style={{ boxShadow: "inset 0 0 20px 2px rgba(255, 255, 255, 0.4)" }}
                >
                  <Image
                    src="/Star.svg"
                    width={20}
                    height={20}
                    quality={100}
                    alt="star"
                    priority
                  />
                  <span className="mt-[2px]">{plan.rating}</span>
                </div>
              </div>
              <div className="mt-4 pl-4">
                <h2 className="text-[#0E051F] font-[650] text-xl">{plan.nameoftheplace}</h2>
                <TruncatedText
                text={plan.description}
                limit={10}
              />
                
              </div>
              <div className="mt-1 px-4 py-3 rounded-b-3xl flex gap-2 items-center">
                <Image src="/calendar.svg" width={20} height={20} quality={100} alt="calendar" priority />
                <span className="text-sm">{plan.dateRange}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination UI */}
        <div className="flex justify-end gap-4 my-9">
          {renderPagination()}
        </div>
      </div>
    </section>
  );
}
