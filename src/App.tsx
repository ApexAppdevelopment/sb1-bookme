import React, { useState } from 'react';
import { InvoiceForm } from './components/InvoiceForm';
import { Invoice } from './components/Invoice';
import { AdminPanel } from './components/admin/AdminPanel';
import { Header } from './components/Header';
import { Settings } from './types/settings';
import { defaultSettings } from './utils/constants';

function App() {
  const [invoice, setInvoice] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header isAdmin={isAdmin} onToggleAdmin={() => setIsAdmin(!isAdmin)} />
      
      <div className="max-w-4xl mx-auto px-4 pt-20 pb-8">
        {isAdmin ? (
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gray-700">
            <AdminPanel settings={settings} onUpdateSettings={setSettings} />
          </div>
        ) : !invoice ? (
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gray-700">
            <InvoiceForm onSubmit={setInvoice} settings={settings} />
          </div>
        ) : (
          <div>
            <Invoice data={invoice} />
            <div className="mt-4 text-center">
              <button
                onClick={() => setInvoice(null)}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Create New Invoice
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;