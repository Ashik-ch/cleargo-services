import React from "react";

const testimonials = [
  {
    name: "Tea Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-1EwOK_Y2Aj8YyFuYpHJiHq4uG7arWuxLw&s",
    quote: "ClearGo Services left our space spotless! Truly professional and reliable.",
  },
  {
    name: "Ganesh",
    image: "https://img.freepik.com/premium-psd/designer-man-3d-icon-avatar-people_431668-1343.jpg",
    quote: "I was amazed by how clean everything looked. Highly recommend ClearGo!",
  },
  {
    name: "Parveen",
    image: "https://img.freepik.com/premium-psd/asian-woman-3d-icon-avatar-people_431668-1234.jpg",
    quote: "Exceptional attention to detail. Our home has never felt so fresh!",
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
