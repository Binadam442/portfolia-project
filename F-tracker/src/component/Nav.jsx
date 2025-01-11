export default function Nav() {
    return (
        <div className="app-nav">
            <img src="/logo.png" alt="" className="logo" />


            <span  className="app-nav-links">
                <a href="/" className="app-nav-links-text">Home</a>
                <a href="/useraccount" className="app-nav-links-text"> Tracker</a>
                
                <a href="/about" className="app-nav-links-text">About us</a>
            </span>
        </div>


    )

}