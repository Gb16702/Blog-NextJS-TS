"use client";


export function Submit({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col bg-[#4660b5]
          opacity-100 w-full rounded-lg px-3  mt-10 transition ease-out duration-[.25s] hover:bg-[#5d75c3]">
      <button
        type="submit"
        className="text-white px-5 py-2 rounded-lg h-12">
        {children}
      </button>
    </div>
  );
}
