import Project from '../components/project'

export default function Projects () {
    const projects = [
        {
            name: "Tensorflow Recycling",
            description: "An experimental app that can take an image of a recycling symbol and identify what symbol it is. Mainly used as a learning tool for TensorFlow and machine learning but can built upon in the future.",
            github: "https://github.com/average-alien/tensorflow-recycling",
            image: "/tf-recycle.png",
            alt: "screenshot of app"
        },
        {
            name: "Memories",
            description: "Full stack web app that allows users to keep a journal of important memories. Users can register and log in to accounts which allows them to upload photos to post and view their collection of posts.",
            github: "https://github.com/average-alien/memories-server",
            image: "/memories.png",
            alt: "screenshot of home page"
        },
        {
            name: "FFXIV Collection Tracker",
            description: "Full-stack web app that allows users to browse various collectable items in the online game Final Fantasy XIV. Users can also create and log into accounts to save items to keep track of their personal collection.",
            github: "https://github.com/average-alien/ffxiv-collection-tracker",
            image: "/ffxiv-collection-tracker.png",
            alt: "screenshot of site page"
        },
        {
            name: "Fictional Waffle",
            description: "A web browser game made utilizing the Canvas API. Players use their keyboard to take control of a waffle that can fling dishes at enemy foodstuffs to defeat them.",
            github: "https://github.com/average-alien/fictional-waffle",
            image: "/fictional-waffle.png",
            alt: "screenshot of main game screen"
        },
    ]

    return (
        <div className='row'>
            <h1 className='col col-12 text-center py-5 mt-5'>Projects</h1>

            {projects.map((project, i) => {
                return (
                    <Project project={project} key={`project${i}`}/>
                )
            })}
        </div>
    )
}