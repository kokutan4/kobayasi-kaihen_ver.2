"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineChevronRight, HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
// SNS用のアイコン（任意のものを使用してください）
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa"; 
import { HamburgerMenuEffect } from "./HamburgerMenuEffect"; 

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* メニューボタン */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="md:hidden text-[#8E7D73] p-2 relative z-50"
        aria-label="メニュー"
      >
        {open ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
      </button>

      {/* オーバーレイ */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* スライドメニュー */}
      <HamburgerMenuEffect open={open}>
        <div className="flex flex-col gap-8 pt-4">
          
          {/* --- 追加: SNSリンクエリア --- */}
          <div className="flex items-center gap-6 pb-6 border-b border-[#F2EDE9]">
            <Link href="https://twitter.com" target="_blank" className="text-[#8E7D73] hover:text-[#C5A59E] transition-colors">
              <FaTwitter size={22} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-[#8E7D73] hover:text-[#C5A59E] transition-colors">
              <FaInstagram size={22} />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="text-[#8E7D73] hover:text-[#C5A59E] transition-colors">
              <FaFacebookF size={20} />
            </Link>
            <span className="text-[10px] font-bold tracking-widest text-[#B5ADA5] ml-auto uppercase">SNS accounts</span>
          </div>

          {/* メインリンク一覧 */}
          <div className="flex flex-col gap-6">
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="text-lg font-medium flex items-center justify-between text-[#5C544E] hover:text-[#C5A59E] transition-colors"
            >
              田中しほについて <HiOutlineChevronRight className="text-[#C5A59E]" />
            </Link>

            <Link
              href="/policy"
              onClick={() => setOpen(false)}
              className="text-lg font-medium flex items-center justify-between text-[#5C544E] hover:text-[#C5A59E] transition-colors"
            >
              政策 <HiOutlineChevronRight className="text-[#C5A59E]" />
            </Link>

            <Link
              href="/records"
              onClick={() => setOpen(false)}
              className="text-lg font-medium flex items-center justify-between text-[#5C544E] hover:text-[#C5A59E] transition-colors"
            >
              活動記録 <HiOutlineChevronRight className="text-[#C5A59E]" />
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-lg font-medium flex items-center justify-between text-[#5C544E] hover:text-[#C5A59E] transition-colors"
            >
              お問い合わせ <HiOutlineChevronRight className="text-[#C5A59E]" />
            </Link>
          </div>
          
        </div>
      </HamburgerMenuEffect>
    </>
  );
}