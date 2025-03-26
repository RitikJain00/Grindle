import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from "next/navigation";
import React from 'react'
import DashboardView from './_components/dashboard_view';
import { getIndustyInsights } from '@/actions/dashboard';

const dashboard = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  let insights = await getIndustyInsights();

  if (!isOnboarded) redirect("/onboarding");

  // Transform data to match expected types
  const transformedInsights = {
    ...insights,
    lastUpdated: insights.lastUpdated.toISOString(), // Convert Date to string
    nextUpdate: insights.nextUpdate.toISOString(),   // Convert Date to string
    salaryRange: insights.salaryRange.map((item: any) => ({
      role: item.role,
      min: Number(item.min),     // Ensure numeric values
      max: Number(item.max),
      median: Number(item.median),
      location: item.location,
    })),
    demandLevel: insights.demandLevel || "Unknown", // Handle possible null
    marketOutlook: insights.marketOutlook || "Neutral", // Handle possible null
  };

  

  return (
    <div className="container mx-auto">
      <DashboardView insights={transformedInsights} />
    </div>
  );
};

export default dashboard;