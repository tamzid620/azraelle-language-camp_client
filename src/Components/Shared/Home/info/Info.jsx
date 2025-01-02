import infoimg1 from "../../../../../src/assets/icons/spoken.png";
import infoimg2 from "../../../../../src/assets/icons/language.png";
import infoimg3 from "../../../../../src/assets/icons/potential.png";
import infoimg4 from "../../../../../src/assets/icons/Connect.png";
import "./info.css";

const infoData = [
  {
    icon: infoimg1,
    title: "Speak Confidently with Azraelle",
    disc: "Unlock your potential with our expert-led courses, designed for learners of all levels. Start speaking confidently today!",
  },
  {
    icon: infoimg2,
    title: "Fun, Fast Language Learning",
    disc: "Join Azraelle and explore interactive lessons, real-world practice, and a vibrant community to support your journey.",
  },
  {
    icon: infoimg3,
    title: "Unlock Your Linguistic Potential",
    disc: "At Azraelle, we make language learning simple and effective. Embrace new cultures and expand your horizons.",
  },
  {
    icon: infoimg4,
    title: "Learn. Speak & Stay Connected",
    disc: "From beginner to fluent, Azraelle offers tailored courses to help you achieve your language goals. Start your journey now!",
  },
];

const Info = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-10 md:gap-8 lg:mx-0 md:mx-4 sm: mx-6 mt-24">
      {infoData.map(({ icon, title, disc }, index) => (
        <div
          key={index}
          className="relative bg-[#004C7F] w-full h-[215px] shadow-gray-500 shadow-lg hover:shadow-2xl md:mb-5 sm: mb-12"
        >
          <div className="relative px-3 pt-10 pb-3 rounded-sm ">
            <h1
              style={{ fontFamily: "Nunito Sans, serif" }}
              className="text-lg text-white uppercase font-extrabold mb-2"
            >
              {title}
            </h1>
            <p
              style={{ fontFamily: "PT Sans, serif" }}
              className="text-gray-100"
            >
              {disc}
            </p>
          </div>
          <div className="absolute -top-8 left-4 shadow-gray-200 shadow-md">
            <img
              className="bg-[#004C7F] p-2 rounded-sm w-[60px]"
              src={icon}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
