import { Metadata } from "next";
import BlogPageClient from "../../components/pages/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | Découvrez nos articles et actualités",
  description: "Articles, tutoriels et conseils sur le développement web, le design et les tendances du numérique.",
};

export default function BlogPage() {
  return <BlogPageClient />;
} 