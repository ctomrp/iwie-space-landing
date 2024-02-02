import photo1 from "/assets/1.jpg";
import photo2 from "/assets/2.jpg";
import photo3 from "/assets/3.jpg";
import photo4 from "/assets/4b.jpg";
import s from "./style.module.css";

export function Carousel() {
  return (
    <div className="d-flex flex-column justify-content-center text-center mt-5">
      <h3 className={`${s.message} fs-1 fw-bold`}>
        Pronto conocerás un nuevo espacio
      </h3>
      <div
        id="carouselExampleIndicators"
        className="carousel slide mt-5 container"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={photo1}
              className="d-block w-100"
              loading="lazy"
              alt="personas recibiendo premios"
            />
          </div>
          <div className="carousel-item">
            <img
              src={photo2}
              className="d-block w-100"
              loading="lazy"
              alt="personas posan con certificados en la mano"
            />
          </div>
          <div className="carousel-item">
            <img
              src={photo3}
              className="d-block w-100"
              loading="lazy"
              alt="personas siendo capacitadas"
            />
          </div>
          <div className="carousel-item">
            <img
              src={photo4}
              className="d-block w-100"
              loading="lazy"
              alt="la tierra desde el espacio"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
