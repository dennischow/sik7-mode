import Link from "next/link";
import Image from "next/image";
import { latestVideos } from "@/data/content";

export default function VideoPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-8 text-center">Drum Covers</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestVideos.map((video) => (
                        <Link
                            key={video.id}
                            href={`/video/${video.id}`}
                            className="block bg-white rounded-lg overflow-hidden hover:bg-gray-100 transition-colors border border-gray-200 cursor-pointer"
                        >
                            <div className="aspect-video bg-gray-200 relative">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    width={640}
                                    height={360}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                    <div className="text-center">
                                        <div className="bg-brand-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                                            <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-white">Click to Watch</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                                <p className="text-gray-600 mb-2">{video.artist}</p>
                                <p className="text-gray-500 text-sm mb-4">{video.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">{video.category}</span>
                                    <span className="text-xs text-gray-500">{video.date}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
