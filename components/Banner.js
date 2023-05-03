const Banner = ({ stars }) => {
    return (
    <header className="bg-white">
        <div className="container xl:max-w-screen-xl mx-auto px-8 pt-20 pb-1">
            <div className="flex flex-wrap items-center justify-between">
                <h1 className="text-3xl mr-6 mb-4"></h1>
                {/* <a
                    href="https://github.com/gregives/StegaPhoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg text-xl bg-gray-900 bg-opacity-10 opacity-95 shadow-inner hover:bg-opacity-20 focus:outline-none focus-visible:ring ring-gray-100 ring-opacity-25 pl-2 pr-3 mb-4"
                >
                    &#9733; {stars} stars
                </a> */}
            </div>
            <p className="text-6xl font-semibold md:text-5xl lg:text-5xl pb-20">
            Թաքցնել ֆայլերը պատկերների ներսում
            </p>
        </div>
    </header>
)};

export default Banner;
// bg-gradient-to-b from-gray-500 to-gray-900