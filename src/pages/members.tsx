export const MembersPage = () => {
  const members = [
    {
      name: "白石 慎一郎",
      initial: "白",
      role: "代表社員",
      bio: "大手IT企業での15年の経験を経て創業。ビジネスとテクノロジーの架け橋となることを使命としています。",
    },
    {
      name: "市川 理貴",
      initial: "市",
      role: "営業統括",
      bio: "顧客との信頼関係構築に定評あり。お客様のビジネス課題を深く理解し、最適なソリューションを提案します。",
    },
    {
      name: "舟橋 勇斗",
      initial: "舟",
      role: "セールス マネージャー",
      bio: "クラウド技術のスペシャリスト。複数の大規模プロジェクトを成功に導いた実績を持ちます。",
    },
    {
      name: "富田 和泉",
      initial: "富",
      role: "カスタマーサクセス マネージャー",
      bio: "フルスタック開発者として、フロントエンドからバックエンドまで幅広い技術に精通しています。",
    },
    {
      name: "指田 一茂",
      initial: "指",
      role: "セールス",
      bio: "アジャイル開発のエキスパート。複雑なプロジェクトを確実に成功へと導きます。",
    },
  ];

  return (
    <div className="container">
      <h2 className="page-title">チームメンバー</h2>
      <div className="members">
        {members.map((member, idx) => (
          <div key={idx} className="member-card">
            <div className="member-avatar">{member.initial}</div>
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            {/* <p>{member.bio}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
