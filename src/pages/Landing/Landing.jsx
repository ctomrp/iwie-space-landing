import { Navbar } from "../../components/Navbar/Navbar";
import { MainBrand } from "../../components/MainBrand/MainBrand";
import { Carousel } from "../../components/Carousel/Carousel";
import { Footer } from "../../components/Footer/Footer";
import s from "./style.module.css";

export function Landing() {
  return (
    <div className={`${s.body}`}>
      <Navbar />
      <MainBrand />
      <Carousel />
      <Footer />
    </div>
  );
}
