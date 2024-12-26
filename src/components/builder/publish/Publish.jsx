import React, { useState, useEffect } from "react";
import BuilderLayout from "../BuilderLayout";
import { useUser } from "@clerk/nextjs";
import { ToastAction } from "../../global/Toast";
import { useToast } from "../../global/Use-Toast";

const PublishComponent = ({ id, prevDomain }) => {
  const [domain, setDomain] = useState(prevDomain);
  const [permissionsGranted, setPermissionsGranted] = useState(false);
  const [status, setStatus] = useState("");
  const { user } = useUser();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!permissionsGranted) {
      alert("Please grant the required permissions.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/add_domain/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bullet_id: id,
          clerk_id: user.id,
          domain: domain,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        const storedBullet = JSON.parse(localStorage.getItem("bullet"));
        if (storedBullet) {
          storedBullet.bullet.domain = domain;
          localStorage.setItem("bullet", JSON.stringify(storedBullet));
        }
        // Update status and show toast notification
        setStatus("");
        toast({
          title: `Domain Added`,
          description: "Follow the rest of the instructions",
          action: (
            <ToastAction onClick={() => {}} altText="Close Toast">
              Close
            </ToastAction>
          ),
        });
      } else {
        setStatus(data.error || "Failed to map domain. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-fit">
      <div className="flex flex-row w-full">
        <div className="bg-white flex flex-col rounded-lg pl-6 w-full max-w-lg">
          <div className="flex flex-row text-xl items-center font-dm">
            <h2 className="text-black">Publish</h2>
            <div className="size-4 rounded-full mx-4 bg-gray-400" />
            <h2 className="text-gray-400">Custom Domain</h2>
          </div>
          <div className="h-0.5 w-full bg-gray-200 mt-4 mb-6 mx-auto" />
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xl text-gray-900 font-medium">
                Domain
              </label>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder={prevDomain}
                className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="py-2">
              <label className="block text-lg text-gray-700 font-medium">
                Consider Upgrading Your Plan
              </label>
              <div className="w-full font-dm flex flex-row items-center border border-gray-300 rounded-lg p-2 mt-1">
                <div className="w-4 h-4 mx-3 bg-gray-700 rounded-full" />
                <p className="text-gray-700">2 remaining bullets</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <input
                type="checkbox"
                id="permissionsGranted"
                checked={permissionsGranted}
                onChange={(e) => setPermissionsGranted(e.target.checked)}
                className="w-8 h-8 border-gray-300 rounded focus:ring-0"
              />
              <label htmlFor="permissionsGranted" className="text-gray-700">
                By checking the box, you are responsible for the content of your
                bullet and its repercussions.
              </label>
            </div>
            <div className="flex justify-center">
              <button className="w-1/3 mt-4 bg-black border-black border-2 text-white hover:bg-white hover:text-black py-3 rounded-2xl transition duration-300 font-semibold">
                Publish
              </button>
            </div>
          </form>
          {status && <p className="text-center text-red-500 mt-4">{status}</p>}
        </div>
        <div className="w-full pl-20 flex flex-col space-y-4">
          <div className="justify-center flex flex-row font-medium items-center text-gray-800">
            <a
              target="_blank"
              href={`http://localhost:3000/live/${id}/landing/`}
              className="text-xl underline hover:text-blue-400 transition duration-200 "
            >
              Preview
            </a>
          </div>
          <div className="h-[500px] w-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

const Publish = ({ id }) => {
  const [bullet, setBullet] = useState(null);

  useEffect(() => {
    setBullet(JSON.parse(localStorage.getItem("bullet")));
  }, []);

  return (
    <BuilderLayout
      title={bullet ? bullet.bullet?.title : ""}
      subtitle={"Bullet Builder"}
      page={"publish"}
      id={id}
    >
      <PublishComponent
        id={id}
        prevDomain={bullet ? bullet.bullet?.domain : ""}
      />
    </BuilderLayout>
  );
};

export default Publish;
