import React, { useEffect } from "react";
import "./contact.scss";

const Contact = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.setAttribute("src", "https://www.instagram.com/embed.js");
        script.setAttribute("async", "true");
        document.body.appendChild(script);
    }, []);

    const instagramPosts = [
        "https://www.instagram.com/reel/DKe7b-ETsoo/",
        "https://www.instagram.com/reel/DKe7b-ETsoo/",
        "https://www.instagram.com/p/DKkkomhTy8K/",
        "https://www.instagram.com/p/DKdi1r7vBjL/",
        "https://www.instagram.com/p/DKXTNazCgIE/",

    ];

    return (
        <>
            <header className="bg-gray-900 text-white py-16">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <h1 className="text-4xl font-bold mb-4">Popular Works</h1>
                    <p className="max-w-xl mx-auto text-lg mb-6">
                        Do you feel overwhelmed keeping your home or workspace spotless? Let
                        ClearGo Services take care of it for you. Our professional cleaning
                        team ensures every corner shines — so you can relax and enjoy a
                        cleaner, healthier environment.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://wa.me/918089982218?text=Hello%20ClearGo%20Services%2C%20I%20would%20like%20to%20book%20a%20cleaning%20service."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                        >
                            Book
                        </a>
                        <a
                            href="#register"
                            className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 rounded-lg transition"
                        >
                            Discover
                        </a>
                    </div>
                </div>
                <div style={{ height: '100px' }}>
                    <img
                        src="https://www.instagram.com/p/DKdi1r7vBjL/media/?size=l"
                        alt="Instagram Post"
                        className="h-full w-full object-cover"
                    />
                </div>


                {/* Instagram Embed Section */}
                <div className="mt-12 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {instagramPosts.map((url, idx) => (
                        <blockquote
                            key={idx}
                            className="instagram-media w-full"
                            data-instgrm-permalink={url}
                            data-instgrm-version="14"
                            style={{
                                background: "#FFF",
                                border: 0,
                                borderRadius: "3px",
                                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                                margin: "auto",
                                padding: 0,
                            }}
                        ></blockquote>
                    ))}
                </div>
            </header>

            {/* Register Section */}
            <section id="register" className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Register for a Service</h2>
                        <p className="mb-4">
                            It's easy to book a cleaning — just fill out the form and click submit.
                            Our team will get back to you promptly!
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li><strong>Quick response</strong> and flexible scheduling</li>
                            <li><strong>Your data</strong> is secure with us</li>
                            <li><strong>You will receive</strong> confirmation via call or WhatsApp</li>
                        </ul>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full border rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full border rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full border rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" className="h-4 w-4" required />
                                <span className="text-sm">
                                    I agree to the{" "}
                                    <a href="/privacy-policy" className="underline">
                                        Privacy Policy
                                    </a>{" "}
                                    and{" "}
                                    <a href="/terms-conditions" className="underline">
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
