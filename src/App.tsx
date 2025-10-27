import { useState } from "react";
import { Menu, Building2 } from "lucide-react";
import { ServicesPage } from "./pages/service.tsx";
import { HomePage } from "./pages/home.tsx";
import { CompanyOverview } from "./pages/company-profile.tsx";
import { PhilosophyPage } from "./pages/philosophy.tsx";
import { MembersPage } from "./pages/members.tsx";
import { ContactPage } from "./pages/contact.tsx";

const App = () => {
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

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "services":
        return <ServicesPage />;
      case "company-profile":
        return <CompanyOverview />;
      case "philosophy":
        return <PhilosophyPage />;
      case "members":
        return <MembersPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <header>
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
        </div>
      </header>

      <main key={currentPage}>{renderPage()}</main>

      <footer>
        <p>&copy; 2025 合同会社Bambi Growth Lab. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
