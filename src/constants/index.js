const links = [
    { id: 1, href: "/", label: "Home" },
    { id: 2, href: "/dashboard", label: "Dashboard" },
    { id: 3, href: "/about", label: "About Us" },
    { id: 4, href: "/contact", label: "Contact Us" },
    { id: 5, href: "/login", label: "Login / Signup" }
];

const profileDropDown = [
    { id: 1, href: "/profile", label: "View Profile"},
    { id: 2, href: "/settings", label: "Settings"},
    { id: 3, href: "/", label: "Logout"}
]

const projectSideTabs = [
    { id: 1, href: "/", label: "METHI Project"},
    { id: 2, href: "/", label: "AQM Project"},
    { id: 3, href: "/", label: "Phishing Microworld"}
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

export {links, profileDropDown, projectSideTabs, loginFields, signupFields};
