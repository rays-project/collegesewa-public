import './App.css'
import Header from './components/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Topbar from './components/header/Topbar';
import HeroCarousel from './pages/HeroSection/HeroSection';
import VideoAndCollegePage from './pages/mode/Modesection';
import UniversitiesPage from './pages/UniversitiesPage/UniversitiesPage';
import FutureUnlockSection from './pages/FutureUnlockSection/FutureUnlockSection';
import WhyChooseSection from './pages/WhyChooseSection/WhyChooseSection';
import CollegeTrustSection from './pages/CollegeTrustSection/CollegeTrustSection';
import ApplicationStartSection from './pages/ApplicationStartSection/ApplicationStartSection';
import StudentSuccessSection from './pages/StudentSuccessSection/StudentSuccessSection';
import ExamNotificationsSection from './pages/ExamNotificationsSection/ExamNotificationsSection';
import SubscribeAlertSection from './pages/SubscribeAlertSection/SubscribeAlertSection';
import ResultSection from './pages/ResultSection/ResultSection';
import QuickResultSection from './pages/QuickResultSection/QuickResultSection';
import ExpertsSection from './pages/ExpertsSection/ExpertsSection';
import Footer from './components/footer/Footer';
import TestimonialsSection from './pages/TestimonialsSection/TestimonialsSection';
import GuidanceSection from './pages/GuidanceSection/GuidanceSection';
import FreeCounsellingSection from './pages/FreeCounsellingSection/FreeCounsellingSection';
import UniversitiesSection from './pages/UniversitiesSection/UniversitiesSection';
import AuthPage from './pages/Login/Login';
import ContactUsSection from './pages/ContactUsSection/ContactUsSection';

// 👇 Layout component to handle what to show/hide
function Layout() {
  const location = useLocation();

  // Check if current path is "/login"
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {/* Topbar & Header always visible */}
      <Topbar />
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/contact" element={<ContactUsSection/>} />
        <Route
          path="/"
          element={
            <>
              {/* These sections only show when NOT on login page */}
              <HeroCarousel />
              <VideoAndCollegePage />
              <UniversitiesPage />
              <FutureUnlockSection />
              <WhyChooseSection />
              <CollegeTrustSection />
              <ApplicationStartSection />
              <StudentSuccessSection />
              <ExamNotificationsSection />
              <SubscribeAlertSection />
              <ResultSection />
              <QuickResultSection />
              <ExpertsSection />
              <TestimonialsSection />
              <GuidanceSection />
              <FreeCounsellingSection />
              <UniversitiesSection />
            </>
          }
        />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
