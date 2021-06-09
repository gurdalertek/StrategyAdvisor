import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="cstReactPageLoader">
      {loading ? <CircularProgress color="primary" /> : children}
    </div>
  );
}
