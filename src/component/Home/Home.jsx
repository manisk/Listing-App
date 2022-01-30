import React, { useEffect, useState } from "react";
import CarCard from "../CarCard/CarCard";
import CarModal from "../CarModal/CarModal";
import getCarList from "../../api/carList";

function Home() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [carList, setCarList] = useState([]);

  async function getCarData() {
    try {
      const responseData = await getCarList();
      console.log(responseData);
      setCarList(responseData);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getCarData();
  }, []);

  return (
    <div className="container py-3">
      <div className="row g-3">
        {carList.map((car) => (
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
