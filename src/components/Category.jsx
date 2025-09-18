// src/pages/CategoryPage.jsx
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaBroom,
    FaLeaf,
    FaClock,
    FaShieldAlt,
    FaWindowMaximize,
    FaSprayCan,
    FaSocks,
    FaCouch,
} from "react-icons/fa";

const categories = {
    "/residential": {
        title: "Residential Cleaning",
        subtitle: "Fresh & Spotless Homes",
        description:
            "Our residential cleaning services bring back freshness to your home. From dust removal to deep cleaning, we ensure every corner is neat, hygienic, and shining.",
        banner:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        features: [
            {
                icon: <FaBroom />,
                title: "Deep Cleaning",
                description: "Thorough cleaning of every room.",
                hoverImage:
                    "https://images.unsplash.com/photo-1598542273314-1d6ae2bc4974?auto=format&fit=crop&w=1200&q=80",
            },
            {
                icon: <FaLeaf />,
                title: "Eco-Friendly Products",
                description: "Safe cleaning with green solutions.",
                hoverImage:
                    "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?auto=format&fit=crop&w=1200&q=80",
            },
            {
                icon: <FaClock />,
                title: "Time-Saving Service",
                description: "Quick and efficient cleaning process.",
                hoverImage:
                    "https://images.unsplash.com/photo-1602147426439-78dcb0f6d2f3?auto=format&fit=crop&w=1200&q=80",
            },
            {
                icon: <FaShieldAlt />,
                title: "Safe & Trusted",
                description: "Trained professionals for your safety.",
                hoverImage:
                    "https://images.unsplash.com/photo-1597091495845-473f857fac2b?auto=format&fit=crop&w=1200&q=80",
            },
        ],
    },

    "/window-cleaning": {
        title: "Window & Glass Cleaning",
        subtitle: "Crystal Clear Shine",
        description:
            "Give your windows and glass a sparkling new look. Our specialized cleaning methods leave your glass streak-free, shiny, and spotless.",
        banner:
            "https://ccscleaning.com/wp-content/uploads/2018/12/window-cleaning-banner.jpg",
        features: [
            {
                icon: <FaWindowMaximize />,
                title: "Spotless Windows",
                description: "Clear, streak-free glass cleaning.",
                hoverImage:
                    "https://images.unsplash.com/photo-1524230566385-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
            },
            {
                icon: <FaSprayCan />,
                title: "Professional Tools",
                description: "High-quality cleaning equipment.",
                hoverImage:
                    "https://images.unsplash.com/photo-1600585154206-7a36d6d05463?auto=format&fit=crop&w=1200&q=80",
            },
            {
                icon: <FaLeaf />,
                title: "Eco Solutions",
                description: "Safe cleaning without harsh chemicals.",
                hoverImage:
                    "https://images.unsplash.com/photo-1560184897-d1f54db073a0?auto=format&fit=crop&w=1200&q=80",
            },
            {
                icon: <FaClock />,
                title: "Quick Service",
                description: "Efficient cleaning in minimal time.",
                hoverImage:
                    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
            },
        ],
    },

    "/carpet-upholstery": {
        title: "Carpet & Upholstery",
        subtitle: "Fresh Fabrics, Comfortable Living",
        description:
            "Revive your carpets and upholstery with our deep cleaning methods. We remove dust, stains, and allergens to keep your interiors fresh and cozy.",
        banner:
            "https://www.jdogcarpetcleaning.com/wp-content/uploads/2019/06/gallery-upholstery-cleaning.jpg",
        features: [
            {
                icon: <FaCouch />,
                title: "Upholstery Care",
                description: "Safe cleaning for sofas & chairs.",
                hoverImage:
                    "https://images.unsplash.com/photo-1620801581257-2f63d42f6f5b?auto=format&fit=crop&w=1200&q=80",
            },
            {
                icon: <FaSocks />,
                title: "Carpet Freshness",
                description: "Dust and stain removal guaranteed.",
                hoverImage:
                    "https://images.unsplash.com/photo-1616627457883-1b4e7f8f1db5?auto=format&fit=crop&w=1200&q=80",
            },
            {
                icon: <FaLeaf />,
                title: "Allergen Removal",
                description: "Healthier air & living environment.",
                hoverImage:
                    "https://images.unsplash.com/photo-1581579188811-7bb10c5e1f87?auto=format&fit=crop&w=1200&q=80",
            },
            {
                icon: <FaShieldAlt />,
                title: "Fabric Protection",
                description: "Extend life of your carpets & sofas.",
                hoverImage:
                    "https://images.unsplash.com/photo-1616627861831-4558d7b3b3a9?auto=format&fit=crop&w=1200&q=80",
            },
        ],
    },
};


const Category = () => {
    const location = useLocation();
    const category = categories[location.pathname] || categories["/residential"];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner */}
            <div className="relative w-full h-[300px] md:h-[400px]">
                <img
                    src={category.banner}
                    alt={category.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        {category.title}
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl mt-2"
                    >
                        {category.subtitle}
                    </motion.h2>
                </div>
            </div>

            {/* Description */}
            <div className="max-w-5xl mx-auto px-6 py-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 text-lg leading-relaxed"
                >
                    {category.description}
                </motion.p>
            </div>

            {/* Features */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
                {category.features.map((feature, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="relative group bg-white shadow-lg rounded-xl p-6 text-center transition duration-300 overflow-hidden"
                    >
                        {/* Hover background */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                            style={{
                                backgroundImage: `url(${feature.hoverImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>

                        {/* Overlay for hover */}
                        <div className="relative z-10">
                            <div className="text-4xl text-primary-600 mb-4 mx-auto flex justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
                        </div>

                        {/* Overlay background */}
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Category;
