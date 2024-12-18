"use client";
import React from 'react';
import { TypewriterEffect } from "../ui/TypewriterEffect";

const words = [
    {
      text: "Food",
      className: "text-ivory" ,
    },
    {
      text: "that",
      className: "text-ivory" ,

    },
    {
      text: "Excites,",
      className: "text-gold ",

    },
    {
      text: "Recipes",
      className: "text-ivory" ,

    },
    {
        text: "that",
        className: "text-ivory" ,

      },
    {
      text: "Inspire",
      className: "text-gold  ",
    }] 
const Hero = () => {
  return (
    <div>
      <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.freepik.com/premium-photo/table-full-food-including-plate-food-bottle-ketchup_917576-515.jpg?w=900)",
  }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-extrabold  text-white">Anousha&rsquo;s Food Blog</h1>
      <TypewriterEffect words={words}  />
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero
