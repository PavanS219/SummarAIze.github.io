import React, { useEffect, useRef } from 'react';
import {
  Globe2,
  Youtube,
  Languages,
  MessageCircle,
  Volume2,
  Download,
  Sparkles,
  Brain,
  Zap,
} from 'lucide-react';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              background: `radial-gradient(circle at center, 
                rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.15),
                transparent 70%)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          {/* Hero section */}
          <div className="text-center mb-20 fade-in">
            <div className="inline-block relative">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 flex items-center justify-center overflow-hidden">
                <span className="animate-slide-from-left opacity-0">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Summar
                  </span>
                </span>
                <span className="animate-fade-in opacity-0">
                  <span className="text-white">AI</span>
                </span>
                <span className="animate-slide-from-right opacity-0">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    ze
                  </span>
                </span>
              </h1>
              <div className="absolute -inset-1 blur-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of content consumption with our AI-powered summarization tool.
              Transform lengthy content into concise, meaningful insights in seconds.
            </p>
            <a
              href="https://summaraize-e17.streamlit.app/"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Experience SummarAIze
            </a>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Globe2, title: 'Website Summaries', description: 'Transform any webpage into digestible insights instantly' },
              { icon: Youtube, title: 'YouTube Summaries', description: 'Get the essence of any video without watching it entirely' },
              { icon: Languages, title: 'Multi-language Support', description: 'Break language barriers with instant translations' },
              { icon: MessageCircle, title: 'Interactive Chat', description: 'Dive deeper with AI-powered follow-up discussions' },
              { icon: Volume2, title: 'Voice Output', description: 'Listen to your summaries with natural text-to-speech' },
              { icon: Download, title: 'Easy Export', description: 'Save and share your summaries in multiple formats' },
            ].map((feature, index) => (
              <div
                key={index}
                className="group fade-in backdrop-blur-lg bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 fade-in">
            {[
              { icon: Brain, value: '99%', label: 'Accuracy Rate' },
              { icon: Zap, value: '0.5s', label: 'Processing Time' },
              { icon: Globe2, value: '50+', label: 'Supported Languages' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 backdrop-blur-lg bg-white/5 rounded-2xl"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;