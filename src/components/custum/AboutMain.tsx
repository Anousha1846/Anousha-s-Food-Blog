import React from "react";
import Image from "next/image";
import AFB from "../../../public/AFBs.webp";

const AboutMain = () => {
  return (
    <main className="grid lg:grid-cols-[10%_80%_10%] lg:py-20 py-10  grid-cols-[3%_94%_3%] h-[100%] w-[100%]">
      <section className=""></section>
      <section>
        <div className=" grid lg:grid-cols-[40%_60%] rounded-xl">
          <div className="md-px-8  ">
            <Image
              src={AFB}
              height={9}
              width={500}
              alt="AboutMain"
              className="sm:px- md:my-2 md:pt-8 lg:pt-2 md:h-[400px] sm:h-[500px] sm:w-[100%] sm:mt-8 h-full w-full p-2 rounded-xl "
            />
          </div>

          <div className="flex flex-col gap-3 sm:pt-2 py-6 xl:py-10 text-left md:py-8 px-6  ">
            <h1 className="md:text-5xl text-4xl animate animate-pulse font-bold bg-gradient-to-r from-[#9b1b30] via-[#D4AF37] to-[#6B7A4F] text-transparent bg-clip-text">
              Anousha&rsquo;s Food Blogs
            </h1>

            <p className="font-normal md:text-lg lg:text-base md:my-4 xl:text-lg text-md text-gray-700">
            Welcome to Anousha Food Blog, where passion for food meets creativity! We explore flavors from around the globe, bringing you easy-to-follow recipes, culinary tips, and inspiration for every meal. From traditional dishes to modern cuisines, our blog celebrates the art of cooking and the joy of sharing delicious food. Discover vibrant recipes, cultural stories, and expert advice that transform your kitchen into a hub of creativity. Whether you are a seasoned cook or a beginner, Anousha Food Blog is your trusted companion on a flavorful journey. Lets cook, create, and celebrate food together.. Join us in celebrating the art of food, one delicious recipe at a time, and transform every meal into an unforgettable experience!



            </p>
          </div>
        </div>
      </section>
      <section className=""></section>
    </main>
  );
};

export default AboutMain;
