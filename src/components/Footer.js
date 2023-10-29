import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
    return (
        <>
            <div className='d-flex justify-content-between px-3'>
                <div className="col-lg-3 d-flex justify-content-between mx-2">
                    <p className='d-flex align-items-center'>2023
                        <a> <FontAwesomeIcon icon="fas fa-copyright" /></a> Logo</p>
                    <p>Developed by @aniket</p>
                </div>
                <div className='col-lg-5'></div>
                <div className='col-lg-3 d-flex justify-content-between mx-3'>
                    <p>Privacy</p>
                    <p>Terms of service</p>
                </div>
            </div>
        </>
    )
}

export default Footer;