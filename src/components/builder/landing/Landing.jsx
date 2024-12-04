import React, { useRef, useState, useEffect } from "react";
import BuilderLayout from "../BuilderLayout";

const LiveEditor = () => {
  const [dividerPosition, setDividerPosition] = useState(50); // Percentage width of the preview section
  const [isDragging, setIsDragging] = useState(false);

  const [bullet, setBullet] = useState(null);

  // Fix this NextJS server-client error with local storage
  useEffect(() => {
    const savedBullet = JSON.parse(localStorage.getItem("bullet"));
    setBullet(savedBullet || { landing: { code: "" } });
    console.log(savedBullet.checkout);
  }, []);

  const [htmlCode, setHtmlCode] = useState("");

  // Synchronize bullet.landing.code with htmlCode
  useEffect(() => {
    if (bullet) {
      setHtmlCode(bullet.landing?.code || "");
    }
  }, [bullet]);

  // Update bullet and save to localStorage whenever htmlCode changes
  useEffect(() => {
    if (bullet) {
      const updatedBullet = {
        ...bullet,
        landing: { ...bullet.landing, code: htmlCode },
      };
      setBullet(updatedBullet);
      localStorage.setItem("bullet", JSON.stringify(updatedBullet));
    }
  }, [htmlCode]);

  const previewRef = useRef();
  const shadowRootRef = useRef(null); // Store reference to the shadow root

  useEffect(() => {
    if (!previewRef.current) return;

    // Attach shadow DOM if not already attached
    if (!shadowRootRef.current) {
      shadowRootRef.current = previewRef.current.attachShadow({ mode: "open" });
    }

    // Update shadow root content
    shadowRootRef.current.innerHTML = `
      <div>
        ${htmlCode}
      </div>
    `;
  }, [htmlCode]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newDividerPosition = (e.clientX / window.innerWidth) * 100; // Calculate percentage
      if (newDividerPosition > 10 && newDividerPosition < 90) {
        setDividerPosition(newDividerPosition);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="flex w-full min-h-[95vh] font-sans"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Preview Section */}
      <div
        ref={previewRef}
        className="bg-white border border-gray-300 overflow-auto"
        style={{ width: `${dividerPosition}%` }}
      ></div>

      {/* Divider */}
      <div
        className="w-[5px] bg-gray-300 cursor-col-resize"
        onMouseDown={handleMouseDown}
      ></div>

      {/* Editor Section */}
      <div className="flex-1 flex-col space-y-2">
        <h1 className="font-dm text-sm text-center">
          Probably code your website elsewhere and just drop it in here when
          your ready!
        </h1>
        <div className="flex h-full p-2">
          <textarea
            className="w-full h-full text-base p-2 font-mono border border-gray-200 outline-none resize-none"
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

const Landing = ({ id }) => {
  const [bullet, setBullet] = useState(null);

  useEffect(() => {
    setBullet(JSON.parse(localStorage.getItem("bullet")));
  }, []);

  return (
    <BuilderLayout
      title={bullet ? bullet.bullet?.title : ""}
      subtitle={"Bullet Builder"}
      page={"landing"}
      id={id}
    >
      <LiveEditor />
    </BuilderLayout>
  );
};

export default Landing;
