import "../styles/home.css";

function Home(props) {
  return (
    <div className="homepage-container">
      <div className="welcome-text">
        <p class="home-title">
          <span>
            {props.isChecked
              ? "Welcome to Detailer, the most trusted and top-rated detailing company in Tbilisi. Our expert team delivers top-rated detailing services leaving your car spotless. With our commitment to quality, reliability, and customer satisfaction, we guarantee a hassle-free detailing experience that will exceed your expectations. Say goodbye to stress and hello to a fresh and clean car."
              : "კეთილი იყოს თქვენი მობრძანება Detailer-ში, ყველაზე სანდო და რეიტინგულ კომპანიაში თბილისში. ჩვენი ექსპერტთა გუნდი  გაძლევთ საშუალებას  აქციოთ თქვენი მანქანა უნაკლო. ხარისხისადმი ჩვენი ერთგულებით, საიმედოობა და მომხმარებლის კმაყოფილება, ჩვენ გარანტიას გაძლევთ უპრობლემოდ დეტალური გამოცდილება, რომელიც გადააჭარბებს თქვენს მოლოდინს. Თქვი ნახვამდის სტრესს და გამარჯობა ახალ და სუფთა მანქანას."}
          </span>
        </p>
      </div>

      <img
        className="blue-car"
        src={process.env.PUBLIC_URL + "/images/blue-car.jpg"}
        alt="car"
      ></img>
    </div>
  );
}

export default Home;
