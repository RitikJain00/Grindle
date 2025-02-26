import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import { Card,CardContent } from "@/components/ui/card"

const testimonial = [
  {
    quote:
      "Grindle's AI Resume Builder helped me craft an ATS-friendly resume. Within weeks, I landed interview calls from top companies!",
    author: "Aarav Mehta",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    course: "BTech",
    college: "IIT Kanpur",
    service: "Resume Creation",
    rating: 5,
  },
  {
    quote:
      "The AI Mock Interview was an eye-opener! It helped me refine my answers and gain confidence before real interviews.",
    author: "Neha Sharma",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    course: "MTech",
    college: "NIT Allahabad",
    service: "Mock Interview",
    rating: 4,
  },
  {
    quote:
      "I struggled with DSA, but Grindle's structured question sets improved my problem-solving skills significantly!",
    author: "Rohan Verma",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    course: "BCA",
    college: "IIIT Hyderabad",
    service: "DSA Practice",
    rating: 4,
  },
  {
    quote:
      "I used Grindle’s MCQ practice for React.js and was amazed at how well it prepared me for technical rounds.",
    author: "Priyanka Singh",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
    course: "MCA",
    college: "Delhi University",
    service: "MCQ Practice",
    rating: 5,
  },
  {
    quote:
      "The job portal on Grindle is a one-stop solution. I applied to multiple openings and finally got a job at my dream company!",
    author: "Vivek Kumar",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    course: "BTech",
    college: "IIT Madras",
    service: "Job Application",
    rating: 4,
  },
  {
    quote:
      "Grindle’s AI Cover Letter Generator saved me hours of effort. It customized my cover letter for every job application.",
    author: "Meera Iyer",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    course: "MTech",
    college: "BITS Pilani",
    service: "Cover Letter Generator",
    rating: 5,
  },
  {
    quote:
      "I wasn’t confident in my coding skills, but Grindle’s AI-based feedback on my solutions helped me improve step by step.",
    author: "Harshit Malhotra",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    course: "BCA",
    college: "Amity University",
    service: "AI Code Review",
    rating: 4,
  },
  {
    quote:
      "Grindle’s job recommendations were so accurate! The platform suggested openings that perfectly matched my skill set.",
    author: "Sanya Kapoor",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    course: "MCA",
    college: "SRM University",
    service: "Job Recommendations",
    rating: 4,
  },
  {
    quote:
      "I used Grindle for coding MCQs, and it was a game-changer! The AI explained every answer, helping me understand deeply.",
    author: "Rajesh Nair",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    course: "BTech",
    college: "NIT Trichy",
    service: "MCQ Explanation",
    rating: 5,
  },
  {
    quote:
      "Thanks to Grindle’s resume analysis, I optimized my resume with the right keywords and secured more interview calls.",
    author: "Anjali Saxena",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    course: "MTech",
    college: "VIT Vellore",
    service: "Resume Analysis",
    rating: 4,
  },
];


const Testimonial = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <Carousel opts={{ align: "start", loop: true}}  plugins={[ Autoplay({ delay: 3000, }),]}>
           <CarouselContent>
            {testimonial.map((testimonial, index) => (
              <CarouselItem key={index}  className="md:basis-1/2 lg:basis-1/3">
              <Card  className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-primary/20"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.course}, {testimonial.college}
                        </p>
                        
                      </div>
                      <div >
                       <Image  width={testimonial.rating === 5 ? 80 : 60} 
                        height={testimonial.rating === 5 ? 80 : 60} 
                        src={testimonial.rating === 4 ? '/4stars.png' : '/5stars.png'} 
                        alt={`${testimonial.rating} stars`} ></Image>
                    </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                
                  </div>
                </CardContent>
              </Card>
              </CarouselItem>
            ))}
         </CarouselContent>
         <CarouselPrevious />
       <CarouselNext />
      </Carousel>
        </div>
      </section>
  )
}

export default Testimonial