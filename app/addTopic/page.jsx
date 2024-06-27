"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-gray-700 bg-gray-800 text-white px-8 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-gray-700 bg-gray-800 text-white px-8 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Add Todo
      </button>
    </form>
  );
}
