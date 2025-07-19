const DOM = ({ originalSite, devSite }) => {
  return (
    <div className="space-y-6">
      <h2 className="card-title text-2xl justify-center">DOM Comparison</h2>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-primary">
              <div className="badge badge-primary badge-outline">Gốc</div>
              Site Gốc
            </h3>
            <div className="text-sm opacity-70 break-all">
              {originalSite || (
                <span className="italic text-base-content/50">Chưa có link</span>
              )}
            </div>
            <div className="divider my-2"></div>
            <div className="mockup-browser bg-base-300 h-96">
              <div className="mockup-browser-toolbar">
                <div className="input">DOM Structure</div>
              </div>
              <div className="flex justify-center items-center px-4 py-16 bg-base-100">
                <span className="text-base-content/50">DOM content for original site</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-secondary">
              <div className="badge badge-secondary badge-outline">Dev</div>
              Site Dev
            </h3>
            <div className="text-sm opacity-70 break-all">
              {devSite || (
                <span className="italic text-base-content/50">Chưa có link</span>
              )}
            </div>
            <div className="divider my-2"></div>
            <div className="mockup-browser bg-base-300 h-96">
              <div className="mockup-browser-toolbar">
                <div className="input">DOM Structure</div>
              </div>
              <div className="flex justify-center items-center px-4 py-16 bg-base-100">
                <span className="text-base-content/50">DOM content for dev site</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-actions justify-center">
        <button className="btn btn-primary btn-wide">
          Compare DOM
        </button>
      </div>
    </div>
  );
};

export default DOM; 