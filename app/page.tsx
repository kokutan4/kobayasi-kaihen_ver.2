"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlinePhotograph,
  HiOutlineMail
} from 'react-icons/hi';

import HamburgerMenu from './components/HambergerMenu';
import LoadingScreen from './components/LoadingScreen';

// 修正されたエフェクトコンポーネントをインポート
import { 
  TextEffectImpact, 
  TextEffectSlideLeft, 
  TextEffectScroll 
} from './components/TextEffect'; 

const profile = {
  name: "田中 しほ",
  role: "京都府議会議員",
  introduction: "小学校1年からサッカーをはじめ、20歳まで本気でサッカーをしていました。スポーツを通じて学んだ「粘り強さ」と「チームワーク」を胸に、地域の皆様の声に寄り添い、より良い京都の未来を切り拓くために活動しています。",
  concept: "未来へのキックオフ — 市民のために働きます"
};

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      
      <div className={`min-h-screen bg-[#FDFBF9] text-[#5C544E] font-sans selection:bg-[#F3E5E3] transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>

        {/* --- 1. ヘッダー --- */}
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-[#F2EDE9]">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="font-serif tracking-widest text-[#8E7D73] font-semibold leading-tight">
              <span className="block text-sm md:text-base">京都府議会議員</span>
              <span className="block leading-tight">
                <span className="text-xl md:text-2xl">{profile.name}</span>
                <span className="text-sm md:text-base ml-2 font-normal">公式サイト</span>
              </span>
            </Link>

            <div className="hidden md:flex flex-col items-end gap-2">
              <div className="flex items-center gap-4 text-[#8E7D73]">
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
            <div className="md:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </header>

        <main className="pt-20">
          {/* --- 2. ヒーローセクション --- */}
          <section className="relative h-[60vh] md:h-[80vh] flex items-center overflow-hidden bg-[#8E7D73]">
            <div className="absolute inset-0 z-0 max-w-7xl mx-auto w-full">
              <Image
                src="/img/giin.png"
                alt=""
                fill
                className="object-cover object-right md:object-[100%_20%]" 
                priority
              />
            </div>
            <div className="container mx-auto px-6 relative z-20 w-full max-w-7xl h-full flex items-end pb-16">
              <div className="w-full text-left text-white transform -rotate-2 select-none">
                <h2 className="whitespace-nowrap text-[10vw] md:text-8xl lg:text-[110px] font-serif font-bold leading-[1.1] drop-shadow-2xl transform skew-x-[-10deg]">
                  <span className="block mb-2">
                    <TextEffectImpact text="京都の課題に、" delay={300} isStart={!loading} />
                  </span>
                  <span className="block ml-[5vw] md:ml-12">
                    <TextEffectImpact text="全力で走り抜く。" delay={800} isStart={!loading} />
                  </span>
                </h2>
              </div>
            </div>
          </section>

          {/* --- 3. メッセージセクション --- */}
          <section className="bg-[#f9f8f6] py-24 md:py-40 overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
              <span className="text-[20vw] font-serif font-black text-[#C5A59E]/5 leading-none">MESSAGE</span>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
              <div className="text-center md:text-left">
                <div className="mb-12 flex flex-col items-center md:items-start">
                  <h3 className="text-2xl font-black tracking-[0.4em] text-[#C5A59E] mb-6 flex items-center gap-4 relative">
                    <span className="w-8 h-[1px] bg-[#C5A59E]"></span>
                    <span className="relative inline-block">
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs text-[#C5A59E]/70 whitespace-nowrap">メッセージ</span>
                      {/* isStartを渡してLoading後に発火させる */}
                      <TextEffectSlideLeft text="MESSAGE" delay={200} isStart={!loading} />
                    </span>
                    <span className="w-8 h-[1px] bg-[#C5A59E] md:hidden"></span>
                  </h3>
                  <h4 className="whitespace-nowrap text-[7.5vw] md:text-6xl lg:text-7xl font-serif font-bold text-[#4A443F] leading-tight transform skew-x-[-6deg] origin-left">
                    {/* スクロールで見えたら表示するように差し替え */}
                    <span className="block">
                      <TextEffectScroll text="「守るべき」を守り、" delay={100} />
                    </span>
                    <span className="block md:ml-12">
                      <TextEffectScroll text="「変えるべき」を変える。" delay={400} />
                    </span>
                  </h4>
                </div>

                <div className="max-w-2xl md:ml-12 space-y-8 text-[#5C544E] leading-[2.2]">
                  <p className="text-xl md:text-2xl font-serif italic text-[#4A443F] border-b border-[#C5A59E]/30 pb-4 inline-block">
                    <TextEffectScroll text="「伝える」立場から、「解決する」立場へ。" delay={600} />
                  </p>
                  <p className="text-base md:text-lg text-[#7A7167] font-medium">
                    <TextEffectScroll text={profile.introduction} delay={800} />
                  </p>
                </div>

                <div className="mt-20 flex flex-col items-end border-t border-[#EBE7E0] pt-10">
                  <div className="text-right">
                    <p className="text-xs text-[#B5ADA5] tracking-[0.3em] uppercase mb-2">Representative</p>
                    <p className="text-sm font-bold text-[#7A7167] mb-2">{profile.role}</p>
                    <span className="text-6xl md:text-8xl font-serif font-bold text-[#4A443F] tracking-tighter">
                      <TextEffectScroll text={profile.name} delay={1000} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- 3. プロフィール --- */}
          <div className="max-w-5xl mx-auto px-6">
            <section className="py-20 border-t border-[#F2EDE9]">
              {/* 見出し */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-wider">
                  PROFILE
                </h2>
                <p className="mt-2 text-[#E95295] font-semibold">プロフィール</p>
              </div>

              {/* flex-col-reverse を使うことで、スマホ時は写真が上に、テキストが下になります */}
              <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12">
                
                {/* 左側：経歴エリア */}
                <div className="w-full md:w-3/5 text-slate-700 leading-relaxed">
                  <h3 className="text-2xl font-bold mb-1">〇〇 〇〇</h3>
                  <p className="text-sm text-gray-500 mb-6 font-medium">MARUMARU MARUKO</p>
                  
                  <p className="mb-8 italic border-l-4 border-[#E95295] pl-4 text-lg font-medium">
                    「この街の声を、真っ直ぐに届けたい。」
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-[#E95295] mb-2 flex items-center">
                        <span className="w-2 h-2 bg-[#E95295] rounded-full mr-2"></span>
                        経歴
                      </h4>
                      <ul className="list-none space-y-2 text-sm md:text-base">
                        <li>19XX年 〇〇市生まれ</li>
                        <li>〇〇大学 〇〇学部 卒業</li>
                        <li>民間企業にて10年間勤務（広報・マーケティング担当）</li>
                        <li>現在は二児の母として、地域のボランティア活動に従事</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#E95295] mb-2 flex items-center">
                        <span className="w-2 h-2 bg-[#E95295] rounded-full mr-2"></span>
                        趣味・特技
                      </h4>
                      <p className="text-sm md:text-base">
                        家庭菜園、読書（歴史小説）、地域の清掃活動
                      </p>
                    </div>
                    
                    <div className="pt-4">
                      <button className="bg-[#E95295] text-white px-8 py-3 rounded-full hover:bg-[#d44685] transition-colors duration-300 shadow-md">
                        さらに詳しい歩みを見る
                      </button>
                    </div>
                  </div>
                </div>

                {/* 右側：画像エリア */}
                <div className="w-full md:w-2/5">
                  <div className="relative">
                    {/* 背景の装飾：写真の背面にずらして配置 */}
                    <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#E95295] rounded-lg -z-10"></div>
                    <img
                      src="img/prof.png" 
                      alt="〇〇 〇〇 プロフィール写真"
                      className="w-full h-auto rounded-lg shadow-xl object-cover"
                    />
                  </div>
                </div>

              </div>
            </section>
          </div>

          {/* --- 4. クイックリンク --- */}
          <div className="max-w-5xl mx-auto px-6">
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