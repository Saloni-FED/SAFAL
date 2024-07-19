import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    // Insert script into container
    const container = containerRef.current;
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
    script.async = true;
    container.appendChild(script);

    // Set scriptRef to current script element
    scriptRef.current = script;

    // Cleanup function
    return () => {
      // Remove script from container if it exists in the DOM
      if (container && scriptRef.current && container.contains(scriptRef.current)) {
        container.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text" style={{display:"none"}}>Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
