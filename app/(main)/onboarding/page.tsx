import React from 'react'
import { redirect } from "next/navigation";
import { industries } from '@/data/Industries'
import OnBoardingForm from './_components/onboarding-form'
import { getUserOnboardingStatus } from '@/actions/user'


const OnboardingPage = async () => {

  const { isOnboarded } = await getUserOnboardingStatus()

  if(isOnboarded){
    redirect("/dashboard")
  }
  return (
    <main>
      <OnBoardingForm industries = {industries}></OnBoardingForm>
    </main>
  )
}

export default OnboardingPage