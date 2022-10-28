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
      img: "https://boutique.humbleandrich.com/wp-content/uploads/2019/03/Shopbop-3.jpg",
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
      teckStack: "HTML || CSS || JavaScript ",
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
      img: "https://images.firstpost.com/fpimages/100x100/fixed/jpg/scalex16x9/2022/08/796159_202208261618_940x355.jpeg?impolicy=website&width=751&height=422",
      team: "A solo project, executed in 4 days",
      teckStack: "HTML | CSS | JavaScript | React | Redux",
      link: "https://genuine-meringue-957d20.netlify.app/",
      github: "https://github.com/A-Hore/wrong-mother-4289/tree/main/firstpost",
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
