
import React, { useState, useEffect } from "react";
import { problems } from "../components/Problem";
import SideNavBar from "../components/SideNavBar";
import TypingArea from "../components/TypingArea";

const WithTimer = () => {
  const [selectedLang, setSelectedLang] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [filteredProblem, setFilteredProblem] = useState(null);

  useEffect(() => {
    if (!selectedLang || !selectedDifficulty) {
      setFilteredProblem(null);
      return;
    }

    const filtered = problems.filter(
      (p) =>
        p.lang === selectedLang &&
        p.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
    );

    if (filtered.length > 0) {
      let index = Math.floor(Math.random() * filtered.length);
      setFilteredProblem(filtered[index]); // Picking 1st problem for now
    } else {
      setFilteredProblem(null);
    }
  }, [selectedLang, selectedDifficulty]);

  const refreshProblem = () => {
    if (!selectedLang || !selectedDifficulty) return;

    const filtered = problems.filter(
      (p) =>
        p.lang === selectedLang &&
        p.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
    );

    if (filtered.length > 0) {
      let index = Math.floor(Math.random() * filtered.length);
      setFilteredProblem(filtered[index]);
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden  text-white">
      {/* Sidebar */}
      <SideNavBar
        userSelectedLang={setSelectedLang}
        userSelectedDiffLevel={setSelectedDifficulty}
        selectedLang={selectedLang}
        selectedDiffLevel={selectedDifficulty}
      />

      {/* Typing Area */}
      <div className="flex-1 h-full p-10 overflow-hidden">
        {!filteredProblem ? (
          <div className="text-gray-400 text-xl h-full flex items-center justify-center">
            Select a language & difficulty to start typing...
          </div>
        ) : (
          <TypingArea
            problem={filteredProblem}
            refreshProblem={refreshProblem}
          />
        )}
      </div>
    </div>
  );
};

export default WithTimer;