export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--themeColor_1)] p-4">
      <div className="w-64 flex flex-col items-center gap-4">
        {/* Progress Bar Wrapper */}
        <div className="w-full h-2 bg-[var(--themeColor_2)]/20 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: "98%",
              background: `linear-gradient(260deg, var(--themeColor_2), var(--themeColor_2_light))`,
            }}
          />
        </div>

        {/* Loading Text */}
        <p className="text-[var(--textColor_3)] text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}
