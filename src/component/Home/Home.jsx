import React, { useState } from "react";
import CarCard from "../CarCard/CarCard";
import CarModal from "../CarModal/CarModal";
const data = [
  {
    title: "Mahindra XUV700",
    description:
      "The Mahindra XUV700 was launched in India on 14 August, 2021. The carmaker has announced prices for entry-level variants of second-generation of the SUV. The model will be offered in four variants including MX, AX3, AX5, and AX7.",
    price: "23.80 Lakh",
    src: "https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/100429/xuv700-right-front-three-quarter-3.jpeg?isig=0&q=75",
    id: 1,
  },
  {
    title: "Tata Tigor EV",
    description:
      "Find a list of all 4 electric versions of Tata Tigor EV. This table includes on-road price which covers all costs like RTO and Insurance.",
    price: "13.14 Lakh",
    src: "https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/45849/tigor-ev-facelift-exterior-right-front-three-quarter-5.jpeg?isig=0&q=75",
    id: 2,
  },
  {
    title: "Hyundai Venue",
    description:
      "Hyundai entered the highly competitive sub-4 metre segment with its Venue SUV in mid-2019. The vehicle is available in 19 variants across four trims, seven colours and three engine options. The compact SUV competes against the likes of Ford EcoSport, Nissan Magnite, Renault Kiger, Kia Sonet, Mahindra XUV300,",
    price: "11.88 Lakh",
    src: "https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/35455/venue-exterior-right-front-three-quarter-2.jpeg?q=75",
    id: 3,
  },
  {
    title: "Maruti Suzuki Swift",
    description:
      "Maruti Suzuki has launched the Swift facelift after the new generation was launched in India way back in the year 2018. The facelift gets a brand new engine and a handful of exterior and interior changes to give it a fresh look. It also gets costlier by Rs 15,000 to Rs 20,000 over the previous model with an inclusion of a",
    price: "8.76 Lakh",
    src: "https://imgd-ct.aeplcdn.com/642x361/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75",
    id: 4,
  },
  {
    title: "Hyundai Venue",
    description:
      "Hyundai entered the highly competitive sub-4 metre segment with its Venue SUV in mid-2019. The vehicle is available in 19 variants across four trims, seven colours and three engine options. The compact SUV competes against the likes of Ford EcoSport, Nissan Magnite, Renault Kiger, Kia Sonet, Mahindra XUV300,",
    price: "11.88 Lakh",
    src: "https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/35455/venue-exterior-right-front-three-quarter-2.jpeg?q=75",
    id: 13,
  },
  {
    title: "Maruti Suzuki Swift",
    description:
      "Maruti Suzuki has launched the Swift facelift after the new generation was launched in India way back in the year 2018. The facelift gets a brand new engine and a handful of exterior and interior changes to give it a fresh look. It also gets costlier by Rs 15,000 to Rs 20,000 over the previous model with an inclusion of a",
    price: "8.76 Lakh",
    src: "https://imgd-ct.aeplcdn.com/642x361/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75",
    id: 14,
  },
];
function Home() {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="container py-3">
      <div className="row g-3">
        {data.map((car) => (
          <div key={car.id} className="col-lg-3 col-md-6">
            <CarCard
              img={car.src}
              title={car.title}
              description={car.description}
              price={car.price}
              setSelectedCar={setSelectedCar}
            />
          </div>
        ))}
      </div>
      {/* <Modal/>  hide/show */}
      {selectedCar !== null ? (
        <CarModal
          setSelectedCar={setSelectedCar}
          title={selectedCar.title}
          desc={selectedCar.description}
        />
      ) : null}
    </div>
  );
}

export default Home;
