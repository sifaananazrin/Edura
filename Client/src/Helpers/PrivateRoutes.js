import { Navigate, Outlet } from 'react-router-dom'
 
let auth=localStorage.getItem('admintoken')

const PrivateRoutes = () => {
//   let auth = {token:true}
return (
    auth ? <Outlet/> : <Navigate to="/admin/login"/>
  )
}

export default PrivateRoutes