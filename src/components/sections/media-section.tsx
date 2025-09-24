export function MediaSection() {
  const videos = [
    { id: "czPTXTVVKGY", title: "Breakthrough Junior Challenge Submission" },
    { id: "ZEBR_QwjsTA", title: "Project Demo" },
    { id: "2HrAoXpXVOg", title: "Intial Projects 😭" },
  ];

  return (
    <section id="media" className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Media</h2>
        </div>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col items-center">
              <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`YouTube video player for ${video.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-4 text-center font-medium">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
