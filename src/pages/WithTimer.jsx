import React, { useEffect, useState } from 'react'
import Button from '../components/Button';

const javaSnippets = [
  "int a = 10;",
  'String name = "Nikki";',
  "for(int i = 0; i < n; i++){}",
  "while(num > 0){ num--; }",
  "if(x > y){ return x; }",
  "public static void main(String[] args){}",
  'System.out.println("Hello World");',
  "int[] arr = new int[5];",
  "List<String> list = new ArrayList<>();",
  "HashMap<String, Integer> map = new HashMap<>();",
  "try { doTask(); } catch(Exception e){}",
  "class Student { String name; int age; }",
  "public class Main{}",
  "Scanner sc = new Scanner(System.in);",
  "String input = sc.nextLine();",
  "void display(){ System.out.println(data); }",
  "boolean flag = true;",
  "double price = 99.99;",
  "char ch = 'A';",
  "final int MAX = 100;",
  "return sum + value;",
  "this.name = name;",
  "super.display();",
  "new Thread(() -> {}).start();",
  'File file = new File("data.txt");',
  "Arrays.sort(arr);",
  "Collections.reverse(list);",
  "Optional<String> opt = Optional.ofNullable(value);",
  "int result = Math.max(a, b);",
  'String[] words = str.split(" ");',
  "StringBuilder sb = new StringBuilder();",
  'sb.append("Java");',
  "LocalDate date = LocalDate.now();",
  "int len = str.length();",
  "float avg = total / count;",
  "switch(day){ case 1: break; }",
  "enum Level { LOW, MEDIUM, HIGH }",
  "interface Shape { void draw(); }",
  "abstract class Animal { abstract void sound(); }",
  "public <T> void print(T value){}",
  "int sum(int a, int b){ return a + b; }",
  "boolean check(int x){ return x > 0; }",
  'map.put("Nikki", 1);',
  'list.add("Java");',
  "Thread.sleep(1000);",
  "synchronized(this){}",
  'String msg = String.format("Hi %s", name);',
  'Path path = Paths.get("folder");',
];



const WithTimer = () => {
  const [active, setActive] = useState(null);
  const [langActive, setLangActive] = useState(null);
  const [snippet, setSnippet] = useState('')
  const [isRunning, setIsRuning] = useState(false);
  const [timerStart,setTimer] = useState(10);
  
  const generateSnippet = () =>{
  
    let Index = Math.floor(Math.random() * javaSnippets.length);
    setSnippet(javaSnippets[Index]);
    setIsRuning(true);
    setTimer(10);
    
  }
 
 useEffect(() => {
   let interval;

   if (isRunning && timerStart > 0) {
     interval = setInterval(() => {
       setTimer((prev) => prev - 1);
     }, 1000);
   }

   return () => clearInterval(interval);
 }, [isRunning, timerStart]);

  useEffect(() => {
    generateSnippet();
  }, []);

  const handleClick =(e)=>{
    if(timerStart==0){
    e.preventDefault();
    setSnippet("");
    }
  }

  //()=>{},()=>()
  return (
    <div className=" w-full h-dvh flex-col">
      <div className=" w-full h-12 flex items-center justify-center">
        <div className="flex gap-8  font-medium text-xl ">
          <button
            onClick={() => setActive(1)}
            className={
              active === 1
                ? "bg-[#068a8d] border-[0.5px] px-6  py-1.5 rounded-2xl"
                : "bg-transparent border-[0.5px] px-6 py-1.5 rounded-2xl "
            }
          >
            Easy
          </button>

          <button
            onClick={() => setActive(2)}
            className={
              active === 2
                ? "bg-[#068a8d] border-[0.5px] px-6  py-1.5 rounded-2xl"
                : "bg-transparent border-[0.5px] px-6  py-1.5 rounded-2xl"
            }
          >
            Medium
          </button>

          <button
            onClick={() => setActive(3)}
            className={
              active === 3
                ? "bg-[#068a8d] border-[0.5px] px-6 py-1.5 rounded-2xl"
                : "bg-transparent border-[0.5px] px-6  py-1.5 rounded-2xl"
            }
          >
            Hard
          </button>
        </div>
      </div>

      <div className=" w-full h-12 flex items-center justify-center mt-4">
        <div className="flex gap-8  font-medium text-xl ">
          <button
            onClick={() => setLangActive(1)}
            className={
              langActive === 1
                ? "bg-[#068a8d] border-[0.5px] px-6  py-1.5 rounded-2xl"
                : "bg-transparent border-[0.5px] px-6 py-1.5 rounded-2xl "
            }
          >
            Java
          </button>

          <button
            onClick={() => setLangActive(2)}
            className={
              langActive === 2
                ? "bg-[#068a8d] border-[0.5px] px-6  py-1.5 rounded-2xl"
                : "bg-transparent border-[0.5px] px-6  py-1.5 rounded-2xl"
            }
          >
            JavaScript
          </button>

          <button
            onClick={() => setLangActive(3)}
            className={
              langActive === 3
                ? "bg-[#068a8d] border-[0.5px] px-6 py-1.5 rounded-2xl"
                : "bg-transparent border-[0.5px] px-6  py-1.5 rounded-2xl"
            }
          >
            Python
          </button>
          <button
            onClick={() => setLangActive(4)}
            className={
              langActive === 4
                ? "bg-[#068a8d] border-[0.5px] px-6 py-1.5 rounded-2xl"
                : "bg-transparent border-[0.5px] px-6  py-1.5 rounded-2xl"
            }
          >
            SQL
          </button>
          <button
            onClick={() => setLangActive(5)}
            className={
              langActive === 5
                ? "bg-[#068a8d] border-[0.5px] px-6 py-1.5 rounded-2xl"
                : "bg-transparent border-[0.5px] px-6  py-1.5 rounded-2xl"
            }
          >
            C++
          </button>
        </div>
      </div>

      <div className=" justify-center items-center content-center mt-24 flex-col ">
        <div className="  w-full text-center h-auto">
          <textarea
            placeholder={snippet}
            className="w-1/2 h-30 text-center content-center text-2xl rounded-2xl border"
            onKeyDown={handleClick}
          />
        </div>
        <div className="flex justify-center mt-4 ">
          <div className="flex">
            <Button
              name="Generate Snipet"
              onClick={generateSnippet}
              className={"py-3 px-8 rounded-[0.2rem]"}
              
            />
            <h1 className="font-semibold  rounded-[0.2rem] ml-4 py-3 px-18 border ">
              {timerStart}s
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-around mt-14 mb-14 h-40 ">
        <div className="justify-center text-center items-center content-center w-50 rounded-[0.2rem] border"> Progress</div>
        <div className="justify-center text-center items-center content-center w-50 rounded-[0.2rem] border"> Progress</div>
        <div className="justify-center text-center items-center content-center w-50 rounded-[0.2rem] border"> Progress</div>
        <div className="justify-center text-center items-center content-center w-50 rounded-[0.2rem] border"> Progress</div>
        <div className="justify-center text-center items-center content-center w-50 rounded-[0.2rem] border "> Progress</div>
      </div>
    </div> 
  );
}

export default WithTimer