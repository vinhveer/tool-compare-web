import { useState } from 'react';
import DOM from '../components/DOM';
import UI from '../components/UI';

const Home = () => {
  const [originalSite, setOriginalSite] = useState('');
  const [devSite, setDevSite] = useState('');
  const [activeTab, setActiveTab] = useState('DOM');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="space-y-6">
        {/* Site Links Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full">
            <input
              type="text"
              placeholder="Nhập link site gốc"
              className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              value={originalSite}
              onChange={(e) => setOriginalSite(e.target.value)}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Nhập link site dev"
              className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
              value={devSite}
              onChange={(e) => setDevSite(e.target.value)}
            />
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center">
          <div className="bg-gray-100 rounded-lg">
            <button
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'DOM'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('DOM')}
            >
              DOM
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'UI'
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('UI')}
            >
              UI
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white">
            {activeTab === 'DOM' && (
              <DOM originalSite={originalSite} devSite={devSite} />
            )}
            {activeTab === 'UI' && (
              <UI originalSite={originalSite} devSite={devSite} />
            )}
        </div>
      </div>
    </div>
  );
};

export default Home;