// import React, { useState, useEffect, useRef } from "react";
// import Button from "./Button";

// const TypingPractice = () => {
//   // 1️⃣ List of Multiple Strings
//  const textList = [

//    "int a = 10;",
//    "int b = 20;",
//    "double d = 3.14;",
//    "float f = 2.5f;",
//    "long l = 100000L;",
//    "short s = 5;",
//    "byte bt = 1;",
//    "boolean flag = true;",
//    "char c = 'A';",
//    'String name = "Nikki";',
//    "int sum = a + b;",
//    "boolean isValid = (a < b);",
//    "final int MAX = 100;",
//    "var value = 50;",
//    'String city = "Satna";',

//    // ---------------- Arrays (16–22)
//    "int[] arr = {1,2,3,4};",
//    "arr[0] = 5;",
//    "int len = arr.length;",
//    "Arrays.sort(arr);",
//    "Arrays.toString(arr);",
//    "int first = arr[0];",
//    "for(int x : arr){}",

//    // ---------------- Loops (23–32)
//    "for(int i = 0; i < 10; i++){}",
//    "while(true){}",
//    "do{}while(false);",
//    "for(String str : list){}",
//    "continue;",
//    "break;",
//    "switch(a){}",
//    "case 1: break;",

//    // ---------------- Conditions (33–38)
//    "if(a > b){}",
//    "else{}",
//    "else if(a == b){}",
//    "boolean test = (a != b);",
//    "flag = !flag;",
//    "result = (a > b ? a : b);",

//    // ---------------- OOP Basics (39–50)
//    "public class Hello {}",
//    "public Hello(){}",
//    "private String title;",
//    "public void show(){}",
//    "public int add(int x,int y){return x+y;}",
//    "class Student { int id; String name; }",
//    "this.title = title;",
//    "super();",
//    "new Hello();",
//    "static int count = 0;",
//    "void display(){}",
//    "public static void main(String[] args) {}",

//    // ---------------- Collections (51–65)
//    "List<Integer> list = new ArrayList<>();",
//    "list.add(10);",
//    "list.size();",
//    "Collections.sort(list);",
//    "Set<String> set = new HashSet<>();",
//    'set.add("A");',
//    "set.size();",
//    "Map<String,Integer> map = new HashMap<>();",
//    'map.put("A",1);',
//    'map.get("A");',
//    "Queue<Integer> q = new LinkedList<>();",
//    "q.add(1);",
//    "q.poll();",
//    "Stack<Integer> st = new Stack<>();",
//    "st.push(1);",

//    // ---------------- String Operations (66–78)
//    'String s1 = "Hello";',
//    'String s2 = "World";',
//    "s1.equals(s2);",
//    "s1.compareTo(s2);",
//    "s1.toUpperCase();",
//    "s1.toLowerCase();",
//    's1.contains("He");',
//    "s1.length();",
//    "s1.charAt(0);",
//    "String.valueOf(10);",
//    'Integer.parseInt("5");',
//    'Double.parseDouble("2.5");',
//    'Boolean.parseBoolean("true");',

//    // ---------------- Exceptions (79–85)
//    "try{}catch(Exception e){}",
//    "throw new RuntimeException();",
//    'new Exception("Error");',
//    "finally{}",
//    "catch(NullPointerException e){}",
//    "IllegalArgumentException ex = new IllegalArgumentException();",
//    'System.err.println("Error");',

//    // ---------------- Threads & Lambda (86–90)
//    "Thread t = new Thread();",
//    "t.start();",
//    "Runnable run = () -> {};",
//    "synchronized(this){}",
//    "run.run();",

//    // ---------------- File Handling (91–95)
//    'File file = new File("test.txt");',
//    "Scanner sc = new Scanner(System.in);",
//    "String input = sc.nextLine();",
//    'Path path = Paths.get("file.txt");',
//    "Files.exists(path);",

//    // ---------------- Date & Time (96–98)
//    "LocalDate now = LocalDate.now();",
//    "LocalTime time = LocalTime.now();",
//    "LocalDateTime dt = LocalDateTime.now();",

//    // ---------------- Math, Utility (99–100)
//    "Math.sqrt(25);",
//    "Math.max(a,b);",
//  ];


//   // 2️⃣ Manage Active Text
//   const [index, setIndex] = useState(0);
//   const targetText = textList[index];

//   const [typed, setTyped] = useState("");
//   const divRef = useRef(null);

//   // Auto focus
//   useEffect(() => {
//     divRef.current.focus();
//   }, []);

//   // 3️⃣ Change Text Automatically After Interval (20 seconds)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTyped(""); // reset typed text
//       setIndex((prev) => (prev + 1) % textList.length);
//     }, 20000);

//     return () => clearInterval(interval);
//   }, []);

//   // Typing Logic
//   const handleKeyDown = (e) => {
//     e.preventDefault();

//     if (e.key === "Backspace") {
//       setTyped((prev) => prev.slice(0, -1));
//       return;
//     }

//     if (e.key.length === 1) {
//       setTyped((prev) =>
//         prev.length < targetText.length ? prev + e.key : prev
//       );
//     }
//   };

//   return (
//     <div className="w-full h-full text-gray-100 flex items-center justify-center relative">
//       {/* Typing Area */}
//       <div
//         ref={divRef}
//         tabIndex={0}
//         onKeyDown={handleKeyDown}
//         className="outline-none cursor-text font-mono text-2xl TypingPractice leading-relaxed ml-20 max-w-4xl"
//       >
//         {targetText.split("").map((char, idx) => {
//           const typedChar = typed[idx];
//           let color = "text-gray-600";

//           if (typedChar != null) {
//             if (typedChar === char) color = "text-yellow-300";
//             else color = "text-red-500";
//           }

//           return (
//             <span key={idx} className={color}>
//               {char}
//             </span>
//           );
//         })}
//       </div>

//       {/* Button */}
//       {/* <Button
//         name="Generate Snipet"
//         className="py-3 px-8 rounded-[0.2rem] absolute top-96 right-96"
//       /> */}
//     </div>
//   );
// };

// export default TypingPractice;
import { useState, useRef, useEffect } from "react";

const TypingArea = ({ problem, refreshProblem, language, difficulty }) => {
  const [userInput, setUserInput] = useState("");
  const [time, setTime] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const inputRef = useRef(null);

  // Reset everything when a new problem loads
  useEffect(() => {
    setUserInput("");
    setTime(0);
    setIsTyping(false);
    setShowPopup(false);

    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 0);
  }, [problem]);

  // Timer effect
  useEffect(() => {
    if (!isTyping) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isTyping]);

  // Handle typing
  const handleChange = (e) => {
    if (!isTyping) setIsTyping(true);
    setUserInput(e.target.value);
  };

  // Save test result to localStorage
  const saveTestResult = (testData) => {
    try {
      const savedTests = localStorage.getItem('typingTestHistory');
      const tests = savedTests ? JSON.parse(savedTests) : [];
      
      // Add new test result at the beginning
      tests.unshift({
        ...testData,
        date: new Date().toISOString(),
      });
      
      // Keep only last 100 tests
      const limitedTests = tests.slice(0, 100);
      localStorage.setItem('typingTestHistory', JSON.stringify(limitedTests));
    } catch (err) {
      console.error("Error saving test result:", err);
    }
  };

  // Handle Enter key press (finish typing)
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsTyping(false); // Stop timer
      
      // Calculate final stats
      const finalErrors = userInput
        .split("")
        .reduce((acc, char, i) => (char !== problem.problem[i] ? acc + 1 : acc), 0);
      const wordsTyped = userInput.trim().split(/\s+/).length;
      const finalWPM = time > 0 ? Math.round((wordsTyped / time) * 60) : 0;
      const finalAccuracy =
        userInput.length > 0
          ? Math.round(((userInput.length - finalErrors) / userInput.length) * 100)
          : 100;
      
      // Save test result
      saveTestResult({
        language: language || problem?.lang || "Unknown",
        difficulty: difficulty || problem?.difficulty || "Unknown",
        problemName: problem?.name || "Unknown",
        time: time,
        wpm: finalWPM,
        accuracy: finalAccuracy,
        errors: finalErrors,
        progress: Math.round((userInput.length / problem.problem.length) * 100),
      });
      
      setShowPopup(true); // Show popup
    }
  };

  if (!problem)
    return (
      <div className="flex items-center justify-center h-screen text-gray-300 text-lg">
        Select language & difficulty to start typing...
      </div>
    );

  // Calculate stats
  const errors = userInput
    .split("")
    .reduce((acc, char, i) => (char !== problem.problem[i] ? acc + 1 : acc), 0);
  const wordsTyped = userInput.trim().split(/\s+/).length;
  const wpm = time > 0 ? Math.round((wordsTyped / time) * 60) : 0;
  const accuracy =
    userInput.length > 0
      ? Math.round(((userInput.length - errors) / userInput.length) * 100)
      : 100;
  const progress =
    problem.problem.length > 0
      ? Math.round((userInput.length / problem.problem.length) * 100)
      : 0;

  // Render problem with highlights
  const renderText = () =>
    problem.problem.split("").map((char, index) => {
      const typedChar = userInput[index];
      let color = "text-gray-300";
      if (typedChar != null) {
        color = typedChar === char ? "text-green-400" : "text-red-500";
      }
      if (index === userInput.length)
        color += " underline decoration-yellow-500";
      return (
        <span key={index} className={color}>
          {char}
        </span>
      );
    });

  return (
    <div className="flex flex-col h-screen w-full items-center p-6 relative overflow-hidden">
      {/* Problem Title */}
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#068a8d] text-center">
        {problem.name}
      </h2>

      {/* Stats */}
      <div className="flex gap-6 mb-2 text-white font-bold text-lg">
        <div>Time: {time}s</div>
        <div>WPM: {wpm}</div>
        <div>Errors: {errors}</div>
        <div>Accuracy: {accuracy}%</div>
        <div>Progress: {progress}%</div>
      </div>

      {/* Instruction message */}
      <div className="mb-4 text-gray-300 text-sm italic">
        After completing typing, press{" "}
        <span className="text-[#068a8d] font-bold">Enter</span>
      </div>

      {/* Typing Container */}
      <div className="bg-[#0D1E2A] p-4 rounded-xl shadow-lg w-full max-w-4xl flex-1 overflow-y-auto scrollbar-hidden">
        <pre className="text-base md:text-lg leading-7 text-gray-300 whitespace-pre-wrap wrap-break-word font-mono">
          {renderText()}
        </pre>
      </div>

      {/* Hidden input */}
      <input
        ref={inputRef}
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="absolute inset-0 opacity-0 pointer-events-none"
        autoFocus
      />

      {/* Refresh Button */}
      <button
        onClick={refreshProblem}
        className="mt-4 px-6 py-2 bg-[#068a8d] hover:bg-[#036b6dd7] text-white font-bold rounded-md shadow-lg transition-all duration-200"
      >
        Refresh Problem
      </button>

      {/* Completion Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
          <div className="bg-[#071416] rounded-xl shadow-lg p-6 w-11/12 max-w-5xl text-center">
            <h2 className="text-3xl font-extrabold text-[#068a8d] mb-6">
              🎉 Congratulations! 🎉
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="bg-yellow-500 text-white font-bold px-6 py-4 rounded-lg shadow-lg">
                Time: {time}s
              </div>
              <div className="bg-green-500 text-white font-bold px-6 py-4 rounded-lg shadow-lg">
                WPM: {wpm}
              </div>
              <div className="bg-red-500 text-white font-bold px-6 py-4 rounded-lg shadow-lg">
                Errors: {errors}
              </div>
              <div className="bg-blue-500 text-white font-bold px-6 py-4 rounded-lg shadow-lg">
                Accuracy: {accuracy}%
              </div>
              <div className="bg-purple-500 text-white font-bold px-6 py-4 rounded-lg shadow-lg">
                Progress: {progress}%
              </div>
            </div>

            <button
              onClick={() => {
                setShowPopup(false);
                refreshProblem();
              }}
              className="mt-4 px-6 py-3 bg-[#068a8d] hover:bg-[#036b6dd7] text-white font-bold rounded-md  shadow-lg transition-all duration-200"
            >
              Next Problem
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TypingArea;
