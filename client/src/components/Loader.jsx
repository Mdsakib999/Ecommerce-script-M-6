export default function Loader({ fullPage = false }) {
  const loaderContent = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative w-16 h-16">
        {/* Gradient Spinner */}
        <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-25"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin"></div>
      </div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-[var(--z-modal)]">
        {loaderContent}
      </div>
    );
  }

  return (
    <div className="p-12 flex items-center justify-center">
      {loaderContent}
    </div>
  );
}
