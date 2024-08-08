import "./style.css";
import Navbar from "../../components/Navbar";
import ReviewCard from "../../components/ReviewCard";
import OptionCard from "../../components/OptionCard";

const Landing = () => {
  const reviewData = [
    [
      "“Pawtastic is awesome! They are passionate about pets and employ trustworthy, dependable staff. We love them!”",
      "Lindsay M.",
      "./asset/img/lindsay.png",
    ],
    [
      "“I’m a repeat customer because of their amazing care for our two cats when we travel. I can relax because I know they’re there!”",
      "Andrew C.",
      "./asset/img/floof.png",
    ],
    [
      "“I use them for mid day walks and our babies are so happy with the exercise and love during the day. We see the difference!”",
      "Meg F.",
      "./asset/img/ginger.png",
    ],
    [
      "“I just returned from two weeks away to a sociable, calm cat and no drama. Thanks for a great job, Pawtastic!”",
      "Jackie B.",
      "./asset/img/ned.png",
    ],
  ];
  const optionData = [
    [
      "We’ll take your pup for a 30 minute walk and make sure he or she has fresh food and water.",
      "Dog Walk",
      "$15",
      "PER 30 MIN WALK",
      "./asset/img/Flower icon.png",
    ],
    [
      "We’ll stop by to snuggle, feed, and play with your pets in the comfort of their own home.",
      "Drop-in visit",
      "$15",
      "PER 30 MIN VISIT",
      "./asset/img/Wave icon.png",
    ],
    [
      "We’ll stay overnight with your pets to make sure they have round-the-clock love.",
      "House sitting",
      "$45",
      "PER 30 MIN VISIT",
      "./asset/img/Home icon.png",
    ],
  ];

  return (
    <div className="Landing">
      <Navbar />
      <section className="hero py-5">
        <div className="container d-flex align-items-center flex-row-reverse p-relative">
          <div className="hero-text col-xl-5 col-lg-12">
            <h1>We care for your furry little loved ones while you’re away</h1>
            <button className="custom-btn theme-btn-1">Schedule A Visit</button>
          </div>
          <span className="p-absolute">Ozzie in Brooklyn</span>
        </div>
      </section>
      <section className="info py-5">
        <div className="container row py-5">
          <div className="info-text col-lg-6 col-md-12 pe-5">
            <h2>Expert care for your furry, feathery, or scaley friend</h2>
            <p className="pt-3">
              We know how stressful it is to leave your pets at home alone.
              We’re a team of experienced animal caregivers, well connected to
              local veterinarians. Trust to us to love them like our own, and to
              keep them safe and happy till you’re home.
            </p>
            <button className="custom-btn theme-btn-2 my-5">
              Schedule A Visit
            </button>
          </div>
          <div className="info-img col-lg-6 col-md-12 col-sm-12 row">
            <img
              className="col-md-6 col-sm-12 mb-3"
              src="./asset/img/nuffin.png"
              alt="none"
            />
            <img
              className="col-md-6 col-sm-12 mb-3"
              src="./asset/img/peep.png"
              alt="none"
            />
            <img
              className="col-md-6 col-sm-12 mb-3"
              src="./asset/img/natasha.png"
              alt="none"
            />
            <img
              className="col-md-6 col-sm-12 mb-3"
              src="./asset/img/marlon.png"
              alt="none"
            />
          </div>
        </div>
      </section>
      <section className="service py-5" id="service">
        <div className="container row py-5 flex-row-reverse p-relative">
          <div className="service-info col-lg-6 col-md-12 ps-5">
            <h2>Services tailored to your needs</h2>
            <p className="py-5">
              Schedule one-off or recurring home visits. An experienced member
              of our team will spend time with your pet, feed them, change cat
              litter trays, take the dog for a walk, and anything else you need.
            </p>
            <button className="custom-btn theme-btn-2">Schedule A Visit</button>
          </div>
          <span className="p-absolute">Ollie and Maggie</span>
        </div>
      </section>
      <section className="review py-5" id="review">
        <div className="container py-5">
          <div className="d-flex justify-content-center">
            <h2>Pets (and their humans) love us</h2>
          </div>
          <div className="row py-5">
            {reviewData.map((index, key) => {
              return <ReviewCard key={key} reviewData={index} />;
            })}
          </div>
          <div className="d-flex justify-content-center">
            <button className="custom-btn theme-btn-3">Read all reviews</button>
          </div>
        </div>
      </section>
      <section className="options py-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center pb-5 mb-5">
            <h2 className="col-lg-6 mb-5 text-center">
              Affordable options, tailored to your needs
            </h2>
            <p className="col-lg-8 text-center">
              All services include live updates including photos and chat, as
              well as notifications of sitter arrival and departure times.
            </p>
          </div>
          <div className="row justify-content-center mt-5 pt-3">
            {optionData.map((index, key) => {
              return <OptionCard key={key} optionData={index} />;
            })}
          </div>
          <div className="d-flex justify-content-center my-5">
            <button className="custom-btn theme-btn-2">
              Schedule a service
            </button>
          </div>
        </div>
      </section>
      <footer id="about">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h2>Contact</h2>
          <h2>481-624-3240</h2>
          <h2>Email us</h2>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
