"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Alice Johnson",
    review: "This mortgage calculator is super helpful! It gave me a clear idea of my monthly payments.",
    img: 'https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww'
  },
  {
    name: "Michael Smith",
    review: "I love how simple and intuitive the UI is. Great job!",
    img: 'https://images.unsplash.com/photo-1632387109763-7100942eadf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVscyUyMG1hbGV8ZW58MHx8MHx8fDA%3D'
  },
  {
    name: "Emma Davis",
    review: "A fantastic tool! It saved me a lot of time doing manual calculations.",
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww'
  },
];

export default function ReviewCard() {
  const [selectedReview, setSelectedReview] = useState(reviews[0]);

  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-3 h-[80vh]">
      <div className="w-80 h-[80%] relative bg-white shadow-lg rounded-lg text-center flex flex-col items-center justify-end overflow-hidden">
      
        <div className=" z-10 flex flex-col p-6">
            <p className="text-white italic">"{selectedReview.review}"</p>
            <p className="mt-4 text-white font-semibold">- {selectedReview.name}</p>
        </div>
        <img src={selectedReview.img} alt={selectedReview.name} className="w-full h-full object-cover absolute"/>
      </div>
      <div className="flex gap-4 mt-6">
        {reviews.map((person, index) => (
          <button
            key={index}
            onClick={() => setSelectedReview(person)}
            className={`px-5 py-3 rounded-full border ${
              selectedReview.name === person.name ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            {person.name}
          </button>
        ))}
      </div>
    </div>
  );
}
