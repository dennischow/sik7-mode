import Link from "next/link";
import { latestVideos } from "@/data/content";

// For static export, generate all possible params
export async function generateStaticParams() {
  return latestVideos.map((video) => ({
    id: video.id,
  }));
}

export default async function VideoDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const video = latestVideos.find(v => v.id === id);

  if (!video) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Video Not Found</h1>
          <p className="text-gray-600">Please check if video ID is correct</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link
              href="/video"
              className="text-brand-yellow hover:opacity-80 mb-4 inline-block font-medium"
            >
              ← Back to Video List
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Video and Main Info */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-8">
                {/* YouTube Embed */}
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>

                <div className="p-8">
                  <h1 className="text-3xl md:text-4xl font-black mb-2 text-gray-900">{video.title}</h1>
                  <p className="text-xl text-gray-600 mb-6">{video.artist}</p>

                  <div className="prose prose-gray max-w-none">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">About This Cover</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{video.description}</p>
                  </div>
                </div>
              </div>

              {/* Practice Tips Section */}
              <div className="bg-brand-yellow/5 rounded-2xl p-8 border border-brand-yellow/10 mb-8 lg:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-brand-yellow rounded-lg p-2">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-6.364l-.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">Practice Tips</h2>
                </div>
                <ul className="space-y-4">
                  {video.tips.map((tip, index) => (
                    <li key={index} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-brand-yellow text-gray-900 rounded-full flex items-center justify-center text-xs font-bold mt-1">
                        {index + 1}
                      </span>
                      <p className="text-gray-800 font-medium">{tip}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Sidebar Stats & Gear */}
            <div className="space-y-8">
              {/* Info Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="space-y-6">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold block mb-2">Difficulty</label>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-6 h-6 ${i < video.difficulty ? 'text-brand-yellow' : 'text-gray-200'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold block mb-1">Category</label>
                    <p className="text-lg font-bold text-gray-900 capitalize">{video.category}</p>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold block mb-1">Release Date</label>
                    <p className="text-lg font-bold text-gray-900">{video.date}</p>
                  </div>
                </div>
              </div>

              {/* Gear Card */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white overflow-hidden relative">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6 text-brand-yellow">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <h2 className="font-black uppercase tracking-wider text-sm">Gear Used</h2>
                  </div>
                  <ul className="space-y-4">
                    {video.gear.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></div>
                        <span className="text-gray-300 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Decorative background element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl"></div>
              </div>

              {/* Share Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold mb-4 text-gray-900">Share Performance</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://youtu.be/${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 p-3 rounded-xl transition-colors font-bold text-sm"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://youtu.be/${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-sky-50 text-sky-500 hover:bg-sky-100 p-3 rounded-xl transition-colors font-bold text-sm"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
