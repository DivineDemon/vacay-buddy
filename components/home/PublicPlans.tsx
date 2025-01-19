"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const trips = [
  {
    title: "Cappadocia",
    location: "Machu Picchu, Peru",
    description: "Lorem Ipsum is simply dummy text of the printing and. Laboriosam nihil sequi officiis aliquam repellat.",
    price: 380,
    rating: "5.0",
    imageSrc: "/trip-1.svg",
  },
  {
    title: "Singapore",
    location: "French Riviera, France",
    description: "Lorem Ipsum is simply dummy text of the printing and. Laboriosam nihil sequi officiis aliquam repellat.",
    price: 300,
    rating: "5.0",
    imageSrc: "/trip-2.svg",
  },
  {
    title: "Amsterdam",
    location: "Seville, Spain",
    description: "Lorem Ipsum is simply dummy text of the printing and. Laboriosam nihil sequi officiis aliquam repellat.",
    price: 200,
    rating: "5.0",
    imageSrc: "/trip-1.svg",
  },
  {
    title: "Kyoto",
    location: "Tokyo, Japan",
    description: "Lorem Ipsum is simply dummy text of the printing and. Laboriosam nihil sequi officiis aliquam repellat.",
    price: 450,
    rating: 4.8,
    imageSrc: "/trip-4.svg",
  },
  {
    title: "Barcelona",
    location: "Catalonia, Spain",
    description: "Lorem Ipsum is simply dummy text of the printing and. Laboriosam nihil sequi officiis aliquam repellat.",
    price: 380,
    rating: 4.9,
    imageSrc: "/trip-5.svg",
  },
  {
    title: "New York",
    location: "New York City, USA",
    description: "Lorem Ipsum is simply dummy text of the printing and. Laboriosam nihil sequi officiis aliquam repellat.",
    price: 500,
    rating: "5.0",
    imageSrc: "/trip-6.svg",
  },
  {
    title: "Paris",
    location: "Île-de-France, France",
    description: "Lorem Ipsum is simply dummy text of the printing and. Laboriosam nihil sequi officiis aliquam repellat.",
    price: 600,
    rating: "5.0",
    imageSrc: "/trip-7.svg",
  },
  {
    title: "Sydney",
    location: "New South Wales, Australia",
    description: "Lorem Ipsum is simply dummy text of the printing and. Laboriosam nihil sequi officiis aliquam repellat.",
    price: 420,
    rating: 4.7,
    imageSrc: "/trip-8.svg",
  },
  {
    title: "Dubai",
    location: "UAE",
    description: "Lorem Ipsum is simply dummy text of the printing and. Laboriosam nihil sequi officiis aliquam repellat.",
    price: 700,
    rating: 4.9,
    imageSrc: "/trip-9.svg",
  }
];




// Define the props interface for TruncatedText
interface TruncatedTextProps {
  text: string; // The text to display
  limit: number; // The word limit before truncating
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split text into words
  const words = text.split(" ");

  // Determine what to display
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
        >{isExpanded ? "see less" : "see more"}
        </span>
      )}
    </p>
  );
};



export default async function PublicPlans() {
  return (
    <section
      id="public-plans"
      className="relative w-full py-[50px] flex justify-center items-end" >
      <div className="container">
        <div className="flex flex-col gap-2 w-full mb-[50px] ">
          <section className="flex flex-col gap-5 text-left absolute top-[95px]">
            <h2 className="text-[#6D5FFD] text-lg font-bold tracking-wide">
              OUR COMMUNITY'S
            </h2>
            <h3 className="text-foreground md:text-4xl text-xl font-bold ">
              Favorite Trips
            </h3>
          </section>
        </div>
        <Swiper
          autoplay={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={50}
          navigation={true}
          speed={500}
          modules={[Navigation]}
          className="mySwipper"
          breakpoints={{
            1400: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: false,
            }
          }}
        >



          {trips.map((trip, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="relative shadow rounded-[40px] w-full bg-center">
                <div className="relative rounded">
                  <Image
                    src="/trip-shadow.svg"
                    width={100}
                    height={100}
                    quality={100}
                    priority
                    alt="trip"
                    className="rounded-3xl object-center w-full h-full block z-[-1] absolute top-[50px]"
                  />
                  <Image
                    src={trip.imageSrc}
                    width={100}
                    height={100}
                    quality={100}
                    priority
                    alt="trip"
                    className="rounded-3xl object-center w-full h-full block z-10"
                  />
                  <div
                    className="w-[85px] bg-[#0C111F10] shadow-inner flex justify-center gap-2 items-center text-white absolute top-3 right-4 rounded-full py-[10px]"
                    style={{ boxShadow: 'inset 0 0 20px 2px rgba(255, 255, 255, 0.4)' }}
                  >
                    <Image
                      src="/Star.svg"
                      width={20}
                      height={20}
                      quality={100}
                      alt="star"
                      priority
                    />
                    <span className="mt-[2px]">{trip.rating}</span>
                  </div>
                </div>
                <div className="mt-4 pl-4">
                  <h2 className="text-[#0E051F] font-[650] text-xl">{trip.title}</h2>
                  <TruncatedText text={trip.description} limit={10} />
                </div>
                <div className="mt-5 px-4 py-3 rounded-b-3xl flex justify-between items-center bg-[#f7f7f7]">
                  <div className="flex flex-col">
                    <p className="text-[15px] text-gray-600">{trip.location}</p>
                    <div className="flex gap-1 items-center">
                      <b className="text-xl font-[650] text-[#0E051F]">${trip.price}</b>
                      <p className="text-[12px] text-gray-400">x 12 Interest free</p>
                    </div>
                  </div>
                  <button className="bg-[#6D5FFD] px-3 rounded-full text-sm text-gray-100 hover:bg-black transition-all h-[40px]">See More</button>
                </div>
              </div>
            </SwiperSlide>
          ))}


        </Swiper>

      </div>
    </section>
  );
}
