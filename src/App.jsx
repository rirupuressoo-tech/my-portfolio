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

        {/* 動画作品セクション */}
        <div className="video-section">
          <h2>VIDEO WORKS</h2>
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#888', marginBottom: '20px' }}>
            ※動画は外部サイト（YouTube等）でご覧いただけます。
          </p>
          
          {/* 動画1 */}
          <div className="work-card main-video" style={{ border: '2px solid #4caf50' }}>
            <div className="video-badge">PICK UP!!</div>
            <h3>【メイン】映像制作・編集 01</h3>
            <p style={{ fontWeight: 'bold', color: '#4caf50', margin: '10px 0' }}>
              イージングによる緩急を意識した、立体感のある3Dモーショングラフィックス
            </p>
            <div className="aviutl-highlight">
              <strong>使用ソフト: AviUtl</strong>
              <p>AviUtlをメインに使用し、拡張編集機能を駆使したカット編集、エフェクト加工、タイミング調整を行っています。細かいフレーム単位の調整にこだわっています。</p>
            </div>
            {/* ★ここに動画のURLを入れてね！ */}
            <a href="https://youtu.be/gfaPyiXgdI0" target="_blank" rel="noopener noreferrer" className="video-link-button">
              🎬 映像作品01を視聴する（外部サイト）
            </a>
          </div>

          {/* 動画2 */}
          <div className="work-card" style={{ marginTop: '20px' }}>
            <h3>映像制作・編集 02</h3>
            <p style={{ fontWeight: 'bold', color: '#2196f3', margin: '10px 0' }}>
              バーチャルタレント（友人）の配信切り抜き動画
            </p>
            <div className="aviutl-highlight" style={{ backgroundColor: '#1a2635' }}>
              <strong>編集時間: 約4〜5時間</strong>
              <p>テンポの良いカット、要点を押さえた見やすいテロップ配置を意識し、短時間でクオリティ高く仕上げるスピード感を重視して制作しました。</p>
            </div>
            {/* ★ここに動画のURLを入れてね！ */}
            <a href="https://youtu.be/KPZhORHq2I4" target="_blank" rel="noopener noreferrer" className="video-link-button" style={{ backgroundColor: '#2196f3' }}>
              🎬 映像作品02を視聴する（外部サイト）
            </a>
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