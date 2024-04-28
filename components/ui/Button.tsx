"use client";
const Button = () => {
  return (
    <button
      onClick={() => {
        alert("Hllo dp");
      }}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
    >
      Sing In
    </button>
  );
};

export { Button };
