import Blog from "./Blog";
import Seller from "./Seller";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    let user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [user])
    return (
        <div className="dashboard-container mx-2">
            <Header />
            <div className="content d-flex  justify-content-between mt-4 mx-4">
                <div className="sidebar col-md-3 shadow-lg rounded bg-white">
                    <Sidebar />
                </div>
                <div className="main-content col-md-5 shadow rounded bg-white mx-4">
                    <div className="blog">
                        <Blog />
                    </div>
                </div>
                <div className="seller col-md-3 shadow rounded bg-white">
                    <Seller />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
