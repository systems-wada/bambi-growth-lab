import { useState } from "react";
import { Menu, Building2 } from "lucide-react";

export const Header = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: "home", label: "ホーム" },
    { id: "services", label: "サービス" },
    { id: "company-profile", label: "会社概要" },
    // { id: "philosophy", label: "理念" },
    // { id: "members", label: "メンバー" },
    { id: "contact", label: "お問い合わせ" },
  ];
  return (
    <div className="header-content">
      <div className="logo">
        <Building2 size={28} />
        Bambi Growth Lab
      </div>
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu size={24} />
      </button>
      {/* {isMaintenance ? (
        <></>
      ) : (
        <nav className={mobileMenuOpen ? "mobile-open" : ""}>
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  className={currentPage === item.id ? "active" : ""}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )} */}
    </div>
  );
};
