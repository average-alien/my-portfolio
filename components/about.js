import Image from "next/image"

export default function About() {
    return (
        <div>
            {/* load an image locally */}
            {/* <Image
                className="border rounded-5 float-start"
                src="/1663039093651.jfif"
                alt="Headshot of Allen"
                width={200}
                height={200}
                // layout="fill"
            /> */}
            <img 
                className="float-none float-lg-start mx-auto mx-lg-3 border rounded-5"
                width={200}
                height={200}
                src="/1663039093651.jfif"
                alt="Headshot of Allen"
            />

            <div>
                <h1>About Me</h1>

                <p>I'm Allen, a Full-stack Software Engineer with a passion for building applications that provide a clean and valuable user experience. I bring a detail-oriented approach to my work which has been cultivated through years of being a completionist gamer. I love seeing ideas grow into fully developed projects and would be delighted to be a part of growing yours.</p>
            </div>

            {/* 
            <img
                src="/vercel.svg"
                alt="logo"
            >
            */}

            {/* load an image hosted on another domain */}
            {/* <Image
                src="https://placekitten.com/400/500"
                alt="portfolio cat"
                width={400}
                height={500}
            /> */}
        </div>
    )
}