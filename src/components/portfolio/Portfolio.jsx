import React from "react";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 0,
      title: "Nykaa-Clone || Fashion Website",
      img: "https://camo.githubusercontent.com/b695206e18c8ef86de0342b33d258bd408173302a76d94bd577e66cbef911283/68747470733a2f2f692e696d6775722e636f6d2f61316d647438722e706e67",
      des: [
        {
          li: "Sign Up | Login | Home Page",
        },
        {
          li: "Cart Page",
        },
        {
          li: "Mens Page",
        },
        {
          li: "Payment Page",
        },
      ],
      team: "A collaborative project built by a team of 4, executed in 6 days",
      teckStack: "HTML || CSS || JavaScript",
      link: "https://famous-conkies-aaaea0.netlify.app/",
      github: "https://github.com/arupx3492/Nykaa-Clone",
    },
    {
      id: 1,
      title: "Shopbop-Clone || Shopping Website",
      img: "https://i.postimg.cc/Z52KdhC1/Screenshot-11.png",
      des: [
        {
          li: "Sign Up | Login | Mens Page - with Filter & SortFunctionality",
        },
        {
          li: "Add To Cart Functionality",
        },

        {
          li: " Payment Page along with all functionality",
        },
      ],
      team: "A solo project, executed in 4 days",
      teckStack: "HTML || CSS || JavaScript || Local Storage",
      link: "https://papaya-pothos-367bd6.netlify.app/",
      github: "https://github.com/A-Hore/shopbop2final",
    },
    {
      id: 2,
      title: "FirstPost || News Website",
      des: [
        {
          li: "Various Categories of News.",
        },
        {
          li: "Hamburger Icon Feature",
        },
        {
          li: "All Pages",
        },
        {
          li: "Solo News Feature",
        },
        {
          li: "Subscribe Functionality",
        },
      ],
      img: "https://i.postimg.cc/QdpdyVCq/Screenshot-10.png",
      team: "A solo project, executed in 4 days",
      teckStack: "HTML | CSS | JavaScript | React | Redux",
      link: "https://genuine-meringue-957d20.netlify.app/",
      github: "https://github.com/A-Hore/wrong-mother-4289/tree/main/firstpost",
    },
    {
      id: 3,
      title: "Wantflix || Streaming Website",
      des: [
        {
          li: "Various Categories of Movies.",
        },
        {
          li: "Search Movies Functionality",
        },
        {
          li: "Single Movie Page with All Information",
        },
        {
          li: "Watch Movies",
        },
        {
          li: "Signup/Login Functionality",
        },
      ],
      img: "https://i.postimg.cc/SxtnVQ4D/Screenshot-9.png",
      team: "A collaborative project built by a team of 4, executed in 6 days",
      teckStack:
        "HTML | CSS | JavaScript | React | Redux | MongoDb | Express | Chakra Ui",
      link: "https://wantflix-shows.netlify.app/",
      github: "https://github.com/A-Hore/likely-laborer-9813",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <h3 className="portfolio__title">{pro.title}</h3>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <br />
            <ul className="des">
              {pro.des.map((elem) => (
                <li style={{ listStyleType: "square" }}>{elem.li}</li>
              ))}
            </ul>
            <br />
            <p>{pro.team}</p>
            <p>{pro.teckStack}</p>
            <div className="portfolio__item-cta">
              <a href={pro.github} target="_blank" className="btn">
                GitHub
              </a>
              <a href={pro.link} target="_blank" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
