import React from 'react'
import { UserPlus, FileEdit, Users, Briefcase } from "lucide-react";

const howItWorks = [
  {
    title: "Professional Onboarding",
    description: "Share your industry and expertise for personalized guidance",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Craft Your Documents",
    description: "Create ATS-optimized resumes and compelling cover letters",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
  {
    title: "Prepare for Interviews",
    description:
      "Practice with AI-powered mock interviews tailored to your role",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Apply for Jobs",
    description: "Find and apply to relevant job opportunities effortlessly",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
  },
];


const HowItWorks = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground">
          Four simple steps to accelerate your career growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {howItWorks.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="font-semibold text-xl">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default HowItWorks