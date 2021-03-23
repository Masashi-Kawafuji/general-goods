export type Article = {
  id: string;
  html: string;
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
  };
};
