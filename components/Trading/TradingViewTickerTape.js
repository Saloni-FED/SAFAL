import React, { useEffect, useState } from 'react';

const TradingViewTickerTape = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      // Function to load the TradingView ticker tape widget
      const loadWidget = () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
          "symbols": [
            {
              "proName": "FOREXCOM:SPXUSD",
              "title": "S&P 500"
            },
            {
              "proName": "FOREXCOM:NSXUSD",
              "title": "Nasdaq 100"
            },
            {
              "proName": "FX_IDC:EURUSD",
              "title": "EUR/USD"
            },
            {
              "proName": "BITSTAMP:BTCUSD",
              "title": "BTC/USD"
            },
            {
              "proName": "FX_IDC:INRUSD",
              "title": "INR/USD"
            }
          ],
          "colorTheme": "white", // Adjusted color theme to white
          "isTransparent": false,
          "displayMode": "adaptive",
          "locale": "en"
        });

        // Append the script to the container
        const container = document.getElementById('widget-ticker-tape-container');
        container.appendChild(script);

        // Set state to indicate widget has loaded
        setIsLoaded(true);
      };

      // Load the widget when component mounts
      loadWidget();

      // Optionally, you can add an animation after the widget loads
      const tickerContainer = document.getElementById('widget-ticker-tape-container');
      tickerContainer.style.animation = 'tickerAnimation 30s linear infinite';

      return () => {
        // Clean up animation if component unmounts
        tickerContainer.style.animation = '';
      };
    }
  }, [isLoaded]);

  return (
    <div id="widget-ticker-tape-container" style={{ width: '100%', height: '50px', backgroundColor: 'white' }}></div>
  );
};

export default TradingViewTickerTape;
