import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from '../images/image.jpg';

function Blog() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            slidesToSlide: 3
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 1,
            slidesToSlide: 1
        }
    };
    const sliderValue = [

        {
            url:
                "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
            description: "The first slide",
            price: "$1999"
        },
        {
            url:
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
            description: "The second slide",
            price: "$1999"
        },

        {
            url:
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
            description: "the Third slide",
            price: "$1999"
        },

        {
            url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",

            description: "The Fourth slide",
            price: "$1999"
        },
    ];
    return (
        <>
            <div>
                <div>
                    <div className='p-4'>
                       
                        <div className='d-flex justify-content-between items-center'>
                            <div class="d-flex">
                                <div class="rc-post-thumb">
                                    <img class="img-fluid rounded" src={image}
                                        alt="img" />
                                </div>
                                <div className='mx-2'>
                                    <h5>Abstract</h5>
                                    <p className='para'>@ adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" className='menu' />
                            </div>
                        </div>
                        <p className='mt-3 text-break fs-6'>Lorem Ipsum is simply dummy text of the printing a text of the printing text of the printing
                            and..<span>Read More</span></p>
                        <div className='post-img mt-3'>
                            <img class="img-fluid rounded" src={image}
                                alt="img" />
                            <div className='like-icon '>
                                <FontAwesomeIcon icon="fa-solid fa-heart" className='icon' />
                            </div>
                        </div>
                    </div>
                    <div className='border-top'>
                        <div className='p-4 d-flex '>
                            <div className='d-flex align-items-center mx-2'>
                                <FontAwesomeIcon icon="fa-solid fa-heart" />
                                <p className='mx-1'>9.8k</p>

                            </div>
                            <div className='d-flex align-items-center mx-2'>
                                <FontAwesomeIcon icon="fa-solid fa-comment" />
                                <p className='mx-1'>9.8k</p>

                            </div>
                            <div className='d-flex align-items-center mx-2'>
                                <FontAwesomeIcon icon="fa-solid fa-share" />
                                <p className='mx-1'>9.8k</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='p-4'>
                        <div className='d-flex justify-content-between items-center'>
                            <div class="d-flex">
                                <div class="rc-post-thumb">
                                    <img class="img-fluid rounded" src={image}
                                        alt="img" />
                                </div>
                                <div className='mx-2'>
                                    <h5>Abstract</h5>
                                    <p className='para'>@ adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" className='menu' />
                            </div>
                        </div>
                        <p className='mt-3 text-break fs-6'>Lorem Ipsum is simply dummy text of the printing a text of the printing text of the printing
                            and..<span>Read More</span></p>
                        <div className='post-img mt-3'>
                            <img class="img-fluid rounded" src={image}
                                alt="img" />
                            <div className='like-icon '>
                                <FontAwesomeIcon icon="fa-solid fa-heart" className='icon' />
                            </div>
                        </div>
                    </div>
                    <div className='border-top'>
                        <div className='p-4 d-flex '>
                            <div className='d-flex align-items-center mx-2'>
                                <FontAwesomeIcon icon="fa-solid fa-heart" />
                                <p className='mx-1'>9.8k</p>

                            </div>
                            <div className='d-flex align-items-center mx-2'>
                                <FontAwesomeIcon icon="fa-solid fa-comment" />
                                <p className='mx-1'>9.8k</p>

                            </div>
                            <div className='d-flex align-items-center mx-2'>
                                <FontAwesomeIcon icon="fa-solid fa-share" />
                                <p className='mx-1'>9.8k</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="parent">
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        swipeable={true}
                        draggable={true}

                        infinite={true}
                        partialVisible={false}
                        dotListClass="custom-dot-list-style"
                    >
                        {sliderValue.map((items, index) => {
                            return (
                                <div className="slider" key={index}>
                                    <div>
                                        <img src={items.url} alt="blog" />
                                        <p className='para mt-3'>{items.description}</p>
                                        <div className='d-flex justify-content-between align-items-center mt-3'>
                                            <div className='price'>
                                                <p>{items.price}</p>
                                            </div>
                                            <div className='d-flex icon'>
                                                <FontAwesomeIcon icon="fas fa-star" />
                                                <FontAwesomeIcon icon="fas fa-star" />
                                                <FontAwesomeIcon icon="fas fa-star" />
                                                <FontAwesomeIcon icon="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Blog;