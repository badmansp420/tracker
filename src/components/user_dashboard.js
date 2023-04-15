import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react"
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import axios from "axios";
export default function UserDashboard({ email, password }) {
    const [home, setHome] = useState(true);
    const [booking, setBooking] = useState(false)
    const [loginData, setLoginData] = useState();
    const [userData, setUserData] = useState();
    useEffect(() => {
        const getLoginData = async () => {
            console.log(email, password);
            axios.post('http://127.0.0.1:5000/login', {username: email, password: password}).then((data) => {
                console.log(data); 
                setLoginData(data.data);
            });

            
        }
        getLoginData();

        if (loginData) {
            const getUserData = async () => {
                const config = {
                    headers: { Authorization: `Bearer ${loginData.token}` }
                }
                const response = await axios.get('http://127.0.0.1:5000/user/me', {}, config)
                const parsedData = JSON.parse(response);
                setUserData(parsedData);

            }
            getUserData();
        }
    }, []);
    const bookinghandler = () => {
        setHome(false);
        setBooking(true);

    };
    const homehandler = () => {
        setHome(true);
        setBooking(false);
    };

    return (
        <div className="main" style={{ fontFamily: 'sans-serif' }}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#"></a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="btn mx-2" type="button" onClick={homehandler}>Home</button>
                            </li>
                            <li className="nav-item" id="button">
                                <button className="btn " type="submit" onClick={bookinghandler}>Booking</button>
                            </li>
                        </ul>

                    </div>
                    <div className="dropdown mx-5" style={{ color: 'gray' }}>
                        <button className="btn dropdown-toggle" id="profile" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {userData === undefined ? <div></div> : userData.email}
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">LogOut</a></li>
                            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                        </ul>
                    </div>
                </div>
            </nav>

            {/*  End NavBar Hear */}

            {/*  Main Body Starts For Home */}
            {home && (
                <div className="card my-4 mx-auto w-75">
                    <div className="card-header">
                        Last Booking Details
                    </div>
                    <div className="card-body">
                        {/* <h5 className="card-title">Special title treatment</h5> */}
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="col-2"><b>Booking Date:</b></td>
                                    <td className="col-3">{new Date().toLocaleString()}</td>
                                    <td className="col-2"><b>Booking Id: </b></td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table my-4">

                            <thead>

                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Product Id</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Price In(R.s.)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter<FontAwesomeIcon icon={faPlusSquare} /></td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            )}

            {/* For Booking Component */}
            {
                booking && (
                    <div className="card my-4 mx-auto w-75">
                        <div className="card-header">
                            All Booking Details
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                {/* <button className="btn me-md-2 bg-primary" type="button" style={{fontSize:'20px',cursor:'pointer'}}><abbr title="New Booking"><b>+</b></abbr></button> */}
                                <abbr title="New Booking">
                                    <button className="btn btn-success" onmouseover="console.log('Check Buuton')"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        {/* <FaRegPlusSquare/> */}
                                        <FontAwesomeIcon icon={faPlusSquare} />
                                    </button>
                                </abbr>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table my-4">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Booking Id</th>
                                        <th scope="col">Weight</th>
                                        <th scope="col">Price In(R.s.)</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                )
            }



            {/* for Modal New Booking */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content bg-dark-subtle">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Register Hear</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <form className="row g-3">
                                <div className="col-6">
                                    <label for="name" className="form-label">Full Name<span>*</span></label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                </div>
                                <div className="col-auto">
                                    <label for="exampleInputEmail1" className="form-label">Contact No.<span>*</span></label>
                                    <input type="number" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                </div>
                                <div className="col-auto">
                                    <label for="exampleInputEmail1" className="form-label">Emergancy Contact
                                        No.<span>*</span></label>
                                    <input type="number" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                </div>
                                <div className="col-auto">
                                    <label for="exampleInputEmail1" className="form-label">Date Of Birth<span>*</span></label>
                                    <input type="date" className="form-control" style={{ outline: 'none', border: 'none' }} />
                                </div>
                                <div className="col-1">
                                    <label for="exampleInputEmail1" className="form-label">Age<span>*</span></label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        disabled />
                                </div>
                                <div className="col-auto">
                                    <label for="exampleInputEmail1" className="form-label">Gender<span>*</span></label>
                                    <select className="form-select">
                                        <option selected>Select Gender</option>
                                        <option value="m">Male</option>
                                        <option value="f">Female</option>
                                        <option value="o">Others</option>
                                    </select>
                                </div>
                                <div className="col-2">
                                    <label for="exampleInputEmail1" className="form-label">Blood Group<span>*</span></label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                </div>
                                <div className="col-5">
                                    <label for="exampleInputEmail1" className="form-label">Email address<span> (Not
                                        Required)</span></label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Full Address<span>*</span></label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                </div>
                                <div className="d-grid gap-3 col-2 mx-auto d-md-block">
                                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                                    {/* <!-- <button type="reset" className="btn btn-outline-danger justify-content-center">Reset</button> --> */}

                                </div>
                                <div className="modal-footer">
                                    <button type="reset" className="btn btn-outline-danger">Reset</button>
                                </div>
                            </form>
                        </div>
                        {/* <!-- <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}