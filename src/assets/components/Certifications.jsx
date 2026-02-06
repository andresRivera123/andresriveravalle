import "../styles/certifications.css";
import { CERTIFICATIONS } from "../utils/certificationsDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; //
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Certifications() {
  return (
    <>
      <div className="certifications__list">
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={true}
          pagination={{ clickable: true }}
          spaceBetween={60}
          slidesPerView={2}
          breakpoints={{
            0: { slidesPerView: 1 },
            520: { slidesPerView: 2 },
          }}
          
          className="certifications__swiper"
        >
          {CERTIFICATIONS.map((certificate, index) => (
            <SwiperSlide key={index} className="certifications__card">
              <div
                className="certifications__image-container"
                style={{ "--bg-image": `url(${certificate.image})` }}
              />
              <div className="certifications__data">
                <span className="certifications__inst">
                  {certificate.institution}
                </span>
                <h3 className="certifications__name">{certificate.title}</h3>
                <p className="certifications__description text">
                  {certificate.Description}
                </p>
                <span className="certifications__date">
                  {certificate.dateIssued}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
