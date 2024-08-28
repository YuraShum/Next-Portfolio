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
const TESTIMONIALS = [
    {
        respond:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
        img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        respond:
            "Adrian's expertise transformed our digital presence. His attention to detail and dedication to quality are unmatched. He quickly adapted to our needs and delivered a polished product that exceeded our expectations.",
        name: "Sarah Williams",
        title: "CEO of TechWave Solutions",
        img: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
        respond:
            "Working with Adrian has been a game-changer for our company. His strategic approach and innovative ideas brought our project to life in ways we couldn't have imagined. Highly recommended!",
        name: "David Lee",
        title: "Marketing Manager at InnovateNow",
        img: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
        respond:
            "Adrian's work ethic and creativity set him apart from others in the field. His ability to communicate complex ideas in a simple way made the development process smooth and enjoyable.",
        name: "Emily Davis",
        title: "Founder of BrightSpace Media",
        img: 'https://randomuser.me/api/portraits/women/28.jpg',
    },
    {
        respond:
            "I was impressed by Adrian's skill set and his genuine commitment to our project. His insights were invaluable, and his design work truly reflects our brand's vision.",
        name: "John Smith",
        title: "CTO of BlueTech Enterprises",
        img: 'https://randomuser.me/api/portraits/men/25.jpg',
    },
    {
        respond:
            "Adrian brought our concept to life with precision and flair. His dedication to achieving the perfect result was evident in every detail of the project.",
        name: "Linda Martinez",
        title: "Product Manager at Digital Horizons",
        img: 'https://randomuser.me/api/portraits/women/22.jpg',
    },
    {
        respond:
            "From start to finish, Adrian was a joy to work with. His professionalism, coupled with his creative input, ensured that our project was not only completed on time but also surpassed our expectations.",
        name: "James Brown",
        title: "Head of Operations at TechVista",
        img: 'https://randomuser.me/api/portraits/men/34.jpg',
    },
    {
        respond:
            "Adrian's approach to problem-solving and his attention to design details made all the difference in our project. He went above and beyond to ensure we were satisfied with the outcome.",
        name: "Sophia Taylor",
        title: "Lead Designer at Creative Minds",
        img: 'https://randomuser.me/api/portraits/women/35.jpg',
    },
    {
        respond:
            "Adrian is a rare find in the industry. His technical skills are complemented by his creativity and ability to listen to client needs, resulting in an outstanding end product.",
        name: "Chris Wilson",
        title: "Senior Developer at CodeStream",
        img: 'https://randomuser.me/api/portraits/men/48.jpg',
    },
    {
        respond:
            "Adrian's professionalism, talent, and passion for his work were evident throughout our collaboration. He consistently delivered beyond our expectations, making him a valued partner.",
        name: "Olivia Anderson",
        title: "Marketing Director at Visionary Labs",
        img: 'https://randomuser.me/api/portraits/women/50.jpg',
    },
    {
        respond:
            "Working with Adrian was a seamless experience. His deep knowledge of web development and design helped us create a product that not only looks great but also performs exceptionally.",
        name: "Daniel Garcia",
        title: "Business Owner at TechSavvy Solutions",
        img: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    {
        respond:
            "Adrian exceeded our expectations with his innovative design and development skills. His ability to bring creative solutions to the table helped our brand stand out.",
        name: "Mia Rodriguez",
        title: "CEO of Cloud Nine Media",
        img: 'https://randomuser.me/api/portraits/women/53.jpg',
    },
];

export {
    GRID_ITEMS,
    TECH_STACK,
    PROJECTS,
    NAV_CONFIG,
    TESTIMONIALS
}