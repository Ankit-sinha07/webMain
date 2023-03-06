import React, { useEffect, useState } from "react";
import sanityClient from "../../components/client.js";
import imageUrlBuilder from "@sanity/image-url";
import groq from "groq";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Comments from "../../components/Blogs/comment";
import PortableText from "react-portable-text";
import Header from "../../components/Blogs/header";
import Head from "next/head.js";
import { initializeFirebase, db } from "../../components/Firebase/index";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

// fontFamily:
// "monteserrat, quicksand,inter, roboto, sans-serif",

export default function SinglePost({ postData, author, slug }) {
  const [countclap, setcountclap] = useState(0);
  useEffect(() => {
    const myFunc = async () => {
      console.log(postData, author, slug);
      initializeFirebase();
      const docRef = doc(db, "comments", slug);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setcountclap(docSnap.data().clap);
      }
    };

    myFunc();
  }, []);

  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData?.excerpt} />
        <meta name="keywords" content={postData?.keywords} />
        <meta name="title" content={postData.title}></meta>
      </Head>
      <Navbar></Navbar>
      <div className="flex flex-row h-full mx-4 md:mx-24">
        <div className="flex flex-col m-2 p-4 h-full w-full md:w-4/5 border-2 border-black space-y-5">
          <h1 className="m-2 text-4xl font-bold">{postData.title}</h1>
          <Header
            id={postData._id}
            author={author}
            date={postData?._updatedAt}
            readtime={postData?.nminutesofread}
            countclap={countclap}
            slug={postData?.slug.current}
          ></Header>

          <img
            className="w-full"
            src={urlFor(postData.mainImage).url()}
            alt="career vyas"
          />

          <PortableText
            content={postData.content}
            serializers={{
              container: (props) => (
                <div
                  style={{
                    margin: "8px 2px",
                    display: "flex",
                    flexDirection: "column",
                    wordSpacing: "2px",
                    textAlign: "justify",
                  }}
                  {...props}
                />
              ),
              h1: (props) => (
                <h1
                  style={{
                    fontSize: "2rem",
                    fontWeight: "900",
                    margin: "12px 2px",
                    textAlign: "justify",
                  }}
                  {...props}
                />
              ),
              h2: (props) => (
                <h2
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: "700",
                    margin: "12px 2px",
                    textAlign: "justify",
                  }}
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    margin: "12px 2px",
                    textAlign: "justify",
                  }}
                  {...props}
                />
              ),
              h4: (props) => (
                <h4
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "500",
                    margin: "12px 2px",
                    textAlign: "justify",
                  }}
                  {...props}
                />
              ),
              h5: (props) => (
                <h5
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    margin: "12px 2px",
                    textAlign: "justify",
                  }}
                  {...props}
                />
              ),
              h6: (props) => (
                <h6
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    margin: "12px 2px",
                    textAlign: "justify",
                  }}
                  {...props}
                />
              ),
              normal: (props) => (
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "400",
                    margin: "8px 2px",
                    textAlign: "justify",
                  }}
                  {...props}
                />
              ),
              link: (props) => (
                <a
                  style={{
                    color: "blue",
                    margin: "8px 2px",
                    textAlign: "justify",
                  }}
                  {...props}
                />
              ),
              ul: (props) => (
                <ul
                  style={{
                    listStyleType: "disc",
                    marginLeft: "1rem",
                    margin: "8px 20px",
                    textAlign: "justify",
                  }}
                  {...props}
                />
              ),
              em: (props) => (
                <em
                  style={{
                    fontStyle: "italic",
                    margin: "8px 2px",
                    textAlign: "justify",
                  }}
                  {...props}
                />
              ),
              strong: (props) => (
                <strong
                  style={{
                    fontWeight: "bold",
                    margin: "8px 2px",
                    textAlign: "justify",
                  }}
                  {...props}
                />
              ),
              blockquote: (props) => (
                <blockquote
                  style={{
                    borderLeft: "5px solid #ccc",
                    fontStyle: "italic",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    paddingLeft: "1rem",
                    margin: "8px 2px",
                    textAlign: "justify",
                  }}
                  {...props}
                />
              ),
              table: (props) => (
                <table class="min-w-full text-center">
                  <thead class="border-b bg-gray-800">
                    {props.rows[0].cells.map((header, index) => (
                      <th
                        key={index}
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        {header}
                      </th>
                    ))}
                  </thead>
                  <tbody>
                    {props.rows.slice(1).map((row, index) => (
                      <tr class="bg-white border-b" key={index}>
                        {row.cells.map((content, index) => (
                          <td
                            key={index}
                            className="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                          >
                            {content}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ),
            }}
            projectId={sanityClient.config().projectId}
            dataset={sanityClient.config().dataset}
          />
          {postData.youtubeVideo && (
            <iframe
              className="w-full h-full sm:h-[500px]"
              src={postData.youtubeVideo}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          <Comments slug={postData?.slug.current}></Comments>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const query = groq`*[_type=="post" && slug.current=="${slug}"][0]`;
  const post = await sanityClient.fetch(query);
  if (!post)
    return {
      notFound: true,
    };
  const authorQuery = groq`*[_type=="author" && _id=="${post?.author._ref}"]`;
  const author = await sanityClient.fetch(authorQuery);
  const authorName = author[0]?.name;

  return {
    props: { slug, author: authorName || null, postData: post || null },
  };
}
