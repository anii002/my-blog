import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <>
            <div className="d-flex flex-wrap justify-content-between px-4 logo">
                <div className="col-lg-3  shadow-lg  rounded " >
                     <h4 className='mt-3 ml-2'>LOGO</h4>
                </div>

                <div className="mid-blog d-flex justify-content-between items-center col-lg-5  shadow-lg rounded px-4 p-3">
                    <div className='has-search'>
                        <FontAwesomeIcon icon="fas fa-search " className='form-control-feedback' />
                        <input type="text" class="form-control" placeholder="Search here..." />
                    </div>

                    <div className='d-flex filter-section align-items-center'>
                        <FontAwesomeIcon icon="fa-solid fa-filter" />
                        <p className="filter mx-1">Filters</p>
                    </div>
                </div>

                <div className="col-lg-3  shadow-lg bg-primary text-center rounded">
                    <p className='mt-4 text-white text-bold'>Become a seller</p>
                </div>
            </div>
        </>
    )
}


export default Header;