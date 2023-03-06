import Blogs from "../components/Blogs/Blog";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import groq from "groq";
import client from "../components/client";
export default function Blog({ blogs }) {
  return (
    <div
      className="bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2FBackground.svg?alt=media&token=57acc8ed-1d1d-4c35-9d6c-c4d0ba098c47')]
    bg-no-repeat bg-contain"
    >
      <Navbar />
      <Blogs blogs={blogs} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const blogs = await client.fetch(groq`
    *[_type == "post" ] | order(dateTime(_createdAt) desc) 
  `);
  if (!blogs) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blogs },
  };
}
