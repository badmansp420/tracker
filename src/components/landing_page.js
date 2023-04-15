import axios from "axios";
import { useEffect, useState } from "react";
import '../css/landing_page.css'

export default function LandingPage({ email, password }) {
    const [loginData, setLoginData] = useState();
    const [prevComp, setPrevComp] = useState(<div></div>)
    useEffect(() => {
        const getLoginData = () => {
            axios.post('http://127.0.0.1:5000/login', { username: email, password: password }).then((data) => {
                console.log(data);
                setLoginData(data)
                setPrevComp(<div>{data.toString()}</div>)
            })
        }
        getLoginData();
    }, []);
    return (<div>
        <div className="m-auto px-2 py-3 landing-page-app-bar">
            <div className="row">
                <div className="col-1">
                    Goods Tracker
                </div>
                <div className="col-1">
                    <a href="#" className="landing-page-link">Bookings</a>
                </div>
                <div className="col"></div>
                <div className="col-auto">
                    <div className="row">
                        <div className="col">
                            <button className="landing-page-special-btn"><div className="p-3">Get started</div></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="my-auto align-items-center text-center py-2">
            <div className="landing-page-banner-heading">
                Goods Tracker
            </div>
            <div className="landing-page-banner-subitle py-2">
                Move with the power of blockchain
            </div>
            <div className="col-4 mx-auto my-5">
                <button className="landing-page-special-btn landing-page-banner-special-btn shadow">
                    <div className="p-4">Issue your first order</div>
                </button>
            </div>
        </div>
    </div>)


}