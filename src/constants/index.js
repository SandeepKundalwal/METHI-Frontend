const links = [
    { id: 1, href: "/", label: "Home" },
    { id: 2, href: "/dashboard", label: "Dashboard" },
    { id: 3, href: "/about", label: "About Us" },
    { id: 4, href: "/contact", label: "Contact Us" },
    { id: 5, href: "/login", label: "Login / Signup" }
];

const users = [
    { userId: 1, name:  "Sandeep Kundalwal", profilePicUrl: "src\\assets\\images\\1.png" },
    { userId: 2, name: "Mahima Gupta", profilePicUrl: "src\\assets\\images\\2.png" }
]

const profileDropDown = [
    { id: 1, href: "/profile", label: "View Profile"},
    { id: 2, href: "/settings", label: "Settings"},
    { id: 3, href: "/", label: "Logout"}
]

const projects = [
    { id: 1, href: "/dashboard", label: "METHI Project"},
    { id: 2, href: "/dashboard", label: "AQM Project"},
    { id: 3, href: "/dashboard", label: "Phishing Microworld"}
]

const todos = [
    {userId: 1, id: 1, title:"HeatMap Generation", description:"Generate heatmap generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-25")},
    {userId: 1, id: 2, title:"Eye Data Capturing Module", description:"Generate eye data capturing generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-01")},
    {userId: 1, id: 3, title:"HeatMap Generation", description:"Generate heatmap generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-25")},
    {userId: 1, id: 4, title:"Eye Data Capturing Module", description:"Generate eye data capturing generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-01")},
    // {userId: 1, id: 5, title:"HeatMap Generation", description:"Generate heatmap generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-25")},
    // {userId: 1, id: 6, title:"Eye Data Capturing Module", description:"Generate eye data capturing generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-01")},
]

const inprogress = [
    {userId: 1, id: 1, title:"HeatMap Generation", description:"Generate heatmap generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-25")},
    {userId: 1, id: 2, title:"Eye Data Capturing Module", description:"Generate eye data capturing generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-01")},
    {userId: 1, id: 3, title:"HeatMap Generation", description:"Generate heatmap generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-25")},
    {userId: 1, id: 4, title:"Eye Data Capturing Module", description:"Generate eye data capturing generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-01")},
    // {userId: 1, id: 5, title:"HeatMap Generation", description:"Generate heatmap generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-25")},
    // {userId: 1, id: 6, title:"Eye Data Capturing Module", description:"Generate eye data capturing generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-01")},
]

const done = [
    {userId: 1, id: 1, title:"HeatMap Generation", description:"Generate heatmap generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-25")},
    {userId: 1, id: 2, title:"Eye Data Capturing Module", description:"Generate eye data capturing generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-01")},
    {userId: 1, id: 3, title:"HeatMap Generation", description:"Generate heatmap generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-25")},
    {userId: 1, id: 4, title:"Eye Data Capturing Module", description:"Generate eye data capturing generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-01")},
    // {userId: 1, id: 5, title:"HeatMap Generation", description:"Generate heatmap generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-25")},
    // {userId: 1, id: 6, title:"Eye Data Capturing Module", description:"Generate eye data capturing generation module using Javascript", ticketDate: new Date("2024-03-25"), ticketEndDate: new Date("2024-04-01")},
]

const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
]

export {links, users, profileDropDown, projects, todos, inprogress, done, loginFields, signupFields};
