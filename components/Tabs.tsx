"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tabs({ activeTab, setActiveTab }: Props) {
  const tabs = ["Markets", "Historial", "Forma", "Insights", "Veredicto"];
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const activeButton = containerRef.current?.querySelector(
      `[data-tab="${activeTab}"]`
    ) as HTMLElement;

    if (activeButton) {
      setIndicatorStyle({
        width: activeButton.offsetWidth,
        left: activeButton.offsetLeft,
      });
    }
  }, [activeTab]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex gap-4 bg-slate-900/60 backdrop-blur-md p-2 rounded-full relative overflow-x-auto"
      >
        <div
          className="absolute top-2 bottom-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 transition-all duration-300"
          style={indicatorStyle}
        />

        {tabs.map((tab) => (
          <button
            key={tab}
            data-tab={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === tab ? "text-white" : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
