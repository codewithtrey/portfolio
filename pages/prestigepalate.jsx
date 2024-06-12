import Image from "next/image";
import React from "react";
import prestigepalateImg from "../public/assets/projects/prestigepalate.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const prestigepalate = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={prestigepalateImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Prestige Palate</h2>
          <h3>React / FastAPI / PostgreSQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Project Overview</h2>
          <p className="py-2 text-gray-600">
            Prestige Palate caters to discerning food enthusiasts who are eager
            to embark on their next global culinary journey. This application
            allows you to discover and keep tabs on the trendiest dining
            establishments worldwide, connect with like-minded foodies, and
            broaden your culinary horizons. Relive cherished moments by perusing
            your photos and reviews, or offer valuable insights to friends
            regarding dining experiences that may have fallen short of
            expectations. Prestige Palate stands as the premier choice for food
            aficionados seeking an alternative to paid reviews and biased
            ratings. Thanks to Prestige Palate's exclusive referral program, you
            can trust that you're receiving authentic recommendations from
            genuine individuals.
          </p>
          <p className="py-2 text-gray-600">
            This Single Page Application harnesses the power of React and is
            hosted on GitLab Pages. It empowers users to explore restaurants
            globally by conducting searches based on City, State, and Country
            criteria, thus providing a curated list of top dining
            establishments. Detailed restaurant information is seamlessly
            integrated using both the Google Places and Maps Geocoding APIs.
            Additionally, the app offers user authentication functionality,
            enabling you to sign up and log in using your email address. This
            access allows you to save your favorite restaurants and contribute
            restaurant reviews, enhancing the overall user experience.
          </p>
          <a
            href="https://gitlab.com/mambo-number-5/prestige-palate"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://mambo-number-5.gitlab.io/prestige-palate/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> FastAPI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Places API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Maps Geocoding API
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

export default prestigepalate;
