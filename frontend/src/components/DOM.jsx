const DOM = ({ originalSite, devSite }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">DOM Comparison</h2>
      
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
            <div className="bg-white rounded-lg border-2 border-gray-300 h-96">
              <div className="bg-gray-200 px-4 py-2 rounded-t-lg border-b border-gray-300">
                <div className="bg-white px-3 py-1 rounded text-sm text-gray-700">DOM Structure</div>
              </div>
              <div className="flex justify-center items-center h-80 bg-gray-50">
                <span className="text-gray-500">DOM content for original site</span>
              </div>
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
            <div className="bg-white rounded-lg border-2 border-gray-300 h-96">
              <div className="bg-gray-200 px-4 py-2 rounded-t-lg border-b border-gray-300">
                <div className="bg-white px-3 py-1 rounded text-sm text-gray-700">DOM Structure</div>
              </div>
              <div className="flex justify-center items-center h-80 bg-gray-50">
                <span className="text-gray-500">DOM content for dev site</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
          Compare DOM
        </button>
      </div>
    </div>
  );
};

export default DOM; 