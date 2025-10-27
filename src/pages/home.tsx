import { Rocket, HandshakeIcon, TrendingUp } from "lucide-react";

export const HomePage = () => (
  <div className="container">
    <div className="hero">
      <h1 className="hero-title">
        <div>現代の"はたらく"を活用した、</div>
        <div>新しい採用の形。</div>
      </h1>
      <p className="hero-subtitle">従来の求人に頼らず、"体験"で出会う。</p>
    </div>
    <div className="features">
      <div className="feature-card">
        <Rocket size={48} className="feature-icon" />
        <h3>革新的なソリューション</h3>
        <p>
          最新技術を活用した、ビジネスの課題を解決するソリューションを提供します。
        </p>
      </div>
      <div className="feature-card">
        <HandshakeIcon size={48} className="feature-icon" />
        <h3>確かなサポート</h3>
        <p>導入から運用まで、専門チームが手厚くサポートいたします。</p>
      </div>
      <div className="feature-card">
        <TrendingUp size={48} className="feature-icon" />
        <h3>成果にコミット</h3>
        <p>お客様のビジネス成長を第一に考え、確実な成果を追求します。</p>
      </div>
    </div>
  </div>
);
