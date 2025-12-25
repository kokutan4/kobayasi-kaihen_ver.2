"use client";

import React, { useState, useEffect } from 'react'; // ★ useEffect を追加
import Link from "next/link";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineChevronRight,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlinePhotograph,
  HiOutlineMail
} from 'react-icons/hi';

import HamburgerMenu from './components/HambergerMenu'; // ハンバーガーメニュー
import LoadingScreen from './components/LoadingScreen'; // ★ ローディング画面コンポーネント

const profile = {
  name: "田中　しほ",
  role: "京都府議会議員",
  concept: "中条俊介　過去に浸るホームページ",
  introduction: "小学校1年からサッカーをはじめ、20歳まで本気でサッカーをしていました。過去の記録に浸りたい気分　なので、仕方ないから見てやるよって方は、見ていただける、と有難いです。",
};

const records = {
title : "活動記録",


};

export default function HomePage() {

  const [isOpen, setIsOpen] = useState(false);

  //ローディング状態を管理
  const [loading, setLoading] = useState(true);
  //ページ読み込み後にローディングを解除

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2秒後に非表示
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ★ 追加③：ローディング画面を最前面に表示 */}
      {loading && <LoadingScreen />}
      {/* ★ 追加④：ローディング解除後にフェードイン */}

      
      <div
        className={`min-h-screen bg-[#FDFBF9] text-[#5C544E] font-sans selection:bg-[#F3E5E3]
        transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}
      >

        {/* --- 1. ヘッダー & ハンバーガーメニュー --- */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-[#F2EDE9]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* ロゴ */}
          <Link
            href="/"
            className="font-serif tracking-widest text-[#8E7D73] font-semibold leading-tight"
          >
            <span className="block text-base md:text-lg">京都府議会議員</span>
            <span className="block leading-tight">
              <span className="text-2xl md:text-3xl">田中 しほ</span>
              <span className="text-lg md:text-xl ml-2">公式サイト</span>
            </span>
          </Link>

          {/* PC用ナビ（SNS + メニュー） */}
          <div className="hidden md:flex flex-col items-end gap-3">
          {/* SNSリンク（上段） */}
          <div className="flex items-center gap-4 text-[#8E7D73]">

            {/* X（旧Twitter） */}
            <Link href="https://twitter.com" className="hover:text-[#C5A59E] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2h3.308l-7.227 8.26L22 22h-6.843l-4.42-5.803L5.6 22H2.29l7.73-8.835L2 2h6.976l4.028 5.332L18.244 2zm-1.16 18.17h1.833L7.084 3.69H5.117l11.967 16.48z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link href="https://www.instagram.com" className="hover:text-[#C5A59E] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
            </Link>

            {/* Facebook */}
            <Link href="https://facebook.com" className="hover:text-[#C5A59E] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" />
              </svg>
            </Link>

          </div>

            {/* メインナビ */}
            <nav className="flex items-center gap-10 text-sm font-bold tracking-widest">
              <Link href="/profile" className="hover:text-[#C5A59E] transition-colors">田中しほについて</Link>
              <Link href="/policy" className="hover:text-[#C5A59E] transition-colors">政策</Link>
              <Link href="/records" className="hover:text-[#C5A59E] transition-colors">活動報告</Link>
              <Link href="/contact" className="hover:text-[#C5A59E] transition-colors">お問い合わせ</Link>
            </nav>
          </div>

          {/* スマホ用ハンバーガーメニュー（正しい位置） */}
          <div className="md:hidden">
            <HamburgerMenu />
          </div>

        </div>
      </header>


        {/* --- 2. ヒーローセクション --- */}
        <main className="pt-20">
          <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[#F3E5E3]/20 -z-10" />
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#E9E4E0] rounded-full blur-3xl opacity-50" />

            <div className="text-center px-6">
              <p className="text-[#C5A59E] font-bold tracking-[0.2em] text-sm mb-6 animate-fade-in italic"></p>
              <h2 className="text-3xl md:text-5xl font-serif text-[#4A443F] leading-[1.4] mb-10">
                {profile.concept}
              </h2>
              <Link href="/contact" className="inline-block px-10 py-4 bg-[#8E7D73] text-white rounded-full text-sm font-bold tracking-widest hover:bg-[#7A6A61] transition-all shadow-lg shadow-[#8E7D73]/20">
                メッセージを送る
              </Link>
            </div>
          </section>

          {/* --- 3. パンくずリスト --- */}
          <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-2 text-[12px] font-bold tracking-wider text-[#B5ADA5]">
            <Link href="/" className="hover:text-[#8E7D73] flex items-center gap-1">
              <HiOutlineHome className="mb-0.5" /> ホーム
            </Link>
            <HiOutlineChevronRight size={10} />
            <span className="text-[#8E7D73]">ポートフォリオ</span>
          </nav>

          {/* --- 4. コンテンツセクション --- */}
          <div className="max-w-5xl mx-auto px-6">

            {/* 自己紹介セクション */}
            <section id="about" className="py-20 grid md:grid-cols-2 gap-12 items-center">

              {/* プロフィール画像 */}
              <div className="relative aspect-[4/5] bg-[#EBE7E0] rounded-[3rem] overflow-hidden shadow-sm group">
                <img
                  src="/img/nakajyo.png"
                  alt={`${profile.name}のプロフィール写真`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#8E7D73]/5 pointer-events-none" />
              </div>

              {/* テキスト */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#C5A59E] mb-6 flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#C5A59E]"></span> 自己紹介
                </h3>
                <h4 className="text-3xl font-serif mb-6 text-[#4A443F]">{profile.name}</h4>
                <p className="text-lg leading-[1.8] text-[#7A7167] mb-8 font-light italic">
                  {profile.introduction}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white border border-[#F2EDE9] rounded-2xl shadow-sm">
                    <p className="text-[10px] font-bold text-[#B5ADA5] uppercase tracking-widest mb-1">役割</p>
                    <p className="text-sm font-bold text-[#5C544E]">{profile.role}</p>
                  </div>
                  <div className="p-5 bg-white border border-[#F2EDE9] rounded-2xl shadow-sm">
                    <p className="text-[10px] font-bold text-[#B5ADA5] uppercase tracking-widest mb-1">活動拠点</p>
                    <p className="text-sm font-bold text-[#5C544E]">関西圏</p>
                  </div>
                </div>
              </div>
            </section>

            {/* クイックリンク */}
            <section className="py-20 border-t border-[#F2EDE9]">
              <div className="grid sm:grid-cols-2 gap-6">
                <Link href="/records" className="group p-8 bg-white border border-[#F2EDE9] rounded-[2rem] hover:shadow-md transition-all">
                  <HiOutlinePhotograph size={32} className="text-[#C5A59E] mb-6" />
                  <h5 className="text-xl font-bold mb-2 text-[#4A443F]">活動記録を見る</h5>
                  <p className="text-sm text-[#B5ADA5] leading-relaxed">これまでの制作実績や、日々の活動をまとめています。</p>
                  <span className="inline-block mt-4 text-[#C5A59E] text-xs font-bold border-b border-[#C5A59E] pb-0.5">詳しく見る</span>
                </Link>

                <Link href="/contact" className="group p-8 bg-white border border-[#F2EDE9] rounded-[2rem] hover:shadow-md transition-all">
                  <HiOutlineMail size={32} className="text-[#C5A59E] mb-6" />
                  <h5 className="text-xl font-bold mb-2 text-[#4A443F]">お問い合わせ</h5>
                  <p className="text-sm text-[#B5ADA5] leading-relaxed">お仕事のご依頼やご相談、メッセージはこちらからどうぞ。</p>
                  <span className="inline-block mt-4 text-[#C5A59E] text-xs font-bold border-b border-[#C5A59E] pb-0.5">フォームを開く</span>
                </Link>
              </div>
            </section>
          </div>
        </main>

        {/* --- 5. フッター --- */}
        <footer className="bg-[#F2EDE9] py-16 px-6 text-center">
          <p className="font-serif text-xl text-[#8E7D73] mb-8 tracking-[0.2em]">中条 俊介 ポートフォリオ</p>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold tracking-widest text-[#B5ADA5] mb-8">
            <Link href="/" className="hover:text-[#8E7D73]">ホーム</Link>
            <Link href="/records" className="hover:text-[#8E7D73]">活動記録</Link>
            <Link href="/contact" className="hover:text-[#8E7D73]">お問い合わせ</Link>
            <Link href="/admin" className="hover:text-[#8E7D73]">管理者用</Link>
          </nav>
          <p className="text-[10px] text-[#CDC7BD] tracking-[0.2em]">© {new Date().getFullYear()} SHUNSUKE NAKAJO. ALL RIGHTS RESERVED.</p>
        </footer>

      </div>
    </>
  );
}