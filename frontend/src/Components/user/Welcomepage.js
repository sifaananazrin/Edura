import React, { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;
let firstRender=true

function WelcomePage() {
  const [user, setUser] = useState(null);


  //refresh token
  const refreshToken =async () => {
    const res = await axios.get("http://localhost:5000/api/refresh",{
      withCredentials:true
    }).catch(err=>console.log(err))

    const data = await res.data;
    return data
  }
  const sendRequest = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/user', {
        withCredentials: true,
      });
      console.log("hello")
      console.log(res)
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  useEffect(() => {

    if(firstRender){
      firstRender=false
    }
    sendRequest().then((data) => {
      if (data && data.user) {
        console.log(data)
        setUser(data.user);
      }
      let interval = setInterval(()=>{
        refreshToken().then(data=>setUser(data))
      },1000*28)

      return ()=>clearInterval(interval)//after 28 seconds theinterval will exprires
    });
  }, []);

  return (
    <div>
      {user && <h1>{user.name}</h1>}
      {!user && <p>Loading user...</p>}
    </div>
  );
}

export default WelcomePage;
