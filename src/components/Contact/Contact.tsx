import "../Contact/Contact.css";
const Contact = () => {
  return (
    <div className="contact__container">
      <img className="contact__img" src="./assets/about-us.png" alt="" />
      <p className="contact__text">
        You're talking about Inception? Wubba lubba dub dub! This isn't Game of
        Thrones, Morty. Awwww thankss your preferences better that way. Plus, if
        you get in kind of a cool enough relationship, you can sort of follow
        each bies for 25 schmeckles!
      </p>
      <a className="contact__mail" href="/">
        rickyandmortytravieso@gmail.com
      </a>
    </div>
  );
};

export default Contact;
