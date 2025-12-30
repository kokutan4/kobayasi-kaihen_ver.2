"use client";
import { useEffect, useState, useRef } from "react";

interface TextEffectProps {
  text: string;
  delay?: number;
}

// 1. 下から浮き上がりながらフェードイン
export function TextEffect({ text, delay = 0 }: TextEffectProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`inline-block transition-all duration-1000 ease-out transform ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
    }`}>
      {text}
    </span>
  );
}

// TextEffectImpact を以下のように書き換えてください
export function TextEffectImpact({ text, delay = 0, isStart = true }: { text: string; delay?: number; isStart?: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // isStart が true（ロード完了）になった時だけタイマーを開始する
    if (isStart) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [delay, isStart]); // isStart を監視対象に入れる

  return (
    <span
      className={`inline-block transition-all duration-1000 ease-out transform ${
        visible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-[2] -translate-y-10"
      }`}
    >
      {text}
    </span>
  );
}

// 3. テキスト回転・拡大エフェクト
export function TextEffectRotate({ text, delay = 0 }: TextEffectProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`inline-block transition-all duration-1000 ease-out transform ${
      visible
        ? "opacity-100 scale-100 translate-y-0 rotate-0"
        : "opacity-0 scale-300 translate-y-3 rotate-180"
    }`}>
      {text}
    </span>
  );
}

// 4. 左からスライドしながらフェードイン
export function TextEffectSlideLeft({ text, delay = 0, isStart = true }: { text: string; delay?: number; isStart?: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // isStart が true になってからタイマーを開始
    if (isStart) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [delay, isStart]); // isStart を監視対象に追加

  return (
    <span
      className={`inline-block transition-all duration-1000 ease-out transform ${
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-5"
      }`}
    >
      {text}
    </span>
  );
}

// 5. スクロール時に発火（IntersectionObserver）
export function TextEffectScroll({
  text,
  delay = 0,
}: TextEffectProps) {
  const [visible, setVisible] = useState(false);
  // useState ではなく useRef を使うのが正しい React の書き方です
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // 現在の要素を取得
    const target = elementRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            observer.unobserve(target); // 監視を解除（一度だけ発火）
          }
        });
      },
      { threshold: 0.2 } // 20% 見えたら発火
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <span
      // エラー箇所：波括弧 { } で囲むことで値を返さないように修正
      ref={(el) => { (elementRef as any).current = el; }}
      className={`inline-block transition-all duration-1000 ease-out transform ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5"
      }`}
    >
      {text}
    </span>
  );
}