"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    if (!imageElement) return; // Ensure imageElement exists

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled"); // Ensure it toggles back
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  return (
    <div className="w-full pt-36 pb-10 md:pt-40">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl gradient-title">
            Your AI-Powered Guide for
            <br />
            Tech Placements!
          </h1>
          <p className="mx-auto max-w-[620px] text-muted-foreground md:text-xl">
            Your all-in-one AI-powered platform for tech placement success.
            Build, practice, and apply with confidence!
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button>Getting Started</Button>
          </Link>

          <Link href="/about">
            <Button variant={"outline"}>Learn More</Button>
          </Link>
        </div>
      </div>

      <div className="mt-8 hero-image-wrapper">
        <div className="hero-image" ref={imageRef}>
          <Image
            src="/Hero.webp"
            alt="Banner"
            width={1280}
            height={720}
            className="rounded-lg shadow-2xl border mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
