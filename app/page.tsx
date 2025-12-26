"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineChevronRight,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineMail
} from 'react-icons/hi';

import HamburgerMenu from './components/HambergerMenu';
import LoadingScreen from './components/LoadingScreen';

const profile = {
  name: "田中 しほ",
  role: "京都府議会議員",
  introduction: "小学校1年からサッカーをはじめ、20歳まで本気でサッカーをしていました。スポーツを通じて学んだ「粘り強さ」と「チームワーク」を胸に、地域の皆様の声に寄り添い、より良い京都の未来を切り拓くために活動しています。",
  concept: "未来へのキックオフ — 市民のために働きます"
};

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 演出として1.2秒の待機時間を設定
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ローディング画面 */}
      {loading && <LoadingScreen />}
      
      <div
        className={`min-h-screen bg-[#FDFBF9] text-[#5C544E] font-sans selection:bg-[#F3E5E3]
        transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}
      >

        {/* --- 1. ヘッダー --- */}
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-[#F2EDE9]">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* ロゴ */}
            <Link
              href="/"
              className="font-serif tracking-widest text-[#8E7D73] font-semibold leading-tight"
            >
              <span className="block text-sm md:text-base">京都府議会議員</span>
              <span className="block leading-tight">
                <span className="text-xl md:text-2xl">{profile.name}</span>
                <span className="text-sm md:text-base ml-2 font-normal">公式サイト</span>
              </span>
            </Link>

            {/* PC用ナビ */}
            <div className="hidden md:flex flex-col items-end gap-2">
              <div className="flex items-center gap-4 text-[#8E7D73]">
                {/* SNSアイコン（リンク先は適宜修正してください） */}
                <Link href="#" className="hover:text-[#C5A59E] transition-colors">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2h3.308l-7.227 8.26L22 22h-6.843l-4.42-5.803L5.6 22H2.29l7.73-8.835L2 2h6.976l4.028 5.332L18.244 2zm-1.16 18.17h1.833L7.084 3.69H5.117l11.967 16.48z" /></svg>
                </Link>
                <Link href="#" className="hover:text-[#C5A59E] transition-colors">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" /></svg>
                </Link>
              </div>
              <nav className="flex items-center gap-8 text-xs font-bold tracking-widest">
                <Link href="/profile" className="hover:text-[#C5A59E] transition-colors">田中しほについて</Link>
                <Link href="/policy" className="hover:text-[#C5A59E] transition-colors">政策</Link>
                <Link href="/records" className="hover:text-[#C5A59E] transition-colors">活動報告</Link>
                <Link href="/contact" className="hover:text-[#C5A59E] transition-colors">お問い合わせ</Link>
              </nav>
            </div>

            {/* スマホ用メニュー */}
            <div className="md:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </header>

        <main className="pt-20">
          {/* --- 2. ヒーローセクション --- */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center overflow-hidden bg-[#8E7D73]">
      {/* 1. 背景画像エリア（装飾用: aria-hidden） */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/img/giin.png"
          alt=""
          fill
          /* object-[横の位置_縦の位置] 
            横：100% (右端) 
            縦：20% (上から20%の位置を中心に持ってくる＝全体的に画像が下に下がる)
          */
          className="object-cover object-[100%_20%]" 
          priority
        />
      </div>

      {/* 2. 背景グラデーション・オーバーレイ（文字可読性向上） */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

      {/* 3. コンテンツ（左テキスト / 右写真） */}
      <div className="container mx-auto px-6 relative z-20 w-full">
        <div className="flex flex-col md:flex-row items-center">
          {/* 左：テキスト（幅 60%） */}
          <div className="w-full md:w-3/5 text-left text-white">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              京都の課題に、<br className="md:hidden" />全力で走り抜く。
            </h2>
          </div>
        </div>
      </div>
    </section>



          {/* --- 3. パンくずリスト --- */}
          <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-2 text-[10px] font-bold tracking-wider text-[#B5ADA5]">
            <Link href="/" className="hover:text-[#8E7D73] flex items-center gap-1">
              <HiOutlineHome className="mb-0.5" /> ホーム
            </Link>
            <HiOutlineChevronRight size={8} />
            <span className="text-[#8E7D73]">トップページ</span>
          </nav>

          {/* --- 4. 自己紹介セクション --- */}
          <div className="max-w-5xl mx-auto px-6">
            <section className="py-20 grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/5] bg-[#EBE7E0] rounded-[2.5rem] overflow-hidden shadow-sm group">
                <Image
                  src="/images/giin.jpg" 
                  alt={profile.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#C5A59E] mb-6 flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#C5A59E]"></span> 自己紹介
                </h3>
                <h4 className="text-3xl font-serif mb-6 text-[#4A443F]">{profile.name}</h4>
                <p className="text-base leading-[2] text-[#7A7167] mb-8 font-light">
                  {profile.introduction}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#F2EDE9] rounded-2xl">
                    <p className="text-[10px] font-bold text-[#B5ADA5] uppercase tracking-widest mb-1">役職</p>
                    <p className="text-sm font-bold text-[#5C544E]">{profile.role}</p>
                  </div>
                  <div className="p-5 bg-white border border-[#F2EDE9] rounded-2xl">
                    <p className="text-[10px] font-bold text-[#B5ADA5] uppercase tracking-widest mb-1">主な活動</p>
                    <p className="text-sm font-bold text-[#5C544E]">京都府全域</p>
                  </div>
                </div>
              </div>
            </section>

            {/* クイックリンク */}
            <section className="py-20 border-t border-[#F2EDE9]">
              <div className="grid sm:grid-cols-2 gap-6">
                <Link href="/records" className="group p-8 bg-white border border-[#F2EDE9] rounded-[2rem] hover:shadow-md transition-all">
                  <HiOutlinePhotograph size={32} className="text-[#C5A59E] mb-6" />
                  <h5 className="text-xl font-bold mb-2 text-[#4A443F]">活動記録</h5>
                  <p className="text-sm text-[#B5ADA5] leading-relaxed">日々の議会活動や地域での取り組みをご報告します。</p>
                  <span className="inline-block mt-4 text-[#C5A59E] text-xs font-bold border-b border-[#C5A59E] pb-0.5">一覧を見る</span>
                </Link>

                <Link href="/contact" className="group p-8 bg-white border border-[#F2EDE9] rounded-[2rem] hover:shadow-md transition-all">
                  <HiOutlineMail size={32} className="text-[#C5A59E] mb-6" />
                  <h5 className="text-xl font-bold mb-2 text-[#4A443F]">お問い合わせ</h5>
                  <p className="text-sm text-[#B5ADA5] leading-relaxed">ご意見・ご要望、市政・府政へのご相談はこちらから。</p>
                  <span className="inline-block mt-4 text-[#C5A59E] text-xs font-bold border-b border-[#C5A59E] pb-0.5">フォームを開く</span>
                </Link>
              </div>
            </section>
          </div>
        </main>

        {/* --- 5. フッター --- */}
        <footer className="bg-[#F2EDE9] py-16 px-6 text-center">
          <p className="font-serif text-xl text-[#8E7D73] mb-8 tracking-[0.2em]">{profile.name} 公式サイト</p>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold tracking-widest text-[#B5ADA5] mb-8">
            <Link href="/" className="hover:text-[#8E7D73]">ホーム</Link>
            <Link href="/profile" className="hover:text-[#8E7D73]">プロフィール</Link>
            <Link href="/records" className="hover:text-[#8E7D73]">活動記録</Link>
            <Link href="/contact" className="hover:text-[#8E7D73]">お問い合わせ</Link>
          </nav>
          <p className="text-[10px] text-[#CDC7BD] tracking-[0.2em]">© {new Date().getFullYear()} SHIHO TANAKA. ALL RIGHTS RESERVED.</p>
        </footer>

      </div>
    </>
  );
}