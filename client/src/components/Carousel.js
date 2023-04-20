import Carousel from 'react-bootstrap/Carousel';

function HomePageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://recipe30.com/wp-content/uploads/2017/06/French-fries.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://www.cookinwithmima.com/wp-content/uploads/2021/04/crispy-airfrayer-french-fries-recipe.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://www.allrecipes.com/thmb/JZsbJ8XNPxkbDk_hwHz-KI7nSKk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219634-chef-johns-french-fries-DDMFS-4x3-338dec7976fc4d75bb3e2c18ff6a6e95.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePageCarousel;