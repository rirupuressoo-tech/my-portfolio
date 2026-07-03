import React, { useEffect, useState, useRef } from "react";
import './App.css';
import tomatoImage from './assets/tomato.png';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/Battle_BGM.wav");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="portfolio-container">

      {/* 1. ヘッダーエリア */}
      <header className="site-header">
        <h1>CREATOR PORTFOLIO</h1>
      </header>

      {/* 2. プロフィールエリア */}
      <section className="profile-section">
        <h2>PROFILE</h2>
        <div className="profile-avatar-container">
          <img src={tomatoImage} alt="トマトのドット絵" className="pixel-art" />
        </div>
        <p>海東一也です、ゲーム開発と音楽制作を勉強中のクリエイターです。</p>
        <p>java / Python / React / ドットイラスト / DTM / ギター</p>
      </section>
     
      {/* 3. 作品一覧エリア */}
      <section className="portfolio-section">
        <h2>WORKS</h2>

        {/* 音楽作品セクション */}
        <div className="work-card">
          <h3>自作BGM (DTM)</h3>
          <button onClick={togglePlay} className="play-button">
            {isPlaying ? '⏸ 一時停止' : '▶ 曲を再生する'}
          </button>
          <p>状態: {isPlaying ? '♪ 再生中...' : '💤 停止中'}</p>
        </div>

        {/* 動画作品セクション（1本にスッキリ統合！） */}
        <div className="video-section">
          
          {/* メイン動画1 */}
          <div className="work-card main-video" style={{ marginTop: '30px', border: '2px solid #4caf50' }}>
            <div className="video-badge">PICK UP!!</div>
            <h3>【メイン】映像制作・編集 01</h3>
            <div className="video-container">
              {/* 大容量対策としてpreload="none"とplaysInlineを追加 */}
              <video 
                src="/movie01.mp4" 
                controls 
                preload="none"
                playsInline
                width="100%" 
                style={{ borderRadius: '8px', backgroundColor: '#000' }} 
              />
            </div>
            <div className="aviutl-highlight">
              <strong>使用ソフト: AviUtl</strong>
              <p>AviUtlをメインに使用し、拡張編集機能を駆使したカット編集、エフェクト加工、タイミング調整を行っています。細かいフレーム単位の調整にこだわっています。</p>
            </div>
          </div>

        </div>

      </section>

      {/* 4. フッターエリア */}
      <footer className="site-footer">
        <p>@ 2026 Creator Portfolio ALL Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;