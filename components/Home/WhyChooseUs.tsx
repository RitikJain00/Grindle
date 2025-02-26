import React from 'react'
import { FileText, Clock, Users, Award, StarIcon, Rocket } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div>
                <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
           <h2 className="text-3xl font-bold text-center mb-2">Why Choose Us?</h2>
           <p className="text-muted-foreground">Our platform helps you succeed with AI-driven insights.</p>
         </div>
      </div>

      <section className="w-full py-10 md:py-20 bg-muted/50">
      
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto text-center">
   
    <div className="flex flex-col items-center justify-center space-y-2">
        <Users className="w-10 h-10 text-primary" />
        <h3 className="text-4xl font-bold">50K+</h3>
        <p className="text-muted-foreground">Professionals</p>
      </div>
       
      <div className="flex flex-col items-center justify-center space-y-2">
        <FileText className="w-10 h-10 text-primary" />
        <h3 className="text-4xl font-bold">2k+</h3>
        <p className="text-muted-foreground">Interview Questions</p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <Award className="w-10 h-10 text-primary" />
        <h3 className="text-4xl font-bold">10k+</h3>
        <p className="text-muted-foreground">Job Offers Secured</p>
      </div>

   
      <div className="flex flex-col items-center justify-center space-y-2">
        <Rocket className="w-10 h-10 text-primary" />
        <h3 className="text-4xl font-bold">80%</h3>
        <p className="text-muted-foreground">Faster Job Search with AI</p>
      </div>


      <div className="flex flex-col items-center justify-center space-y-2">
        <Clock className="w-10 h-10 text-primary" />
        <h3 className="text-4xl font-bold">24/7</h3>
        <p className="text-muted-foreground">AI Support</p>
      </div>

      

    </div>
  </div>

</section>
    </div>
  )
}

export default WhyChooseUs