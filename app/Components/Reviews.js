"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Alice Johnson",
    review: "This mortgage calculator is super helpful! It gave me a clear idea of my monthly payments.",
    img: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Michael Smith",
    review: "I love how simple and intuitive the UI is. Great job!",
    img: "https://images.unsplash.com/photo-1632387109763-7100942eadf5?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Emma Davis",
    review: "A fantastic tool! It saved me a lot of time doing manual calculations.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60",
  },
];

export default function ReviewCard() {
  const [selectedReview, setSelectedReview] = useState(reviews[0]);

  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-5 h-[80vh] px-4">
      {/* Review Card */}
      <div className="relative w-80 h-[80%] bg-white shadow-lg rounded-lg text-center overflow-hidden transition-all duration-500">
        {/* Background Image */}
        <img
          src={selectedReview.img}
          alt={selectedReview.name}
          className="w-full h-full object-cover absolute"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Review Text */}
        <div className="relative z-10 flex flex-col p-6 text-white">
          <p className="italic text-lg">"{selectedReview.review}"</p>
          <p className="mt-4 font-semibold text-lg">- {selectedReview.name}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        {reviews.map((person, index) => (
          <button
            key={index}
            onClick={() => setSelectedReview(person)}
            aria-label={`Select review from ${person.name}`}
            className={`px-4 py-2 text-sm md:text-base rounded-full border transition-all duration-300 ${
              selectedReview.name === person.name
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {person.name}
          </button>
        ))}
      </div>
    </div>
  );
}
