import React from "react";

interface CoverLetterProps {
  params: { id: string }; 
}

const CoverLetter: React.FC<CoverLetterProps> = async ({ params }) => {
  const  id  = await params.id; 

  return <div>CoverLetter ID: {id}</div>; 
};

export default CoverLetter;
