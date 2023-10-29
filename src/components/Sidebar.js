import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
    return (
        <>
            <div className='mt-4 container'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a className='d-flex align-items-center nav-link active'>
                            <div>
                                <FontAwesomeIcon icon="fas fa-home" />
                            </div>
                            <div className='mx-3'><h6 >Home</h6>
                            </div>
                        </a>
                    </li>
                    <li className='nav-item mt-2'>
                        <a className='d-flex align-items-center nav-link disabled'>
                            <div>
                                <FontAwesomeIcon icon="fas fa-bell" />
                            </div>
                            <div className='mx-3'><h6 >Notifications</h6>
                            </div>
                        </a>
                    </li>
                    <li className='nav-item mt-2'>
                        <a className='d-flex align-items-center nav-link disabled'>
                            <div>
                                <FontAwesomeIcon icon="fas fa-heart" />
                            </div>
                            <div className='mx-3'><h6 >Shop</h6>
                            </div>
                        </a>
                    </li>
                    <li className='nav-item mt-2'>
                        <a className='d-flex align-items-center nav-link disabled'>
                            <div>
                                <FontAwesomeIcon icon="fas fa-envelope" />
                            </div>
                            <div className='mx-3'><h6 >Conversation</h6>
                            </div>
                        </a>
                    </li> <li className='nav-item mt-2'>
                        <a className='d-flex align-items-center nav-link disabled'>
                            <div>
                                <FontAwesomeIcon icon="fas fa-wallet" />
                            </div>
                            <div className='mx-3'><h6 >Wallet</h6>
                            </div>
                        </a>
                    </li>
                    <li className='nav-item mt-2'>
                        <a className='d-flex align-items-center nav-link disabled'>
                            <div>
                                <FontAwesomeIcon icon="fas fa-sun" />
                            </div>
                            <div className='mx-3'><h6 >Subscription</h6>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item mt-2">
                        <a className='d-flex align-items-center nav-link disabled'>
                            <div>
                                <FontAwesomeIcon icon="fas fa-user" />

                            </div>
                            <div className='mx-3'><h6 >My Profile</h6>
                            </div>
                        </a>
                    </li>
                    <li className='nav-item mt-2'>
                        <a className='d-flex align-items-center nav-link disabled'>
                            <div>
                                <FontAwesomeIcon icon="fas fa-cog" />

                            </div>
                            <div className='mx-3'><h6 >Setting</h6>
                            </div>
                        </a>
                    </li>
                   
                </ul>

                    <div className='d-flex align-items-center ml-3 logout'>
                        <div>
                            <FontAwesomeIcon icon="fas fa-sign-out-alt" />

                        </div>
                        <div className='mx-3'><h6 >Log Out</h6>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Sidebar;
