import React from "react";
import { useParams } from "react-router-dom";
import JobApplicationForm from "./CareersForm"; // Assuming this is your CareersForm component
import positions from "../data/careers.json";

function CareersFormPage() {
  const { positionTitle } = useParams(); // Extract positionTitle from URL
  const position = positions.find(
    (position) => position.title === positionTitle
  ); // Find position by title
  const positionName = position ? position.title : "Unknown Position";
  const requirements = position ? position.requirements : "";
  const description = position ? position.description : "";

  return (
    <JobApplicationForm
      positionName={positionName}
      requirements={requirements}
      description={description}
    />
  );
}

export default CareersFormPage;
