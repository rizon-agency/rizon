export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  url: string;
  sameAs: string[];
};

export const authors: Author[] = [
  {
    slug: "choaib-mouhrach",
    name: "Choaib Mouhrach",
    role: "Founder & learning-platform engineer",
    bio: "Choaib builds custom learning products for teams that have outgrown an off-the-shelf LMS. He cares about the awkward parts: identity, learner access, data, and the admin work that gets ignored in a shiny demo.",
    avatar: "/choaib-mouhrach-pic.png",
    url: "https://rizon.agency/about",
    sameAs: ["https://www.linkedin.com/in/choaib-mouhrach"],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}
