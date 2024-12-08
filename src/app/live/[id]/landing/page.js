"use client";

import LandingPage from "@/components/live/LandingPage";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <LandingPage id={id} />
    </div>
  );
};

export default page;
