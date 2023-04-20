import { Navigate, Outlet } from 'react-router-dom'
 
let auth=localStorage.getItem('teachertoken')

const PrivateRoutes = () => {
//   let auth = {token:true}
return (
    auth ? <Outlet/> : <Navigate to="/teacher/login"/>
  )
}

export default PrivateRoutes