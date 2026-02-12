export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Bio</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">My Drumming Journey</h2>
            <p className="text-gray-600 mb-6">
              Welcome to my drumming world! I&apos;m a passionate drummer who loves creating rhythms and sharing the joy of music through drum covers.
            </p>
            <p className="text-gray-600 mb-6">
              This website documents my learning journey, from basic practice sessions to favorite song covers. I hope to connect with fellow music enthusiasts and share our passion for drumming.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600">
                If you enjoy my performances or want to exchange drumming tips, feel free to reach out and connect!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
