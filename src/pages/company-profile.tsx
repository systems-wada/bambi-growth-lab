import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

export const CompanyOverview = () => {
  return (
    <div className="container">
      <h2 className="page-title">会社概要</h2>

      {/* 会社情報カード */}
      <div className="overview-card">
        <div className="overview-header">
          <Building2 size={48} className="overview-icon" />
          <h3>合同会社Bambi Growth Lab</h3>
        </div>

        <div className="info-grid">
          <div className="info-item">
            <div className="info-label">
              <Building2 size={20} />
              <span>会社名</span>
            </div>
            <div className="info-value">合同会社Bambi Growth Lab</div>
          </div>

          <div className="info-item">
            <div className="info-label">
              <Calendar size={20} />
              <span>設立</span>
            </div>
            <div className="info-value">2025年10月16日</div>
          </div>

          <div className="info-item">
            <div className="info-label">
              <MapPin size={20} />
              <span>本社所在地</span>
            </div>
            <div className="info-value">
              〒104-0061
              <br />
              東京都中央区銀座1-12-4
              <br />
              N&E BLD 6F
            </div>
          </div>

          <div className="info-item">
            <div className="info-label">
              <Mail size={20} />
              <span>メールアドレス</span>
            </div>
            <div className="info-value">info@techsolutions.co.jp</div>
          </div>

          <div className="info-item">
            <div className="info-label">
              <Building2 size={20} />
              <span>代表者</span>
            </div>
            <div className="info-value">代表社員　白石 慎一郎</div>
          </div>

          <div className="info-item full-width">
            <div className="info-label">
              <Award size={20} />
              <span>事業内容</span>
            </div>
            <div className="info-value">
              <ul>
                <li>採用支援</li>
                <li>スポットワークの活用コンサルティング</li>
                <li>採用におけるブランディング支援</li>
                <li>飲食店のブランディング支援</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 沿革セクション */}
      {/* <div className="history-section">
        <h3 className="section-title">沿革</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2018年4月</div>
            <div className="timeline-content">
              <h4>会社設立</h4>
              <p>東京都千代田区にTechSolutions株式会社を設立</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2019年6月</div>
            <div className="timeline-content">
              <h4>クラウド事業開始</h4>
              <p>クラウドソリューション事業を本格的に開始</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2020年10月</div>
            <div className="timeline-content">
              <h4>大阪支社開設</h4>
              <p>西日本エリアの拠点として大阪支社を開設</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2021年3月</div>
            <div className="timeline-content">
              <h4>従業員数50名突破</h4>
              <p>事業拡大により従業員数が50名を超える</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2022年7月</div>
            <div className="timeline-content">
              <h4>AI事業部設立</h4>
              <p>データ分析・AI活用に特化した事業部を新設</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2023年12月</div>
            <div className="timeline-content">
              <h4>累計取引社数500社達成</h4>
              <p>多くの企業様にサービスをご利用いただく</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2024年4月</div>
            <div className="timeline-content">
              <h4>名古屋オフィス開設</h4>
              <p>中部エリアの拠点として名古屋オフィスを開設</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2025年1月</div>
            <div className="timeline-content">
              <h4>従業員数120名突破</h4>
              <p>継続的な事業成長により従業員数が120名を超える</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* アクセスセクション */}
      {/* <div className="access-section">
        <h3 className="section-title">アクセス</h3>
        <div className="access-card">
          <h4>本社</h4>
          <p className="address">
            <MapPin size={18} />
            〒100-0001 東京都千代田区千代田1-1-1 テックビル10F
          </p>
          <p className="access-info">
            <strong>最寄り駅:</strong>
            <br />
            東京メトロ千代田線「千代田駅」徒歩3分
            <br />
            JR山手線「東京駅」徒歩8分
          </p>
        </div>
      </div> */}

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .page-title {
          color: #667eea;
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }

        .overview-card {
          background: white;
          padding: 3rem;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 3rem;
        }

        .overview-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 2px solid #667eea;
        }

        .overview-icon {
          color: #667eea;
        }

        .overview-header h3 {
          color: #667eea;
          font-size: 1.8rem;
          margin: 0;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .info-item.full-width {
          grid-column: 1 / -1;
        }

        .info-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #667eea;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .info-value {
          color: #333;
          line-height: 1.6;
          padding-left: 1.75rem;
        }

        .info-value ul {
          list-style: none;
          padding: 0;
        }

        .info-value ul li {
          padding: 0.3rem 0;
          position: relative;
          padding-left: 1.2rem;
        }

        .info-value ul li:before {
          content: "▸";
          color: #667eea;
          position: absolute;
          left: 0;
        }

        .history-section,
        .access-section {
          background: white;
          padding: 3rem;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 3rem;
        }

        .section-title {
          color: #667eea;
          font-size: 1.8rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #667eea;
        }

        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
        }

        .timeline-item {
          position: relative;
          padding-bottom: 2rem;
          padding-left: 2rem;
        }

        .timeline-item:before {
          content: "";
          position: absolute;
          left: -0.5rem;
          top: 0.5rem;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #667eea;
          border: 3px solid white;
          box-shadow: 0 0 0 2px #667eea;
        }

        .timeline-date {
          color: #667eea;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .timeline-content h4 {
          color: #333;
          margin-bottom: 0.3rem;
          font-size: 1.1rem;
        }

        .timeline-content p {
          color: #666;
          line-height: 1.6;
        }

        .access-card {
          padding: 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          border-radius: 8px;
        }

        .access-card h4 {
          color: #667eea;
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .address {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: #333;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .access-info {
          color: #555;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .container {
            padding: 2rem 1rem;
          }

          .page-title {
            font-size: 2rem;
          }

          .overview-card,
          .history-section,
          .access-section {
            padding: 2rem 1.5rem;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .timeline {
            padding-left: 1.5rem;
          }

          .timeline-item {
            padding-left: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};
