import React from "react";
import { NavLink } from "reactstrap";
// import { NavLink } from "react-router-dom";
const Footer2 = () => {
    return (
        <div>
            <div class="d-flex flex-row pt-5 pb-5 ms-5 mt-5 mb-5 ">
                <div class='me-5' >
                    <h4 >Company</h4>
                    <ul class='d-flex flex-column gap-3'>
                        <li>
                            <NavLink> About us</NavLink>
                        </li>
                        <li>
                            <NavLink>Help Center</NavLink>
                        </li>
                        <li>
                            <NavLink>Privacy Policy</NavLink>
                        </li>
                        <li>
                            <NavLink> Term & conditions</NavLink>
                        </li>
                    </ul>

                </div>
                <div class='ms-5 '>
                    <h4> Neighbours </h4>
                    <ul class='d-flex flex-column gap-3'>
                        <li>
                            <NavLink> Neighborhoods</NavLink>
                        </li>
                        <li>
                            <NavLink>Public Agencies</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-center p-4 border' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022.jiran360:
                <a href='https://catoon.com'>
                    All Rights reserved
                </a>
            </div>
        </div>
    )
}
export default Footer2;