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
          drop_id: id,
          clerk_id: user.id,
          domain: domain,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        const storedDrop = JSON.parse(localStorage.getItem("drop"));
        if (storedDrop) {
          storedDrop.drop.domain = domain;
          localStorage.setItem("drop", JSON.stringify(storedDrop));
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
            <a
              target="_blank"
              href={`http://localhost:3000/live/${id}/landing/`}
              className="text-xl underline text-gray-600 hover:text-black transition duration-200 "
            >
              Preview
            </a>
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
                <p className="text-gray-700">2 remaining drops</p>
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
                drop and its repercussions.
              </label>
            </div>
            <div className="flex justify-center">
              <button className="w-1/3 mt-4 bg-black font-semibold border-black border-2 text-white hover:bg-white hover:text-black py-3 rounded-2xl transition duration-300">
                Publish
              </button>
            </div>
          </form>
          {status && <p className="text-center text-red-500 mt-4">{status}</p>}
        </div>
        <div className="w-full pl-20 flex flex-col space-y-4">
          <div className="flex flex-col rounded-xl w-full p-4">
            <h1 className="font-dm text-2xl text-center">Instructions</h1>
            <div className="h-0.5 w-3/5 mx-auto bg-gray-200 rounded-xl mt-3" />

            <div className="flex flex-col space-y-8 pt-4">
              <div className="space-y-2">
                <h2 className="font-semibold">Step 1: Upload Your Domain</h2>
                <ul className="list-disc pl-6 text-sm">
                  <li>Input your domain on the left</li>
                  <li>
                    Once submitted, we’ll configure everything for you on our
                    end!
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="font-semibold">
                  Step 2: Update Your DNS Records
                </h2>
                <ul className="list-disc pl-6 text-sm">
                  <li>
                    Log in to your domain registrar (e.g., GoDaddy, Namecheap,
                    etc.) and go to the DNS management section.
                  </li>
                  <li>
                    Add the following DNS record:
                    <ul className="list-inside list-disc pl-4">
                      <li>
                        <span className="bg-gray-200 font-dm font-semibold rounded-md px-2 py-1">
                          A
                        </span>{" "}
                        record for root domains (e.g.,{" "}
                        <code>userdomain.com</code>):
                      </li>
                      <li>
                        <code>userdomain.com</code> -&gt;{" "}
                        <code className="bg-gray-200 font-dm font-semibold rounded-md px-2 py-1">
                          76.76.21.21
                        </code>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="text-sm">
                  <strong>Note:</strong> DNS changes may take up to 24 hours to
                  propagate globally.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-semibold">Step 3: Verify Your Domain</h2>
                <p className="text-sm">
                  After updating your DNS settings, visit your domain (e.g.,{" "}
                  <code>userdomain.com</code>) to check if everything is
                  working.
                </p>
                <p className="text-sm">
                  If the domain is correctly configured, you’ll be able to
                  access your content hosted on{" "}
                  <code className="bg-gray-200 font-dm font-semibold rounded-md px-2 py-1">
                    {" "}
                    dropfast.com/live/{"Preview_id"}/
                  </code>{" "}
                  under{" "}
                  <code className="bg-gray-200 font-dm font-semibold rounded-md px-2 py-1">
                    userdomain.com/live/{"Preview_id"}/
                  </code>
                  .
                </p>
              </div>

              <p className="text-sm text-gray-500">
                If you encounter any issues during the setup process, feel free
                to reach out to our support team for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Publish = ({ id }) => {
  const [drop, setDrop] = useState(null);

  useEffect(() => {
    setDrop(JSON.parse(localStorage.getItem("drop")));
  }, []);

  return (
    <BuilderLayout
      title={drop ? drop.drop?.title : ""}
      subtitle={"Drop Builder"}
      page={"publish"}
      id={id}
    >
      <PublishComponent id={id} prevDomain={drop ? drop.drop?.domain : ""} />
    </BuilderLayout>
  );
};

export default Publish;
