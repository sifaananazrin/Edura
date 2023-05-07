import React from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
function FullScreen() {


  const location = useLocation();
  const trailerUrl = location.state?.trailerUrl || '';
   console.log(trailerUrl)
 
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}>
      <ReactPlayer url={trailerUrl} playing controls width="100%" height="100%" />
    </div>
  )
}

export default FullScreen
