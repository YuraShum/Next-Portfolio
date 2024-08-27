const GRID_ITEMS = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[50vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/Bento-Grid-Img-1.jpg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: " md:col-span-3 md:row-span-4 lg:min-h-[30vh]",
        imgClassName: "absolute right-0 bottom-0 md:w-full opacity-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: `background-img-5.jpg`,
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

const TECH_STACK = [
    'HTML/CSS',
    'JavaScript',
    'SASS',
    'Tailwind CSS',
    'React',
    'Redux Toolkit',
    'React Router',
    'axios',
    'Git',
    'Express',
    'MongoDB',
    ""
]


const PROJECTS = [
    {
        id: 1,
        title: 'VanLife',
        description: 'This project serves as an initial template for a car rental program for travel.',
        img: '/projectsImg/vanLife.png',
        iconLists: ["/technologies/js.svg", "/technologies/re.svg", '/technologies/rer.svg', "/technologies/css.png"],
        link: 'https://github.com/YuraShum/van-life'
    },
    {
        id: 2,
        title: 'FitClub',
        description: 'This site serves as a landing page for the sports club, providing detailed information about tariffs and the team.',
        img: '/projectsImg/fitClub.png',
        iconLists: ["/technologies/js.svg", "/technologies/re.svg", "/technologies/fm.svg"],
        link: '/'
    },
    {
        id: 3,
        title: 'BostonFanSite',
        description: 'This site was created with the help of pure CSS and HTML for basketball fans to get information about the club.',
        img: '/projectsImg/fanSite.png',
        iconLists: ["/technologies/html.png", "/technologies/css.png",],
        link: 'https://github.com/YuraShum/Fan-site-Boston'
    },
    {
        id: 4,
        title: 'Portfolio',
        description: 'The project, which displays the created projects, is used by SAP to add effects',
        img: '/projectsImg/portfolio.png',
        iconLists: ["/technologies/js.svg", "/technologies/html.png", "/technologies/css.png", "/technologies/gsap.svg",],
        link: 'https://github.com/YuraShum/Project-slider'
    },
    {
        id: 5,
        title: 'Movie',
        description: 'This service is designed to recommend and search for movies based on metadata analysis.',
        img: '/projectsImg/movie.png',
        iconLists: ["/technologies/re.svg", "/technologies/js.svg", "/technologies/material-ui.svg", "/technologies/redux.svg",
            "/technologies/axios.png", "/technologies/formik.png", "/technologies/rer.svg", "/technologies/sass.png",
            "/technologies/node-js.svg", "/technologies/express.png", "/technologies/mongodb.svg",
        ],
        link: '/'
    },
    {
        id: 6,
        title: 'EvoGym',
        description: 'This is an educational project in which a landing page for a sports club was created using Framer-motion for animation.',
        img: '/projectsImg/evoGym.png',
        iconLists: ["/technologies/re.svg", "/technologies/ts.svg", "/technologies/tail.svg", "/technologies/fm.svg",
        ],
        link: 'https://github.com/YuraShum/EvoGym'
    },
    {
        id: 7,
        title: 'Note',
        description: 'A notepad for reminders with the ability to add, edit, read, and delete notes.',
        img: '/projectsImg/note.png',
        iconLists: ["/technologies/js.svg", "/technologies/re.svg", "/technologies/sass.png", "/technologies/markdown.svg",],
        link: 'https://github.com/YuraShum/notes'
    },
    {
        id: 8,
        title: 'Gallery',
        description: 'Brochure for a travel company using technology (Tailwind CSS).',
        img: '/projectsImg/travel.png',
        iconLists: ["/technologies/js.svg", "/technologies/re.svg", "/technologies/sass.png", '/technologies/tail.svg'],
        link: '/'
    },
    {
        id: 9,
        title: 'Quiz',
        description: 'The quiz is designed for learning with the possibility of advanced movement between tests.',
        img: '/projectsImg/quiz.png',
        iconLists: ["/technologies/js.svg", "/technologies/re.svg", "/technologies/sass.png"],
        link: 'https://github.com/YuraShum/Quiz-v2'
    },
    {
        id: 10,
        title: 'Chat',
        description: 'Online chat for communication between people in real time.',
        img: '/projectsImg/chat.png',
        iconLists: ["/technologies/js.svg", "/technologies/re.svg", "/technologies/rer.svg", "/technologies/css.png",
            "/technologies/node-js.svg", "/technologies/express.png", "/technologies/soio.jpg"
        ],
        link: '/'
    },
]

const NAV_CONFIG = [
    {
        name: 'Home',
        link: ''
    },
    {
        name: 'About',
        link: '#about'
    },
    {
        name: 'Projects',
        link: '#projects'
    },
    {
        name: 'Testimonials',
        link: '#testimonials'
    },
    {
        name: 'Contact',
        link: '#contact'
    },

]

export {
    GRID_ITEMS,
    TECH_STACK,
    PROJECTS,
    NAV_CONFIG
}