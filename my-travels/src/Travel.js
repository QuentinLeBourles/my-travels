import React from "react";

const Travel = ({ Destination , Distance, image, Country }) => (
  <figure>
    <img src={image} alt={Destination} />
    <figcaption>
      <blockquote>{Country}</blockquote>
      <cite>{Destination}</cite>
      <cite> {Distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;