import { Navigate, Outlet } from 'react-router-dom'
 
let auth=localStorage.getItem('usertoken')

const PrivateRoutes = () => {
//   let auth = {token:true}
return (
    auth ? <Outlet/> : <Navigate to="/user/login"/>
  )
}

export default PrivateRoutes