"use client";

import FinishedPage from "@/components/live/FinishedPage";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <FinishedPage id={id} />
    </div>
  );
};

export default page;
