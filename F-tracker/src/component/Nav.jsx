import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

export default function Nav() {
    const navigate = useNavigate()
    const { user, logout } = useAuth()
    return (
        <div className="app-nav">
            <img src="/logo.png" alt="" className="logo" />


            <span className="app-nav-links">
                <Link to="/"  className="app-nav-links-text">Home</Link>
                <a href="/useraccount" className="app-nav-links-text"> Tracker</a>

                <a href="/about" className="app-nav-links-text">About us</a>
                {
                    user ? <>
                        <button className="app-nav-links-text" on onClick={()=>{
                            logout()   
                              navigate("/LoginPage")
                        }}>
                            Logout
                        </button>
                    </> : <>
                        <Link to="/LoginPage" className="app-nav-links-text">Login</Link>
                        <a href="/RegisterPage" className="app-nav-links-text">Register</a>
                    </>
                }

            </span>
        </div>


    )

}