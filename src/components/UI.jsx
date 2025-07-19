const UI = ({ originalSite, devSite }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">UI Comparison</h2>
      
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
            <div className="mx-auto w-64 bg-black rounded-3xl p-4 shadow-xl">
              <div className="w-2 h-2 bg-gray-600 rounded-full mx-auto mb-2"></div>
              <div className="bg-white rounded-2xl h-96 flex items-center justify-center">
                <span className="text-gray-500 text-sm">UI preview for original site</span>
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
            <div className="mx-auto w-64 bg-black rounded-3xl p-4 shadow-xl">
              <div className="w-2 h-2 bg-gray-600 rounded-full mx-auto mb-2"></div>
              <div className="bg-white rounded-2xl h-96 flex items-center justify-center">
                <span className="text-gray-500 text-sm">UI preview for dev site</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all">
          Compare UI
        </button>
      </div>
    </div>
  );
};

export default UI;  