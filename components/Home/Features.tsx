import React from 'react'
import { Card,CardContent } from "@/components/ui/card"

import { 
  BrainCircuit, 
  Briefcase, 
  LineChart, 
  ScrollText, 
  Mic, 
  UserCheck, 
  ClipboardCheck, 
  Users, 
  FileText 
} from "lucide-react";

const features = [
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "Interview Preparation",
    description:
      "Practice with role-specific questions and get instant feedback to improve your performance.",
  },
  {
    icon: <ScrollText className="w-10 h-10 mb-4 text-primary" />,
    title: "Smart Resume Creation",
    description: "Generate ATS-optimized resumes with AI assistance.",
  },
  {
    icon: <Mic className="w-10 h-10 mb-4 text-primary" />,
    title: "Mock Interviews",
    description:
      "Simulate real interviews with AI-driven feedback and performance analysis.",
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 mb-4 text-primary" />,
    title: "Skill Assessment",
    description:
      "Evaluate your technical and soft skills through AI-powered assessments and quizzes.",
  },
  {
    icon: <Users className="w-10 h-10 mb-4 text-primary" />,
    title: "Peer Networking & Mentorship",
    description:
      "Connect with peers, mentors, and industry experts to expand your professional network.",
  },
 
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "AI-Powered Career Guidance",
    description:
      "Get personalized career advice and insights powered by advanced AI technology.",
  },
 
  {
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Industry Insights",
    description:
      "Stay ahead with real-time industry trends, salary data, and market analysis.",
  },
 
  
  {
    icon: <UserCheck className="w-10 h-10 mb-4 text-primary" />,
    title: "Apply for Jobs",
    description:
      "Find and apply for the latest job opportunities matching your skills and experience.",
  },
  
 
];

const Features = () => {
  return (
    <section className="w-full py-12 md:pt-22 lg:pt-32 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl tracking-tighter font-bold text-center mb-12">The Ultimate Career Toolkit for Success</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">{features.map((feature,index) => {
        return (
        <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
          <CardContent className="pt-6 text-center flex flex-col items-center">
            <div className="flex flex-col items-center justify-center">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </CardContent>
        </Card>
        )
      })}</div>
    </div>
  </section>
  )
}

export default Features