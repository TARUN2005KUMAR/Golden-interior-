import { client } from "@/sanity/lib/client";
import PortfolioClient from "./PortfolioClient";

// Fallback Placeholder data until the client uploads actual projects!
const placeholderProjects = [
  {
    _id: "1",
    title: "Carved Teak Door",
    category: "door",
    mainImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-[3/4]",
  },
  {
    _id: "2",
    title: "Luxury Dining Table",
    category: "furniture",
    mainImage: "https://images.unsplash.com/photo-1617806118233-18e1c0955d0d?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
  },
  {
    _id: "3",
    title: "Custom Wood Paneling",
    category: "wood",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-[4/3]",
  },
  {
    _id: "4",
    title: "UPVC Window Setup",
    category: "window",
    mainImage: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
  },
  {
    _id: "5",
    title: "Traditional Kadasal Woodwork",
    category: "wood",
    mainImage: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-[3/4]",
  },
  {
    _id: "6",
    title: "Membrane Bathroom Door",
    category: "door",
    mainImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-[4/3]",
  },
  {
    _id: "7",
    title: "Wooden Living Room Set",
    category: "furniture",
    mainImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "aspect-square",
  },
];

export const revalidate = 30; // Revalidate the page every 30 seconds (ISR)

export default async function PortfolioPage() {
  let projects = [];
  
  try {
    const query = `*[_type == "project"] | order(year desc) {
      _id,
      title,
      category,
      year,
      aspectRatio,
      mainImage {
        ...,
        asset-> {
          _id,
          url
        }
      }
    }`;

    // 5-second timeout — fallback to placeholders if Sanity is slow
    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Sanity fetch timed out")), 5000)
    );

    projects = await Promise.race([client.fetch(query), timeout]);
  } catch (error) {
    console.error("Sanity fetch error:", error);
  }

  // Display the live CMS projects if they exist, otherwise show the beautiful placeholders
  const displayProjects = projects?.length > 0 ? projects : placeholderProjects;

  return <PortfolioClient projects={displayProjects} />;
}
