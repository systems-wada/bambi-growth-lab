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
    </div>
  );
};
