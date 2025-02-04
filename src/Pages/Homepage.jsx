import React from "react";
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import PeopleRing from "../Components/Home/PeopleRing";
import Services from "../Components/Home/Services";
import ChooseUs from "../Components/Home/ChooseUs";
import Contacts from "../Components/Home/Contacts";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <PeopleRing />
      <Services />
      <ChooseUs />
      <Contacts />
    </div>
  );
};

export default Homepage;
