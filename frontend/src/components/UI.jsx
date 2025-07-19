import { useState } from 'react';
import { handleScreenshot } from '../utils/ui/handle-screenshot-mock';

const UI = ({ originalSite, devSite }) => {
  const [loading, setLoading] = useState(false);
  const [screenshots, setScreenshots] = useState(null);
  const [error, setError] = useState(null);

  const handleExecute = async () => {
    if (!originalSite || !devSite) {
      alert('Vui lòng nhập cả hai link');
      return;
    }

    setLoading(true);
    setError(null);
    setScreenshots(null);

    try {
      const result = await handleScreenshot(originalSite, devSite);
      setScreenshots(result);
    } catch (err) {
      setError(err.message);
      console.error('Error taking screenshots:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800">UI Comparison</h2>
          <p className="text-sm text-gray-500">Enter the original site and the dev site and click "Execute" to compare</p>
        </div>
        <div className="flex-none">
          <button 
            type="button" 
            onClick={handleExecute}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors flex items-center gap-2"
          >
            {loading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            <span>{loading ? 'Processing...' : 'Execute'}</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">Error: {error}</p>
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="text-gray-600">Taking screenshots and analyzing...</p>
          </div>
        </div>
      )}

      {screenshots && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200">
            <div className="p-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-blue-600 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full border border-blue-300">
                  Gốc
                </span>
                Site Gốc
              </h3>
              <div className="text-sm text-gray-600 break-all mb-4">
                {originalSite}
              </div>
              <hr className="border-gray-300 my-4" />
              <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
                <div className="p-4 text-center text-gray-500 bg-gradient-to-br from-blue-50 to-blue-100 h-64 flex items-center justify-center">
                  <div>
                    <div className="text-lg font-semibold mb-2">📷 Original Site Screenshot</div>
                    <div className="text-sm">Mock screenshot taken successfully</div>
                    <div className="text-xs mt-2 opacity-75">Path: {screenshots.original_link.path_image}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <p>Blocks found: {screenshots.original_link.mod_analysis.modBlocks.length}</p>
                <p>Image height: {screenshots.original_link.mod_analysis.imageHeight}px</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200">
            <div className="p-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-purple-600 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full border border-purple-300">
                  Dev
                </span>
                Site Dev
              </h3>
              <div className="text-sm text-gray-600 break-all mb-4">
                {devSite}
              </div>
              <hr className="border-gray-300 my-4" />
              <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
                <div className="p-4 text-center text-gray-500 bg-gradient-to-br from-purple-50 to-purple-100 h-64 flex items-center justify-center">
                  <div>
                    <div className="text-lg font-semibold mb-2">📷 Dev Site Screenshot</div>
                    <div className="text-sm">Mock screenshot taken successfully</div>
                    <div className="text-xs mt-2 opacity-75">Path: {screenshots.dev_link.path_image}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <p>Blocks found: {screenshots.dev_link.mod_analysis.modBlocks.length}</p>
                <p>Image height: {screenshots.dev_link.mod_analysis.imageHeight}px</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!loading && !screenshots && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200">
            <div className="p-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-blue-600 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full border border-blue-300">
                  Gốc
                </span>
                Site Gốc
              </h3>
              <div className="text-sm text-gray-600 break-all mb-4">
                {originalSite || (
                  <span className="italic text-gray-400">Chưa có link</span>
                )}
              </div>
              <hr className="border-gray-300 my-4" />
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Click Execute to take screenshot</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200">
            <div className="p-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-purple-600 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full border border-purple-300">
                  Dev
                </span>
                Site Dev
              </h3>
              <div className="text-sm text-gray-600 break-all mb-4">
                {devSite || (
                  <span className="italic text-gray-400">Chưa có link</span>
                )}
              </div>
              <hr className="border-gray-300 my-4" />
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Click Execute to take screenshot</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UI;  