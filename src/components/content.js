import Logo from "./logocarousel";
import Gallery from "./gallery";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <section className="bg-black flex flex-col px-4 pt-4 sm:px-8 sm:pt-8">
      {/* home */}
      <div
        id="home"
        className="bg-[url('/public/bg-image.webp')] bg-cover rounded-t-3xl h-screen max-h-[26rem] md:max-h-[32rem] lg:max-h-[40rem] xl:max-h-[48rem] px-8 py-6 md:px-16 md:py-12 lg:px-20 lg:py-14 xl:px-28 xl:py-16 relative scroll-mt-8"
      >
        <div className="absolute bottom-0 left-0 h-2/4 w-full px-0 py-0 bg-gradient-to-t from-black from-10%" />
        <div className="flex flex-wrap flex-col max-w-screen-2xl content-center">
          {/* socials section */}
          <div className="flex flex-row items-center justify-between mb-14 md:mb-20 lg:mb-28">
            <div className="text-white hover:text-opacity-80 font-spaceGrotesk font-bold text-md sm:text-lg md:text-xl xl:text-2xl">
              <a href="/">Raihan Naufal</a>
            </div>
            <div className="md:inline-flex flex-row h-max w-max gap-4 hidden">
              <div className="h-10 w-10 bg-glass bg-opacity-30 hover:bg-opacity-20 backdrop-blur-md bg-blend-multiply border-l-1 border-t-2 border-gray-200/50 rounded-full inline-flex justify-center items-center">
                <a
                  className="p-3"
                  href="mailto:raihannaufal@upi.edu?subject=Hello"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white h-[1.375rem] w-[1.375rem]"
                  >
                    <title>Mail</title>
                    <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12" />
                  </svg>
                </a>
              </div>
              <div className="h-10 w-10 bg-glass bg-opacity-30 hover:bg-opacity-20 backdrop-blur-md bg-blend-multiply border-l-1 border-t-2 border-gray-200/50 rounded-full inline-flex justify-center items-center">
                <a
                  className="p-3"
                  href="https://www.instagram.com/raihannfal"
                  target="_blank"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white h-[1.375rem] w-[1.375rem]"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
              <div className="h-10 w-10 bg-glass bg-opacity-30 hover:bg-opacity-20 backdrop-blur-md bg-blend-multiply border-l-1 border-t-2 border-gray-200/50 rounded-full inline-flex justify-center items-center">
                <a
                  className="p-3"
                  href="https://www.behance.net/raihan-naufal"
                  target="_blank"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white h-[1.375rem] w-[1.375rem]"
                  >
                    <title>Behance</title>
                    <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z" />
                  </svg>
                </a>
              </div>
              <div className="h-10 w-10 bg-glass bg-opacity-30 hover:bg-opacity-20 backdrop-blur-md bg-blend-multiply border-l-1 border-t-2 border-gray-200/50 rounded-full inline-flex justify-center items-center">
                <a
                  className="p-3"
                  href="https://github.com/raihannf"
                  target="_blank"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white h-[1.375rem] w-[1.375rem]"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="text-white text-opacity-90 font-clashDisplay font-[600] text-xl md:text-3xl xl:text-5xl [text-wrap:balance] bg-clip-text overflow-hidden tracking-wide">
            Hello, I'm Rai
          </div>
          <div className="h-[35px] md:h-[65px] lg:h-[80px] xl:h-[120px] 2xl:h-[120px] overflow-hidden mb-4 2xl:mb-8">
            <ul class="text-white font-clashDisplay font-bold text-[1.75rem]/tight md:text-[3.25rem]/tight lg:text-[4rem]/tight xl:text-[5.5rem]/tight 2xl:text-8xl/tight block animate-text-slide-3 text-left [&_li]:block overflow-hidden">
              <li>UI/UX Designer</li>
              <li>Web Developer</li>
              <li>Visual Communicator</li>
              <li aria-hidden="true">UI/UX Designer</li>
            </ul>
          </div>
          <div className="text-white text-opacity-75 font-clashGrotesk font-medium text-sm md:text-base lg:text-xl xl:text-3xl tracking-wide">
            An experienced designer based in Bandung who creates brands, polish
            product packages, and shape digital products that are as beautiful
            as they are functional.
          </div>
        </div>
      </div>

      {/* about */}
      <div
        id="about"
        className="bg-black px-8 md:px-16 lg:px-20 xl:px-28 scroll-mt-10"
      >
        <div className="text-white font-clashDisplay font-[600] tracking-wide text-xl border-l-2 border-l-gray-500/50 hover:border-l-accent ease-in-out duration-300 md:text-3xl xl:text-5xl lg:mb-8 lg:pl-4">
          About Me
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-8">
          <div className="relative bg-glassdark/25 border border-gray-500/50 hover:border-purple-400 ease-in-out duration-300 rounded-3xl lg:col-span-2 lg:row-span-1">
            <div className="absolute right-0 bottom-0 bg-[url('/public/fotoraihan.png')] h-full w-1/2 bg-cover md:h-full shrink-0 rounded-r-3xl grayscale"></div>
            <div className="absolute right-0 bottom-0 bg-gradient-to-r from-[#0F0F0F] from-10 h-full w-1/2 bg-cover md:h-full shrink-0 rounded-r-3xl"></div>
            <div className="absolute left-0 top-0 p-8 md:p-12 ">
              <h2 className="text-white text-3xl font-clashGrotesk font-[600] mb-4">
                Howdy! It's good to see ya{" "}
                <span className="inline-flex">&#x1F44B;</span>
              </h2>
              <p className="max-w-md text-lg font-clashGrotesk tracking-wide font-normal text-gray-400">
                Second-year Computer Science Education undergraduate student,
                future UI/UX designer and web developer. The skills I've
                attained from the dynamic environment define me, and I look
                forward to implementing and polishing them in any opportunity I
                receive.
              </p>
            </div>
          </div>

          <div className="bg-glassdark/25 border border-gray-500/50 rounded-3xl p-8 md:p-12 lg:col-span-1 lg:row-span-2">
            <div className="text-sm font-spaceGrotesk font-bold inline-flex items-center px-2.5 py-0.5 rounded-md bg-accent/10 text-accent border-accent/20 border mb-4">
              <svg
                className="w-4 h-4 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              RECENT PROJECTS
            </div>
            <h2 className="text-white text-3xl font-clashGrotesk font-[600] mb-4">
              Living that side hustle vibe, one pixel at a time{" "}
              <span className="inline-flex text-2xl">&#x2728;</span>
            </h2>
            <p className="text-lg font-clashGrotesk tracking-wide font-normal text-gray-400 mb-10">
              Dabbling in a mix of projects—some for clients, some just for me!
            </p>
            <a
              href="https://mokaku.upi.edu/"
              target="_blank"
              className="text-white border-l border-gray-500/50 hover:border-l-accent ease-in-out duration-300 flex flex-row mb-10"
            >
              <div className="pl-6 flex flex-col">
                <div className="text-lg font-clashGrotesk font-[600]">
                  MOKA-KU UPI 2023
                </div>
                <div className="text-md text-gray-400 font-clashGrotesk tracking-wider font-normal">
                  Web Design
                </div>
                <div className="text-sm text-gray-500 font-clashGrotesk tracking-wider font-normal">
                  2023
                </div>
              </div>
            </a>
            <Link
              to="#gallery"
              className="text-white border-l border-gray-500/50 hover:border-l-accent ease-in-out duration-300 flex flex-row mb-10"
            >
              <div className="pl-6 flex flex-col">
                <div className="text-lg font-clashGrotesk font-[600]">
                  Furnify
                </div>
                <div className="text-md text-gray-400 font-clashGrotesk tracking-wider font-normal">
                  UI Design
                </div>
                <div className="text-sm text-gray-500 font-clashGrotesk tracking-wider font-normal">
                  2023
                </div>
              </div>
            </Link>
            <Link
              to="#gallery"
              className="text-white border-l border-gray-500/50 hover:border-l-accent ease-in-out duration-300 flex flex-row mb-10"
            >
              <div className="pl-6 flex flex-col">
                <div className="text-lg font-clashGrotesk font-[600]">
                  Mobile Banking App
                </div>
                <div className="text-md text-gray-400 font-clashGrotesk tracking-wider font-normal">
                  UI Design
                </div>
                <div className="text-sm text-gray-500 font-clashGrotesk tracking-wider font-normal">
                  2023
                </div>
              </div>
            </Link>
            <Link
              to="#gallery"
              className="flex w-full h-fit lg:border rounded-full justify-between items-center xl:px-6 xl:py-4 lg:border-gray-500/75 lg:hover:border-gray-300 text-gray-500/75 hover:text-gray-300 ease-in-out duration-300 text-lg font-clashGrotesk font-medium"
            >
              See all projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="relative bg-glassdark/25 border border-gray-500/50 hover:border-purple-400 ease-in-out duration-300 rounded-3xl p-8 md:p-12 lg:col-span-1 lg:row-span-2">
            <div className="absolute right-0 top-0 bg-[url('/public/historysect.png')] h-1/3 w-full bg-cover shrink-0 rounded-t-3xl grayscale"></div>
            <div className="absolute right-0 top-0 bg-gradient-to-t from-[#0F0F0F] from-10 h-1/3 w-full shrink-0 rounded-t-3xl"></div>
            <div className="absolute left-0 bottom-0 p-8 md:p-12">
              <h2 className="text-white text-3xl font-clashGrotesk font-[600] mb-4">
                Time for a quick history
              </h2>
              <p className="text-lg font-clashGrotesk tracking-wide font-normal text-gray-400">
                Originally from West Java, I dive into the world of Computer
                Science fueled by a passion for tech and science. Over time, My
                journey has taken me through diverse projects, ranging from
                illustration and branding to social media. While my journey
                involved a fair share of trial and error, and admittedly some
                less-than-ideal design work, it was in UI/UX and Web Design that
                I discovered a genuine passion that drives my ambitions.
              </p>
            </div>
          </div>

          <div className="relative bg-glassdark/25 border border-gray-500/50 hover:border-purple-400 ease-in-out duration-300 rounded-3xl h-auto p-8 md:p-12 lg:col-span-1 lg:row-span-2">
            <div className="absolute right-0 top-0 bg-[url('/public/designApproach.png')] h-1/3 w-full bg-cover shrink-0 rounded-t-3xl grayscale"></div>
            <div className="absolute right-0 top-0 bg-gradient-to-t from-[#0F0F0F] from-10 h-1/3 w-full shrink-0 rounded-t-3xl"></div>
            <div className="absolute left-0 bottom-0 p-8 md:p-12">
              <h2 className="text-white text-3xl font-clashGrotesk font-[600] mb-4">
                Designing like a true designer
              </h2>
              <p className="text-lg font-clashGrotesk tracking-wide font-normal text-gray-400">
                Crafting a visual narrative that resonates. My design approach
                blends creativity, functionality, and a dash of innovation. I
                value clarity, empathy, and craftsmanship above all to balance
                between form and function, infusing each element with purpose
                and personality. I design with a user-centered approach, where
                each pixel, every click, swipe, and scroll is an opportunity to
                create seamless and captivating user experiences.
              </p>
            </div>
          </div>

          <div className="bg-glassdark/25 border border-gray-500/50 rounded-3xl p-8 md:p-12 md:pb-0 lg:col-span-1 lg:row-span-1 overflow-hidden">
            <div className="text-sm font-spaceGrotesk font-bold inline-flex items-center px-2.5 py-0.5 rounded-md bg-accent/10 text-accent border-accent/20 border mb-4">
              <svg
                class="w-3 h-3 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
              </svg>
              TECH TOOLS
            </div>
            <h2 className="text-white text-3xl font-clashGrotesk font-[600]">
              Tech essentials for the win{" "}
              <span className="inline-flex text-2xl">&#x1F525;</span>
            </h2>
            <div className="relative -mx-8 md:-mx-12 md:py-12">
              <div className="absolute left-0 bottom-0 h-full w-12 z-10 bg-gradient-to-r from-[#0F0F0F] from-0%" />
              <div className="absolute right-0 bottom-0 h-full w-12 z-10 bg-gradient-to-l from-[#0F0F0F] from-0%" />
              <Logo />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div
        id="gallery"
        className="px-8 py-6 md:px-16 md:py-12 lg:px-20 lg:py-14 xl:px-28 xl:py-28 -scroll-mt-16"
      >
        <div className="text-white font-clashDisplay font-[600] tracking-wide text-xl border-l-2 border-l-gray-500/50 hover:border-l-accent ease-in-out duration-300 md:text-3xl xl:text-5xl lg:mb-8 lg:pl-4">
          Works
        </div>
        <Gallery />
      </div>

      {/* Contact */}
      <div id="contact" className="bg-black px-8 md:px-16 lg:px-20 xl:px-28">
        <div className="w-full h-fit p-8 md:p-14 bg-glassdark/25 border border-gray-500/50 rounded-3xl grid grid-cols-1 lg:grid-cols-2 grid-row-2 lg:grid-row-1 gap-8">
          <div className="col-span-1">
            <div className="text-white font-clashDisplay font-[600] tracking-wide text-xl border-l-2 border-l-gray-500/50 hover:border-l-accent md:text-3xl xl:text-5xl lg:mb-8 lg:pl-4">
              Get in Touch!
            </div>
            <p className="text-lg font-clashGrotesk tracking-wide font-normal text-gray-400">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              for collaboration purposes or just a friendly hello{" "}
              <span className="inline-flex">&#x1F44B;</span>
            </p>
          </div>
          <div className=" col-span-1 border border-accent/30 bg-gradient-to-tl from-accent/20 from-10 rounded-3xl p-6 md:p-10">
            <h2 className="text-white text-3xl font-clashGrotesk font-[600] mb-4 z-10">
              Slide into my DMs{" "}
              <span className="inline-flex text-2xl">&#128236;</span>
            </h2>
            <p className="text-lg font-clashGrotesk tracking-wide font-normal text-gray-400 mb-10 z-10">
              Hit me up anytime. I'm all ears!
            </p>
            <a
              href="mailto:raihannaufal@upi.edu?subject=Hello"
              className="flex w-fit h-fit lg:border rounded-full justify-between items-center z-10 xl:px-6 xl:py-4 lg:border-gray-300/50 lg:hover:border-gray-300 text-gray-300/50 hover:text-gray-300 ease-in-out duration-300 text-lg font-clashGrotesk font-medium"
            >
              Let's chat!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="ml-6 w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
