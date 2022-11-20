import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "The lobby of our resort hosts its own bar with new refreshing daily cocktails to your likings.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Enjoy our catalog of local hiking spots depending on difficulty levels to your enjoyment.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Get a special card for public transit when purchasing one of our rooms for you to enjoy free public transit while stay here.",
      },
      {
        icon: <FaBeer />,
        title: "beer minibars",
        info:
          "Every room is outfitted with a decked out minibar with endless beer available at your request that is refilled on a daily basis.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
