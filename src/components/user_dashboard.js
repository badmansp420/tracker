import React, { useState } from "react"

function testb() {
    console.log("test");
    // setBooking(!booking)
}
export default function UserDashboard() {
    const [home, setHome] = useState(true);
    const [booking, setBooking] = useState(false)
    const bookinghandler = () => {
        setHome(false);
        setBooking(true);

    };
    const homehandler = () => {
        setHome(true);
        setBooking(false);
    };

    return (
        <div className="main" style={{fontFamily:'sans-serif'}}>
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
                            UserName
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
                                    <td>@twitter</td>
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
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button" style={{fontSize:'20px'}}><b>+</b></button>
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
        </div>
    )
}