import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutlet, useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../api/api";

function HomePage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums, songs } = data;
  return (
    <>
      <Hero />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
      <Section
        title="Songs"
        filterSource={fetchFilters}
        data={songs}
        type="song"
      />
    </>
  );
}

export default HomePage;
