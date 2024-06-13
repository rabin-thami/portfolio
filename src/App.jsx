import { useState, useEffect } from "react";
import DesktopComponents from "./Device/Desktop";
//getting the screen size of current window
const getScreenCategory = (width) => {
  if (width >= 1024) {
    return "desktop";
  } else if (width >= 768) {
    return "tablet";
  } else {
    return "mobile";
  }
};

export default function App() {
  const [screenCategory, setScreenCategory] = useState(
    getScreenCategory(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      const currentCategory = getScreenCategory(window.innerWidth);
      // Only update state if the screen category changes
      if (currentCategory !== screenCategory) {
        setScreenCategory(currentCategory);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenCategory]);

  return (
    <div className="font-SpaceGrotesk">
      {screenCategory === "desktop" && <DesktopComponents />}

      {screenCategory === "tablet" && (
        <div>
          {/* Tablet-specific content */}
          <h2 className=" text-center text-lg">Tablet Content</h2>
        </div>
      )}
      {screenCategory === "mobile" && (
        <div>
          {/* Tablet-specific content */}
          <h2 className=" text-center text-lg">Mobile Content</h2>
        </div>
      )}
    </div>
  );
}