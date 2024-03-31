import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-footer mt-auto">
            <div className="w-full flex flex-col  items-center justify-center">
                <div className="py-4">
                    <Link to="/" className="hover:underline">
                        <span className="font-montserrat text-[22px] text-black items-center justify-center font-semibold">METHI</span>
                    </Link>
                </div>
                <hr className="w-full border-gray-200 items-center dark:border-gray-700" />
                <div className="h-full flex flex-col items-center justify-center">
                    <span className="block font-montserrat text-gray-500 sm:text-center dark:text-black">© 2024 Made With ❤️ using ReactJs + Tailwind</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
