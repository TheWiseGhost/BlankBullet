"use client";

import FormPage from "@/components/live/FormPage";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <FormPage id={id} />
    </div>
  );
};

export default page;
