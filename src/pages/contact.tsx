import { Mail } from "lucide-react";

export const ContactPage = () => (
  <div className="container">
    <h2 className="page-title">お問い合わせ</h2>
    <div className="contact-card">
      <Mail size={64} className="contact-icon" />
      <p>サービスに関するご質問やご相談など、お気軽にお問い合わせください。</p>
      <a
        href="https://forms.google.com/your-form-id"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn"
      >
        お問い合わせフォームへ
      </a>
      <div className="contact-info">
        <h3>その他のお問い合わせ方法</h3>
        <p>
          <strong>電話:</strong> 03-1234-5678（平日 9:00-18:00）
        </p>
        <p>
          <strong>メール:</strong> info@techsolutions.co.jp
        </p>
        <p>
          <strong>所在地:</strong> 〒100-0001 東京都千代田区千代田1-1-1
        </p>
      </div>
    </div>
  </div>
);
