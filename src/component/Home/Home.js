import React, { useEffect, useState } from "react";
import CarCard from "../CarCard/CarCard";
import CarModal from "../CarModal/CarModal";
import getCarList from "../../api/carList";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import "./Home.scss";

function Home() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [carList, setCarList] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [searchText, setSearchText] = useState("");

  async function getCarData() {
    try {
      setShowLoader(true);
      const responseData = await getCarList();
      console.log(responseData);
      setCarList(responseData);
    } catch (error) {
      console.log("error", error);
    } finally {
      setShowLoader(false);
    }
  }

  useEffect(() => {
    getCarData();
  }, []);

  const filteredCars = carList.filter((car) =>
    car.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <div className="container py-3 mb-5">
        <h1 className="my-4 page-title">Find your dream car here...</h1>
        {showLoader ? (
          <div className="loader">
            <img src="https://i.stack.imgur.com/ATB3o.gif" alt="loader.." />
          </div>
        ) : (
          <div className="row g-3">
            {filteredCars.length === 0 ? (
              <div className="alert alert-warning">
                No Cars found for search
              </div>
            ) : null}
            {filteredCars.map((car) => (
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
        )}

        {selectedCar !== null ? (
          <CarModal
            setSelectedCar={setSelectedCar}
            title={selectedCar.title}
            desc={selectedCar.description}
            img={selectedCar.img}
          />
        ) : null}
      </div>
      <Footer />
    </>
  );
}

export default Home;
