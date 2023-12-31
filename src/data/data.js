const navigationLinks = [
    {
        name: "About",
        isDropdown: true,
        dropdown: [
            {
                name: "Team",
                link: "/team",
            },
            {
                name: "How we began",
                link: "/how-we-began",
            },
            {
                name: "Photo Gallery",
                link: "/photos",
            },
            {
                name: "Partners & Supporters",
                link: "/partners&supporters",
            },
            {
                name: "Stories of Change",
                link: "/stories",
            }
        ],
    },
    {
        name: "Programs",
        isDropdown: true,
        dropdown: [
            {
                name: "Sahyog Sangharsh",
                link: "/sahyog-sangharsh",
            },
            {
                name: "Sahyog Roshan",
                link: "/sahyog-roshan",
            },
            {
                name: "Sahyog Scholarship and Mentorship Program",
                link: "/sahyog-scholarship-and-mentorship-program"
            },
            {
                name: "Sahyog Jhula",
                link: "/sahyog-jhula",
            }
        ],
    },
    {
        name: "Finances",
        isDropdown: false,
        link: "/finances",
    },
    {
        name: "Sangarsh Campaign",
        isDropdown: false,
        link: "/sangarsh-campaign",
    }
];

export default {
    navigationLinks,
}