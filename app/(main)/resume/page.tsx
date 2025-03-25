import { getResume } from "@/actions/resume";
import ResumeBuilder from "./_components/resume_builder";


const resume = async () => {
  const resume = await getResume();
  
  return (
    <div className="container mx-auto py-6">
        <ResumeBuilder initialContent={resume?.content} />
    </div>
  )
}

export default resume