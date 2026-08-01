import type { Metadata } from "next";
import SuccessStoriesClientView from "./SuccessStoriesClientView";

export const metadata: Metadata = {
  title: "Success Stories | Mercury Academy",
  description:
    "Discover inspiring stories of our alumni who transformed their careers and achieved their professional goals with our programs.",
  openGraph: {
    title: "Success Stories | Mercury Academy",
    description:
      "Discover inspiring stories of our alumni who transformed their careers and achieved their professional goals with our programs.",
  },
};

export default function SuccessStoriesPage() {
  return <SuccessStoriesClientView />;
}
