import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutlet, useOutletContext } from "react-router-dom";

function HomePage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums } = data;
  return (
    <>
      <Hero />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />

      {/* Songs Section  */}
    </>
  );
}

export default HomePage;
