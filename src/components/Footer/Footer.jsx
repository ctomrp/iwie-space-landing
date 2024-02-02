import tiktok from "/assets/tiktok.svg";
import s from "./style.module.css";

export function Footer() {
  return (
    <footer>
      <div className="container d-flex justify-content-between mt-5 p-5">
        <div className="copyright">Iwie Space &copy; 2024</div>
        <a href="https://www.tiktok.com/@iwie.space" target="_blank">
          <img src={tiktok} alt="icono de tiktok" loading="lazy" />
        </a>
      </div>
    </footer>
  );
}
