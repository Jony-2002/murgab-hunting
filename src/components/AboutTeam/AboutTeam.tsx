"use client";
import { useRef } from "react";

import Image from "next/image";

import PREV_ICON from "@/assets/images/icon1.svg";
import NEXT_ICON from "@/assets/images/icon2.svg";

import { teamData, ITeam } from "@/data/team";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import "./AboutTeam.css";

export default function AboutTeam() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const slider = useRef<any>(null);

  return (
    <section className="relative w-[1150px] max-w-full m-auto px-10">
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20"
        onClick={() => slider?.current?.slickPrev()}
      >
        <Image src={PREV_ICON} alt="PREV_ICON" />
      </button>
      <Slider ref={slider} {...settings} arrows={false} swipe={false}>
        {teamData.map((person: ITeam, index: number) => {
          return (
            <div
              className="w-[150px] h-[350px] rounded-lg relative object-cover"
              key={person.id}
            >
              <div className="team-gradient rounded-lg"></div>
              <Image
                className="rounded-lg absolute w-full h-full object-cover"
                src={person.image}
                alt={person.name}
              />
              <h3 className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white uppercase text-lg z-30">
                {person.name} - {index + 1}
              </h3>
            </div>
          );
        })}
      </Slider>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20"
        onClick={() => slider?.current?.slickNext()}
      >
        <Image src={NEXT_ICON} alt="NEXT_ICON" />
      </button>
    </section>
  );
}
