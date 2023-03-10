import Card from "./Card";

export default function Blog({ blogs }) {
  return (
    <div className="flex flex-col  items-center w-full h-full mb-5 ">
      <h3 className="text-2xl text-center md:text-4xl font-semibold mt-7">
        Read Blogs that make you Smart 💡
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-7 ">
        {blogs.map((item, index) => (
          <Card key={item._id} data={item} isNew={index <= 2} />
        ))}
      </div>
    </div>
  );
}
