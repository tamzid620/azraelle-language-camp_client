import { useEffect, useState } from "react";
import Aos from "aos";
import accordionimg from "../../../../../src/assets/icons/accordion-image.jpg";

const faqs = [
  {
    question: "What languages can I learn with Azraelle?",
    answer:
      "Azraelle offers courses in Spanish, French, German, Mandarin, and many more popular languages.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "Yes! Azraelle provides tailored content for beginners, intermediates, and advanced learners.",
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer:
      "Yes, all our courses come with a verified certificate upon successful completion.",
  },
  {
    question: "Can I access the courses on mobile devices?",
    answer:
      "Absolutely! Azraelle is accessible on both desktop and mobile devices for your convenience.",
  },
  {
    question: "What is the duration of each course?",
    answer:
      "The duration varies, but most courses range from 4 to 12 weeks, depending on your pace.",
  },
];

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ question, answer, isActive, onToggle }) => (
  <div className="border-b border-gray-300">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center py-4 focus:outline-none"
    >
      <span className="text-xl  font-bold">{question}</span>
      <span>{isActive ? "-" : "+"}</span>
    </button>
    {isActive && <p   style={{fontFamily: "PT Sans, serif"}} className="text-gray-600 text-lg mt-2">{answer}</p>}
  </div>
);

const Accordion = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      style={{ fontFamily: "Nunito Sans, serif" }}
      className="lg:mx-0 md:mx-4 sm: mx-6 mt-20"
    >
      <h1 className="flex justify-center font-extrabold text-3xl uppercase mb-10">
        Frequently Asked Questions
      </h1>
      <div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 mb-20 gap-10 ">
          {/* image section */}
          <div data-aos="fade-left">
            <img className="rounded-sm bg-black w-full h-[300px]" src={accordionimg} alt="" />
          </div>
          {/* accordion section  */}
          <div data-aos="fade-right">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isActive={activeIndex === index}
                onToggle={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
