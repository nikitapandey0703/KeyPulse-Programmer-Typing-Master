import  { useState, useEffect } from "react";
import { generalProblems } from "../components/generalProblems";
import SideNavBar from "../components/SideNavBar";
import TypingArea from "../components/TypingArea";

const WithoutTimer = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [filteredProblem, setFilteredProblem] = useState(null);

  useEffect(() => {
    if (!selectedDifficulty) {
      setFilteredProblem(null);
      return;
    }

    const filtered = generalProblems.filter(
      (p) => p.difficulty === selectedDifficulty
    );

    if (filtered.length > 0) {
      const index = Math.floor(Math.random() * filtered.length);
      setFilteredProblem(filtered[index]);
    }
  }, [selectedDifficulty]);

  const refreshProblem = () => {
    const filtered = generalProblems.filter(
      (p) => p.difficulty === selectedDifficulty
    );

    const index = Math.floor(Math.random() * filtered.length);
    setFilteredProblem(filtered[index]);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden text-white">
      {/* Sidebar */}
      <SideNavBar
        showLanguage={false} // 🔥 Beginner mode
        userSelectedDiffLevel={setSelectedDifficulty}
      />

      {/* Typing Area */}
      <div className="flex-1 h-full p-10 overflow-hidden">
        {!filteredProblem ? (
          <div className="text-gray-400 text-xl h-full flex items-center justify-center">
            Select difficulty to start typing...
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

export default WithoutTimer;
