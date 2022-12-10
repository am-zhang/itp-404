import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Artist from "./Artist";

test("loads and displays artist name", async () => {
  const artist = {
    id: 9,
    name: "Paul Cezanne",
    dates: "1839-1906",
    bio: "One of the most influential artists in the history of modern painting, Paul Cézanne has inspired generations of artists. Generally categorized as a Post-Impressionist, his unique method of building form with color and his analytical approach to nature influenced the art of Cubists, Fauves, and successive generations of avant-garde artists. Beginning to paint in 1860 in his birthplace of Aix-en-Provence and subsequently studying in Paris, Cézanne’s early pictures of romantic and classical themes are imbued with dark colors and executed with an expressive brushwork in the tradition of Eugène Delacroix (1798–1863).",
  };

  const { getByTestId } = render(<Artist artist={artist} />);
  expect(getByTestId("artist-name")).toHaveTextContent("Paul Cezanne");
});
