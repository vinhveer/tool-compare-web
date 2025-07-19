import { useState } from 'react';
import DOM from '../components/DOM';
import UI from '../components/UI';

const Home = () => {
  const [originalSite, setOriginalSite] = useState('');
  const [devSite, setDevSite] = useState('');
  const [activeTab, setActiveTab] = useState('DOM');

  return (
    <div className="container-fluid mx-auto p-6">
      <div className="space-y-6">
        {/* Site Links Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Nhập link site gốc"
              className="input input-primary w-full"
              value={originalSite}
              onChange={(e) => setOriginalSite(e.target.value)}
            />
          </div>
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Nhập link site dev"
              className="input input-secondary w-full"
              value={devSite}
              onChange={(e) => setDevSite(e.target.value)}
            />
          </div>
        </div>

        {/* Tabs Section */}
        <div className="tabs tabs-boxed tabs-lg justify-center">
          <button
            className={`tab tab-lg ${activeTab === 'DOM' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('DOM')}
          >
            DOM
          </button>
          <button
            className={`tab tab-lg ${activeTab === 'UI' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('UI')}
          >
            UI
          </button>
        </div>

        {/* Tab Content */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            {activeTab === 'DOM' && (
              <DOM originalSite={originalSite} devSite={devSite} />
            )}
            {activeTab === 'UI' && (
              <UI originalSite={originalSite} devSite={devSite} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;