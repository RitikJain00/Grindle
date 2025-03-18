import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from "next/navigation";
import React from 'react'
import DashboardView from './_components/dashboard_view';
import { getIndustyInsights } from '@/actions/dashboard';

const dashboard = async () => {

  const { isOnboarded } = await getUserOnboardingStatus()
  const insights = await getIndustyInsights()

  if(!isOnboarded) redirect('/onboarding')
  return (
    <div className='container mx-auto'>
      
      <DashboardView insights={insights}></DashboardView>
    </div>
  )
}

export default dashboard