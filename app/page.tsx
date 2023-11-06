import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-end gap-20 fixed top-0 left-0 right-0 shadow-md px-5 bg-white">
        <button className="text-lg text-neutral-500 py-5">Homepage</button>
        <button className="text-lg text-neutral-500 py-5">Friends</button>
        <button className="text-lg text-neutral-500 py-5">Tasks</button>
        <button className="text-lg text-neutral-500 py-5">Events</button>
        <button className="text-lg text-neutral-500 py-5">About Fasilkom/UI</button>
        <button className="text-lg text-neutral-500 py-5">Welcome, Muhammad Vito Secona</button>
      </nav>
      <div className="mt-32 flex flex-col items-center gap-10">
        <div>
          <div>
            <h1 className="text-3xl font-bold">Muhammad Vito Secona</h1>
            <p>Class of 2023</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="inline-grid grid-cols-2 gap-x-10 gap-y-5">
            <div>
              <p className="font-bold uppercase">nickname</p>
              <p>Vito</p>
            </div>
            <div>
              <p className="font-bold uppercase">high school</p>
              <p>SMA Negeri 34 Jakarta</p>
            </div>
            <div>
              <p className="font-bold uppercase">major</p>
              <p>Computer Science</p>
            </div>
            <div>
              <p className="font-bold uppercase">whatsapp</p>
              <p>081234567890</p>
            </div>
            <div>
              <p className="font-bold uppercase">current city</p>
              <p>SMA Negeri 34 Jakarta</p>
            </div>
            <div>
              <p className="font-bold uppercase">id line</p>
              <p>@vitosecona</p>
            </div>
            <div>
              <p className="font-bold uppercase">birth information</p>
              <p>Jakarta, 30 September 2005</p>
            </div>
            <div>
              <p className="font-bold uppercase">instagram</p>
              <p>@vitosecona</p>
            </div>
          </div>
          <span className="w-full h-[2px] bg-gray-200"></span>
          <div>
            <p className="font-bold uppercase">description</p>
            <p>anak pacil yey</p>
          </div>
          <div>
            <p className="font-bold uppercase">interests</p>
            <div className="flex flex-wrap gap-2 max-w-xl">
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
              <p className="bg-gray-100 py-2 px-5 rounded-full text-sm">
                Software Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
