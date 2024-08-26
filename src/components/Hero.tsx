import home_background from "../assets/covid-background.jpeg";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] relative flex justify-center">
      <img
        src={home_background}
        alt="background image"
        className="w-full h-full object-center object-cover"
      />
      <div className="w-11/12 md:w-1/2 mx-auto absolute bottom-0 p-5 bg-white text-blue-950 text-6xl font-light md:left-10">
        <h1 className="mb-3">Coronavirus disease</h1>
        <h1>(COVID-19)</h1>
      </div>
    </div>
  );
};

export default Hero;
