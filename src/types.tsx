export type Article = {
  author: string;
  title: string;
};

export type Articles = {
  status: string;
  totalResults: number;
  articles: Article[];
};
