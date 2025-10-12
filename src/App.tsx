import { useState } from "react";
import { Menu, Building2 } from "lucide-react";
import { ServicesPage } from "./pages/service";
import { HomePage } from "./pages/home";
import { PhilosophyPage } from "./pages/philosophy";
import { MembersPage } from "./pages/members";
import { ContactPage } from "./pages/contact";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: "home", label: "ホーム" },
    { id: "services", label: "サービス" },
    { id: "philosophy", label: "理念" },
    { id: "members", label: "メンバー" },
    { id: "contact", label: "お問い合わせ" },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "services":
        return <ServicesPage />;
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
            TechSolutions
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
        <p>&copy; 2025 TechSolutions株式会社. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
