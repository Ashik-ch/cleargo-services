import React, { useEffect } from "react";
import "./contact.scss";

const Gallery = () => {
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
        </>
    );
};

export default Gallery;
