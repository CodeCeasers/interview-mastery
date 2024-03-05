  "use client";
import { useRouter } from 'next/navigation';
  import React, { useEffect } from 'react';

  const HomePage = () => {
    const router = useRouter();
    useEffect(() => {
      const chatConfig = {
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
        window.botpressWebChat.init(chatConfig);
      };

      // Append the script to the document body
      document.body.appendChild(script);

      // Clean up the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
      <div className="flex flex-col h-screen bg-zinc-800">
        <div className="mx-auto p-10">
          <h1 className="text-5xl font-bold mb-4 text-white">Step-1 | Chat with our AI bot before moving to Interview</h1>
        </div>
        <div className="flex-grow overflow-hidden">
          {/* Add a chat container with styling */}
          <div className='flex p-6 justify-center text-2xl mx-10'>
  <p className="text-white w-1/2">
  Welcome to our AI-powered chat! This chatbot was built with Botpress, providing a fast and efficient way to interact. Whether you have questions about our products, need assistance with a service, or just want to chat, our bot is here to help. Simply type your message in the chatbox below, and the bot will assist you promptly. Explore the features and functionalities of our bot to make your experience more enjoyable. We hope you have a great conversation!
  
    </p>
    </div>
          {/* You can add more components below the chat container */}
        </div>
        <div className='mx-auto mb-10'> 
        <button className="bg-white hover:bg-zinc-400 rounded-md text-black p-2 font-semibold"
          onClick={()=>{
            router.push('/editor');
          }}>Start Coding after chatting with bot</button>
          </div>
      </div>
    );
  };

  export default HomePage;
