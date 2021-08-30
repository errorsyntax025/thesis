import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentParh, setCurrentPath] = useState("/");

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentParh === path ? children : null;
};

export default Route;
