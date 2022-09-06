// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loader({ children }) {
  // const [loading, setLoading] = useState(false);
  const [loading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);

  return (
    <div className="cstReactPageLoader">
      {loading ? <CircularProgress color="primary" /> : children}
    </div>
  );
}
