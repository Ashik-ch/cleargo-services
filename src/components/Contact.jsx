import React, { useEffect } from "react";


const Contact = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);



    return (
        <>
            <header className="bg-gray-900 text-white py-16">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <div className="mb-4">
                        <span id="clock" className="text-lg font-mono"></span>
                    </div>
                    <h1 className="text-4xl font-bold mb-4 text-white">Popular Works</h1>
                    <p className="max-w-xl mx-auto text-lg mb-6">
                        Do you feel overwhelmed keeping your home or workspace spotless? Let ClearGo Services take care of it for you. Our professional cleaning team ensures every corner shines — so you can relax and enjoy a cleaner, healthier environment.

                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://wa.me/918089982218?text=Hello%20ClearGo%20Services%2C%20I%20would%20like%20to%20book%20a%20cleaning%20service."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                        >            Book                        </a>
                        <a
                            href="#instructor"
                            className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 rounded-lg transition"
                        >
                            DISCOVER
                        </a>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">


                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink="https://www.instagram.com/reel/DKe7b-ETsoo/?utm_source=ig_embed&amp;utm_campaign=loading"
                                data-instgrm-version="14"
                                style={{
                                    background: '#FFF',
                                    border: 0,
                                    borderRadius: '3px',
                                    boxShadow:
                                        '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                    margin: '1px',
                                    maxWidth: '540px',
                                    minWidth: '326px',
                                    padding: 0,
                                    width: 'calc(100% - 2px)',
                                }}
                            ></blockquote>

                            <img
                                src="https://extension.usu.edu/images/cleaning.png"
                                alt="Slide 2"
                                className="rounded-lg w-full object-cover"
                            />
                            <img
                                src="https://www.urbancleaner.in/product-images/214-sofa-cleaning-banner.jpg"
                                alt="Slide 3"
                                className="rounded-lg w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Registration Section */}
            <section id="register" className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">
                            Register Using The Form
                        </h2>
                        <p className="mb-4">
                            It's easy to register for the course — just fill out the form and
                            click submit. Then you will be registered for one of the best SEO
                            training courses in the industry.
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li>
                                <strong>Your information</strong> is required to complete the
                                registration.
                            </li>
                            <li>
                                <strong>It's safe with us</strong> and will not be used for
                                marketing.
                            </li>
                            <li>
                                <strong>You will receive</strong> a confirmation email in less
                                than 24h.
                            </li>
                        </ul>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Complete Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                                    required
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" className="h-4 w-4" required />
                                <span className="text-sm">
                                    I've read and agree to the{" "}
                                    <a href="privacy-policy.html" className="underline">
                                        Privacy Policy
                                    </a>{" "}
                                    and{" "}
                                    <a href="terms-conditions.html" className="underline">
                                        Terms & Conditions
                                    </a>
                                </span>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                            >
                                REGISTER
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
