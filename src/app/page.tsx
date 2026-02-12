import Link from "next/link";
import Image from "next/image";
import { latestVideos } from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-yellow rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand-yellow rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-brand-yellow rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce" style={{ animationDelay: '2s' }}></div>

        <div className="relative container mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-black mb-4 text-white">
              SIK7 MODE
            </h1>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/video"
              className="group relative bg-brand-yellow hover:opacity-90 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-yellow/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Latest Covers
              </span>
            </Link>

            <Link
              href="/about"
              className="group border-2 border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-gray-800/50 backdrop-blur-sm"
            >
              My Bio
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Cover Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">3 Years</div>
              <div className="text-gray-600">Drum Journey</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Infinite</div>
              <div className="text-gray-600">Passion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Videos */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Drum Covers</h2>
            <Link
              href="/video"
              className="text-brand-yellow hover:opacity-80"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestVideos.map((video) => (
              <Link key={video.id} href={`/video/${video.id}`}>
                <div className="bg-gray-100 rounded-lg overflow-hidden hover:bg-gray-200 transition-colors cursor-pointer border border-gray-200">
                  <div className="aspect-video bg-gray-300 relative">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={640}
                      height={360}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-85 transition-opacity">
                      <div className="bg-brand-yellow rounded-full w-12 h-12 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 text-gray-900">{video.title}</h3>
                    <p className="text-gray-600 text-sm">{video.artist}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* About Preview */}
      <section className="py-24 px-4 bg-brand-yellow text-gray-900 relative overflow-hidden">
        {/* Decorative Background for Bio */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-gray-900/10 text-gray-900 text-sm font-bold tracking-widest uppercase mb-6 border border-gray-900/10">
            Get to know me
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8">My Bio</h2>
          <p className="text-gray-800 mb-10 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            From basic rhythms to complex covers, every beat tells a story of growth.
            Come discover my learning journey and the musical stories that shaped my style.
          </p>
          <div className="flex justify-center">
            <Link
              href="/about"
              className="group relative inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-black/20"
            >
              Learn More
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
