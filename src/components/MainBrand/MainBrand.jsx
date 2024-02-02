import brand from "../../assets/logo.svg";
import s from "./style.module.css";

export function MainBrand() {
  return (
    <div className={`${s.container} mt-5`}>
      <div
        className={`${s.brandContainer} d-flex flex-column justify-content-center`}
      >
        <img src={brand} className={`${s.brand} mt-5`} loading="lazy" alt="iwie space" />
        <h1 className={`${s.message} text-center mt-5 fs-1 fw-bold`}>
          Creatividad Colaborativa
        </h1>
      </div>
    </div>
  );
}
