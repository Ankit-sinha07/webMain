import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
import PortableText from "react-portable-text";
import sanityClient from "../client";
import styles from "./Notification.module.css";

function tConvert(time) {
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}

export default function Card({ post }) {
  const imageProps = useNextSanityImage(client, post.Image);

  return (
    <div className="w-[280px] h-[680px] mobile:w-[350px] mobile:h-[620px] rounded-xl overflow-hidden border-4 my-2 mx-auto relative">
      <div
        className={`w-full mb-4 h-[200px] rounded-t-xl relative ${styles.image}`}
      >
        <Image
          src={imageProps.src}
          alt={post.title}
          layout="fill"
          objectFit="contain"
        />
        <div className="font-bold px-2  text-white text-lg absolute top-40 line-clamp-2 leading-5 w-full z-10">
          {post.title}
        </div>
      </div>
      <div>
        <p className="bg-white text-gray-700 text-sm px-3 h-screen text-justify">
          <span className="text-[#6776FF] font-bold mx-[2px]">
            {new Date(post.PublishedAt).toString().substring(7, 10) +
              " " +
              new Date(post.PublishedAt)
                .toString()
                .substring(4, 7)
                .toUpperCase() +
              "," +
              new Date(post.PublishedAt).toString().substring(11, 15) +
              " " +
              tConvert(
                new Date(post.PublishedAt).toString().substring(16, 21)
              ) +
              " : "}
          </span>
          <PortableText
            content={post.content}
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
                    borderLeft: "5px solid #084f8d",
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
                  <thead class="border-b bg-emerald-800">
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
                      <tr class="bg-emerald-700 border" key={index}>
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
        </p>
      </div>
    </div>
  );
}
