"use client";
import TextReveal from "../TextReveal/TextReveal";

const txt =
  "I am especially drawn to nature, and strive to capture the tiny details and unique character of every subject I draw.";

export default function ArtistStatement() {
  return (
    <div className="bg-[#e2e2e2]">
      <div className="w-full flex justify-center items-center h-full py-50">
        <TextReveal value={txt} />
      </div>
    </div>
  );
}
