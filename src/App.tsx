import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import FoodMenuPage from './pages/FoodMenuPage';
import DrinksMenuPage from './pages/DrinksMenuPage';
import WhatsOnPage from './pages/WhatsOnPage';
import DiningPage from './pages/DiningPage';
import FamilyFriendlyPage from './pages/FamilyFriendlyPage';
import FunctionsPage from './pages/FunctionsPage';
import ContactPage from './pages/ContactPage';
import MenuItemPage from './pages/MenuItemPage';
import UnderConstruction from './pages/UnderConstruction';

function App() {
  return (
    <Router>
      <Routes>
        {/* This route does NOT use Layout */}
        <Route path="/" element={<UnderConstruction />} />

        {/* This route uses Layout for all nested routes */}
        <Route element={<Layout />}>
          <Route path="/menu/food" element={<FoodMenuPage />} />
          <Route path="/menu/drinks" element={<DrinksMenuPage />} />
          <Route path="/menu/item/:id" element={<MenuItemPage />} />
          <Route path="/whats-on" element={<WhatsOnPage />} />
          <Route path="/dining" element={<DiningPage />} />
          <Route path="/family-friendly" element={<FamilyFriendlyPage />} />
          <Route path="/functions" element={<FunctionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
