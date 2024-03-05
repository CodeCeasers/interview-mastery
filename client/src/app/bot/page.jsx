"use client";
import React, { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    const obj = {
        "composerPlaceholder": "Chat with bot",
            "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
            "botId": "6e4b6a66-9373-4b38-8750-d7adc50e6e27",
            "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": "6e4b6a66-9373-4b38-8750-d7adc50e6e27",
            "webhookId": "004cea53-c101-4b79-969c-8cfea18b54ee",
            "lazySocket": true,
            "themeName": "prism",
            "stylesheet": "https://webchat-styler-css.botpress.app/prod/44d41168-0283-4d85-b0dc-c48bd99788bd/v2788/style.css",
            "frontendVersion": "v1",
            "showPoweredBy": false,
            "theme": "prism",
            "themeColor": "#0000"
    }

    // Create a script element dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;

    // Add an event listener to initialize the chat when the script is loaded
    script.onload = () => {
      window.botpressWebChat.init(obj);
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <div className="mx-auto bg-zinc-950 h-screen p-10">
        <h1 className="text-5xl font-bold mb-4 text-white">Step-1 | Chat with our AI bot before moving to Interview</h1>
        
      </div>
      {/* No need for a separate div for the script tag */}
    </>
  );
};

export default HomePage;
