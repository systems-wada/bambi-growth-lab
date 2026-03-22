import { useState } from "react";
import { Header } from "./components/header.tsx";
import { Footer } from "./components/footer.tsx";
import { ServicesPage } from "./pages/service.tsx";
import { HomePage } from "./pages/home.tsx";
import { CompanyOverview } from "./pages/company-profile.tsx";
import { PhilosophyPage } from "./pages/philosophy.tsx";
import { MembersPage } from "./pages/members.tsx";
import { ContactPage } from "./pages/contact.tsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

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
        <Header />
      </header>

      <main key={currentPage}>{renderPage()}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
