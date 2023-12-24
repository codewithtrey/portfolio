import Image from "next/image";
import React from "react";
import eventImg from "../public/assets/projects/EventPro.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const eventPro = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={eventImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">EventPro</h2>
          <h3>React / Django / RabbitMQ</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2 text-gray-600">
            EventPro is a Single Page Application that allows users to manage all aspects
            of a conference in one place. Users can list and attend conferences,
            create new conferences, sign up for events, and submit their
            presentations for approval. Additionally, users can create
            conference locations, including details such as room capacity,
            maximum attendees and what state. With all these features, EventPro
            provides an efficient solution for organizing and attending
            conferences.
          </p>
          <p className="py-2 text-gray-600">
            EventPro also leverages the power of two external APIs, Pexels and
            OpenWeather API, to create a unique and interactive experience for
            conference organizers and attendees. The Pexels API provides access
            to a vast library of high-quality images that can be used to enhance
            the visual appeal of the conference and its presentations. Based on
            the conference location, the application can automatically display
            images that are relevant and appropriate to the event. The
            OpenWeather API integrates real-time weather data into the
            application, allowing organizers to keep attendees informed of
            current weather conditions at the conference location. The weather
            information is displayed prominently in the application, giving
            attendees a quick and easy way to check the conditions before they
            head out to the event.
          </p>
          <a
            href="https://github.com/codewithtrey/EventPro"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Django
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> RabbitMQ
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Docker
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Pexels API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> OpenWeatherAPI
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default eventPro;
