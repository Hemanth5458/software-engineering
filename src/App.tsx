import React from 'react';
import Header from './components/Header';
import DailyMenu from './components/DailyMenu';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Flavor Fusion</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience a unique dining journey with our daily rotating menu. 
              Join us on Sundays for exclusive Indian cuisine specialties.
            </p>
          </div>
          <DailyMenu />
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Flavor Fusion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;