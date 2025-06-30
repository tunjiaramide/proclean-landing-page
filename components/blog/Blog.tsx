import BlogDetails from "./BlogDetails"

type BlogProps = {
    imgUrl: string;
    authorName: string;
    date: string;
    title: string;
    content: string;
    href: string;
}

const blogs: BlogProps[] = [
    {   
        imgUrl: "/blog_img_3.png",
        authorName: "JOHN HELTON",
        date: "JAN 6, 2025",
        title: "Eco-Friendly Cleaning: How We Keep Your Home Green",
        content: "Learn about our commitment to eco-friendly practices. We share the eco-conscious products...",
        href: "/"
    },
    {
        imgUrl: "/blog_img_2.png",
        authorName: "JOHN HELTON",
        date: "JAN 6, 2025",
        title: "How to Maintain a Clean Home Between Professional Visits",
        content: "Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips...",
        href: "/"
    },
    {
        imgUrl: "/blog_img_1.png",
        authorName: "JOHN HELTON",
        date: "JAN 6, 2025",
        title: "The Benefits of Regular Professional Cleaning",
        content: "Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...",
        href: "/"
    }
]

export default function Blog() {
  return (
        <div className="px-8 md:px-24 py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-2 border-b-1 mb-8">
                <div className="mb-8 w-[80%]">
                    <h2 className="text-[40px] leading-12 font-semibold capitalize">Stay Updated with Our Tips & Service News!</h2>
                </div>
                <div>
                    <h4 className="text-[18px] mb-3 font-medium">Our Blog</h4>
                    <p className="text-[#666666]">Stay informed with our latest cleaning tips, service updates, expert advice on maintaining an immaculate home</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
                {blogs.map((blog, index) => (
                    <BlogDetails key={index} imgUrl={blog.imgUrl} authorName={blog.authorName} date={blog.date} title={blog.title} content={blog.content} href={blog.href} />
                ))}
            </div>
        </div>
  )
}
