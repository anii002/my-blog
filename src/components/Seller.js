import image from '../images/image.jpg';

function Seller() {
    return (
        <>
            <div >
                <div className="d-flex  mt-2 nav">
                    <h6 className="mx-2 nav-link active">Artist</h6>
                    <h6 className=" nav-link disabled">Photographers</h6>
                </div>
                <div className="mb-2 blog-box mt-4">
                    <div className="blog-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid"
                            src={image} alt="" />
                        <a className="blog-overlay text-decoration-none d-flex" href>
                            <div className='d-flex'>

                                <div>
                                    <img class="img-fluid rounded" src={image} alt="img" />
                                </div>
                                <div className='mx-3'>
                                    <h6>Aniket</h6>
                                    <p className="m-0">@i_am aniket</p>
                                </div>

                            </div>

                        </a>
                    </div>
                </div>

                <div className="mb-2 blog-box mt-4">
                    <div className="blog-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid"
                            src={image} alt="" />
                        <a className="blog-overlay text-decoration-none d-flex" href>
                            <div className='d-flex'>

                                <div>
                                    <img class="img-fluid rounded" src={image} alt="img" />
                                </div>
                                <div className='mx-3'>
                                    <h6>Aniket</h6>
                                    <p className="m-0">@i_am aniket</p>
                                </div>

                            </div>

                        </a>
                    </div>
                </div>

                <div className="mb-2 blog-box mt-4">
                    <div className="blog-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid"
                            src={image} alt="" />
                        <a className="blog-overlay text-decoration-none d-flex" href>
                            <div className='d-flex'>

                                <div>
                                    <img class="img-fluid rounded" src={image} alt="img" />
                                </div>
                                <div className='mx-3'>
                                    <h6>Aniket</h6>
                                    <p className="m-0">@i_am aniket</p>
                                </div>

                            </div>

                        </a>
                    </div>
                </div>
                <div className="mb-2 blog-box mt-4">
                    <div className="blog-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid"
                            src={image} alt="" />
                        <a className="blog-overlay text-decoration-none d-flex" href>
                            <div className='d-flex'>

                                <div>
                                    <img class="img-fluid rounded" src={image} alt="img" />
                                </div>
                                <div className='mx-3'>
                                    <h6>Aniket</h6>
                                    <p className="m-0">@i_am aniket</p>
                                </div>

                            </div>

                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Seller;