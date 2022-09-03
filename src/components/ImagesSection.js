const ImagesSection = () => {
    const images = [
        {
            image: "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
            title: "design"
        },
        {
            image: "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
            title: "Development"
        },
        {
            image: "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
            title: "marketing"
        },
        {
            image: "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
            title: "IT and Software"
        },
        {
            image: "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
            title: "Personal Development"
        },
        {
            image: "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg",
            title: "Business"
        },
        {
            image: "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
            title: "Photography"
        },
        {
            image: "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg",
            title: "Music"
        },
        {
            image: "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
            title: "Graphic Design"
        }
    ]
    return (
        <section className="sec2 mt-3">
            <div className="row">
                {images.map((image, index) => {
                    return (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center flex-column mt-2" key={image.title}>
                            <img src={image.image} className="w-100" alt={image.title} />
                            <p className="h6 fw-bold text-capitalize">{image.title}</p>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}

export default ImagesSection;
