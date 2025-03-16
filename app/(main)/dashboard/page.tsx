import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from "next/navigation";
import React from 'react'

const dashboard = async () => {

  const { isOnboarded } = await getUserOnboardingStatus()

  if(!isOnboarded) redirect('/onboarding')
  return (
    <div>dashboard</div>
  )
}

export default dashboard