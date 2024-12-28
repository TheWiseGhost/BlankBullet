"use client";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const Dropdown = ({ page }) => {
  const [drops, setDrops] = useState([]);
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const fetchDrops = async () => {
        try {
          const response = await fetch(
            "http://127.0.0.1:8000/api/drop_options/",
            {
              method: "POST",
              body: JSON.stringify({ clerk_id: user.id }),
            }
          );

          if (response.ok) {
            const data = await response.json();
            setDrops(data.drops);
          } else {
            console.error("Failed to fetch drops");
          }
        } catch (error) {
          console.error("Error fetching drops:", error);
        }
      };

      fetchDrops();
    }
  }, [user]);

  return (
    <div className="p-8 pb-56 flex items-center justify-center bg-white">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-4 py-4 rounded-md text-gray-50 bg-neutral-800 hover:bg-black transition-colors"
        >
          <span className="font-medium text-sm">Choose a Drop</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-2xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          {drops ? (
            <>
              {drops.map((drop) => (
                <Option
                  key={drop.id}
                  text={drop.title}
                  page={page}
                  id={drop.id}
                />
              ))}
            </>
          ) : (
            <></>
          )}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, page, id }) => {
  const { user } = useUser();
  let route = "";
  if (page === "builder") {
    route = `/builder/${id}/landing/`;
  } else {
    route = `/${page}/${id}`;
  }

  const handleClick = async () => {
    try {
      const main_response = await fetch(
        "http://127.0.0.1:8000/api/drop_details/",
        {
          method: "POST",
          body: JSON.stringify({ drop_id: id }),
        }
      );
      if (main_response.ok) {
        const data = await main_response.json();
        localStorage.setItem("drop", JSON.stringify(data));
        if (page === "builder") {
          localStorage.setItem("formData", JSON.stringify(data.form.form_data));
          localStorage.setItem("checkout", JSON.stringify(data.checkout));
        } else if (page === "analytics") {
          const response = await fetch(
            "http://127.0.0.1:8000/api/get_analytics/",
            {
              method: "POST",
              body: JSON.stringify({ drop_id: id, clerk_id: user.id }),
            }
          );

          if (response.ok) {
            const data = await response.json();
            localStorage.setItem("analytics", JSON.stringify(data));
          } else {
            console.error("Failed to fetch analytics");
          }
        }
      } else {
        console.error("Failed to fetch drops");
      }
    } catch (error) {
      console.error("Error fetching drops:", error);
    } finally {
      window.location.href = route;
    }
  };

  return (
    <motion.li
      variants={itemVariants}
      onClick={handleClick}
      className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium whitespace-nowrap rounded-md hover:bg-zinc-100 text-slate-700 hover:text-black transition-colors cursor-pointer"
    >
      <span>{text}</span>
    </motion.li>
  );
};

export default Dropdown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.01,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
