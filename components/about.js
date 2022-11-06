import Image from "next/image"

export default function About() {
    return (
        <>
            {/* load an image locally */}
            <Image
                src="/vercel.svg"
                alt="Headshot of Allen"
                width={300}
                height={300}
                // layout="fill"
            />
            
            <h1>About Me</h1>

            <p>I am a Full-stack Software Engineer with a passion for building applications that provide a clean and valuable user experience. I bring a detail-oriented approach to my work which has been cultivated through years of being a completionist gamer. I love seeing ideas grow into fully developed projects and would be delighted to be a part of growing yours.</p>

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
        </>
    )
}