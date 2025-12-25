"use client";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#FDFBF9] z-[9999]">
      
      {/* スピナー */}
      <div className="animate-spin rounded-full h-14 w-14 border-4 border-[#E0D8D2] border-t-[#8E7D73] mb-4"></div>
      
      {/* ロード中テキスト */}
      <p className="text-[#8E7D73] text-sm tracking-widest font-semibold">
        ロード中…
      </p>

    </div>
  );
}