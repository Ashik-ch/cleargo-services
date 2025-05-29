import React from "react";

const testimonials = [
  {
    name: "Adam Aderson",
    image: "images/person_2.jpg",
    quote:
      "There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    name: "Lukas Devlin",
    image: "images/person_3.jpg",
    quote:
      "There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    name: "Kayla Bryant",
    image: "images/person_4.jpg",
    quote:
      "There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 mt-5">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold mb-10">Testimonials</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <figure className="w-24 h-24 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-full h-full object-cover"
                />
              </figure>
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <blockquote className="text-gray-600 italic">
                “{testimonial.quote}”
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
