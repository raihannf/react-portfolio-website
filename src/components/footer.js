export default function Footer() {
  return (
    <div className="bg-black px-16 py-6 md:px-24 md:py-12 lg:px-28 lg:py-22 xl:px-36 xl:pt-24 xl:pb-40 flex items-center justify-between font-clashDisplay text-white text-sm font-[600] tracking-widest">
      <div>© 2023</div>
      <div className="flex items-center justify-between gap-8">
        <div className="text-gray-400 hover:text-white ease-in-out duration-200">
          <a href="mailto:raihannaufal@upi.edu?subject=Hello">EMAIL</a>
        </div>
        <div className="text-gray-400 hover:text-white ease-in-out duration-200">
          <a href="https://www.instagram.com/raihannfal ">INSTAGRAM</a>
        </div>
        <div className="text-gray-400 hover:text-white ease-in-out duration-200">
          <a href="https://www.linkedin.com/in/raihannaufalfawwaz/">LINKEDIN</a>
        </div>
        <div className="text-gray-400 hover:text-white ease-in-out duration-200">
          <a href="https://www.behance.net/raihan-naufal">BEHANCE</a>
        </div>
      </div>
    </div>
  );
}
