import React, { useEffect, useState, useRef } from "react";
import './App.css';
import tomatoImage from './assets/tomato.png';
import ground01 from './assets/ground01.png';
import ground02 from './assets/ground02.png';
import ground03 from './assets/ground03.png';
import ground04 from './assets/ground04.png';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const tiles = [ground01, ground02, ground03, ground04];

  useEffect(() => {
    audioRef.current = new Audio("/Battle_BGM.wav");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
    return () => { if (audioRef.current) audioRef.current.pause(); };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); } else { audioRef.current.play(); }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="portfolio-container">
      <header className="site-header">
        <div className="tile-container">
          {tiles.map((tile, index) => (
            <img key={index} src={tile} alt={`tile-${index}`} className="header-tile" />
          ))}
        </div>
        <div className="header-overlay"></div>
        <h1>CREATOR PORTFOLIO</h1>
      </header>

      <section className="profile-section">
        <h2 className="section-title">PROFILE</h2>
        <div className="profile-avatar-container">
          <img src={tomatoImage} alt="トマトのドット絵" className="pixel-art tomato-profile" />
        </div>
        <p>海東一也です、ゲーム開発と音楽制作を勉強中のクリエイターです。</p>
        <p>java / Python / React / ドットイラスト / DTM / ギター</p>
      </section>
     
      <section className="portfolio-section">
        <h2 className="section-title">WORKS</h2>

        <div className="work-card music-card">
          <h3>自作BGM (DTM)</h3>
          <button onClick={togglePlay} className="play-button">
            {isPlaying ? '⏸ 一時停止' : '▶ 曲を再生する'}
          </button>
          <p>状態: {isPlaying ? '♪ 再生中...' : '💤 停止中'}</p>
        </div>

        <div className="video-section">
          <h2 className="section-title">VIDEO WORKS</h2>
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#888', marginBottom: '20px' }}>
            ※動画は外部サイト（YouTube等）でご覧いただけます。
          </p>
          
          <div className="work-card main-video">
            <h3>映像制作・編集 01</h3>
            <div className="aviutl-highlight">
              <span className="work-title-accent">イージングによる緩急を意識した、立体感のある3Dモーショングラフィックス</span>
              <strong>使用ソフト: AviUtl</strong>
              <p>AviUtlをメインに使用し、拡張編集機能を駆使したカット編集、エフェクト加工、タイミング調整を行っています。細かいフレーム単位の調整にこだわっています。</p>
              <a href="https://www.youtube.com/..." target="_blank" rel="noopener noreferrer" className="video-link-button">🎬 映像作品01を視聴する（外部サイト）</a>
            </div>
          </div>

          <div className="work-card" style={{ marginTop: '20px' }}>
            <h3>映像制作・編集 02</h3>
            <div className="aviutl-highlight" style={{ backgroundColor: '#1a2635' }}>
              <span className="work-title-accent" style={{ color: '#2196f3' }}>バーチャルタレント（友人）の配信切り抜き動画</span>
              <strong>編集時間: 約4〜5時間</strong>
              <p>テンポの良いカット、要点を押さえた見やすいテロップ配置を意識し、短時間でクオリティ高く仕上げるスピード感を重視して制作しました。</p>
              <a href="https://www.youtube.com/..." target="_blank" rel="noopener noreferrer" className="video-link-button" style={{ backgroundColor: '#2196f3' }}>🎬 映像作品02を視聴する（外部サイト）</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>@ 2026 Creator Portfolio ALL Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;