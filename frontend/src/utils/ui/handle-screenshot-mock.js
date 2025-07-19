// Mock version for browser testing
export const handleScreenshot = async (originalLink, devLink) => {
  // Simulate loading time
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Mock data structure matching the real function
  const createMockResult = (url, type) => ({
    path_image: `/mock-screenshots/${type}_${Date.now()}.png`,
    mod_analysis: {
      timestamp: new Date().toISOString(),
      url: url,
      imageHeight: Math.floor(Math.random() * 3000) + 2000,
      minHeight: Math.floor(Math.random() * 200) + 100,
      maxHeight: Math.floor(Math.random() * 500) + 400,
      avgHeight: Math.floor(Math.random() * 300) + 250,
      calculatedLength: Math.floor(Math.random() * 3500) + 2200,
      modBlocks: Array.from({ length: Math.floor(Math.random() * 10) + 5 }, (_, i) => ({
        index: i + 1,
        x: 0,
        y: Math.floor(Math.random() * 1000) + i * 200,
        width: 1920,
        height: Math.floor(Math.random() * 400) + 200,
        minHeight: 0,
        className: `mod-block-${i + 1}`
      }))
    }
  });

  return {
    original_link: createMockResult(originalLink, 'original'),
    dev_link: createMockResult(devLink, 'dev')
  };
}; 