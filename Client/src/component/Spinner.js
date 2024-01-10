import React from 'react';
import { BounceLoader } from 'react-spinners';

function Spinner(props) {
  const { loading } = props;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {loading && <BounceLoader color={' #9a0eea'} loading={loading} size={50} />}
    </div>
  );
}

export default Spinner;
