export const MembersPage = () => {
  const members = [
    {
      name: "山田 太郎",
      initial: "山",
      role: "代表取締役CEO",
      bio: "大手IT企業での15年の経験を経て創業。ビジネスとテクノロジーの架け橋となることを使命としています。",
    },
    {
      name: "佐藤 花子",
      initial: "佐",
      role: "CTO / 技術統括",
      bio: "クラウド技術のスペシャリスト。複数の大規模プロジェクトを成功に導いた実績を持ちます。",
    },
    {
      name: "鈴木 一郎",
      initial: "鈴",
      role: "営業部長",
      bio: "顧客との信頼関係構築に定評あり。お客様のビジネス課題を深く理解し、最適なソリューションを提案します。",
    },
    {
      name: "田中 美咲",
      initial: "田",
      role: "プロジェクトマネージャー",
      bio: "アジャイル開発のエキスパート。複雑なプロジェクトを確実に成功へと導きます。",
    },
    {
      name: "高橋 健太",
      initial: "高",
      role: "リードエンジニア",
      bio: "フルスタック開発者として、フロントエンドからバックエンドまで幅広い技術に精通しています。",
    },
    {
      name: "伊藤 真理",
      initial: "伊",
      role: "データサイエンティスト",
      bio: "データ分析とAI技術を活用し、ビジネスインサイトの発見をサポートします。",
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
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
