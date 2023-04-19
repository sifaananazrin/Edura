import React from 'react'
import { BounceLoader } from "react-spinners";
function Spinner(props) {
    const { loading } = props;
  return (
    <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
            {loading && <BounceLoader color={" #9a0eea"} loading={loading} size={150} />}
          
        </div>
  )
}

export default Spinner
