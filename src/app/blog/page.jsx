import { getAllPosts } from '@/lib/blog';
import BlogList from './BlogList';


export async function generateMetadata() {
  const pageTitle = "Blog - Global Visa Internationals";
  const pageDescription = "Explore insightful articles and updates on visas, immigration services, and more at Global Visa Internationals.";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: "https://www.globalvisainternationals.com/blog",
      images: [
        {
          url: "https://www.globalvisainternationals.com/images",
          alt: "Blog on Global Visa Internationals",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["https://www.globalvisainternationals.com/images"],
    },
  };
}

export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogList posts={posts} />;
}
