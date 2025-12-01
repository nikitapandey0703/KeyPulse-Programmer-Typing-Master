export const problems = [
  // ---------------- JAVA EASY ----------------
  {
    id: 1,
    name: "Print Hello World",
    problem: `
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
    `,
    lang: "Java",
    difficulty: "easy",
  },
  {
    id: 2,
    name: "Sum of Two Numbers",
    problem: `
int a = 10;
int b = 20;
int sum = a + b;
System.out.println("Sum: " + sum);
    `,
    lang: "Java",
    difficulty: "easy",
  },
  {
    id: 3,
    name: "Check Even or Odd",
    problem: `
int n = 7;
if(n % 2 == 0){
  System.out.println("Even");
} else {
  System.out.println("Odd");
}
    `,
    lang: "Java",
    difficulty: "easy",
  },
  {
    id: 4,
    name: "Find Greater Number",
    problem: `
int a = 10;
int b = 20;
int max = (a > b) ? a : b;
System.out.println(max);
    `,
    lang: "Java",
    difficulty: "easy",
  },
  {
    id: 5,
    name: "Simple For Loop",
    problem: `
for(int i = 1; i <= 5; i++){
  System.out.println(i);
}
    `,
    lang: "Java",
    difficulty: "easy",
  },
  {
    id: 6,
    name: "Array Printing",
    problem: `
int[] arr = {1, 2, 3, 4};
for(int n : arr){
  System.out.println(n);
}
    `,
    lang: "Java",
    difficulty: "easy",
  },
  {
    id: 7,
    name: "Character Count",
    problem: `
String s = "hello";
System.out.println(s.length());
    `,
    lang: "Java",
    difficulty: "easy",
  },
  {
    id: 8,
    name: "Reverse a String",
    problem: `
String s = "abc";
String rev = "";
for(int i = s.length()-1; i >= 0; i--){
  rev += s.charAt(i);
}
System.out.println(rev);
    `,
    lang: "Java",
    difficulty: "easy",
  },
  {
    id: 9,
    name: "Swap Numbers",
    problem: `
int a = 5, b = 10;
int temp = a;
a = b;
b = temp;
System.out.println(a + " " + b);
    `,
    lang: "Java",
    difficulty: "easy",
  },
  {
    id: 10,
    name: "Factorial Using Loop",
    problem: `
int n = 5;
int fact = 1;
for(int i = 1; i <= n; i++){
  fact *= i;
}
System.out.println(fact);
    `,
    lang: "Java",
    difficulty: "easy",
  },
  // ---------------- JAVA MEDIUM ----------------
  {
    id: 11,
    name: "Fibonacci Check",
    problem: `
public static boolean isFibonacci(int n){
  int a = 0, b = 1;
  while(b < n){
    int temp = b;
    b = a + b;
    a = temp;
  }
  return b == n;
}
  `,
    lang: "Java",
    difficulty: "medium",
  },
  {
    id: 12,
    name: "Palindrome String",
    problem: `
String s = "level";
int i = 0, j = s.length() - 1;
boolean isPal = true;

while(i < j){
  if(s.charAt(i) != s.charAt(j)){
    isPal = false;
    break;
  }
  i++;
  j--;
}
System.out.println(isPal);
  `,
    lang: "Java",
    difficulty: "medium",
  },
  {
    id: 13,
    name: "Count Vowels",
    problem: `
String s = "education";
int count = 0;

for(char c : s.toCharArray()){
  if("aeiou".indexOf(c) != -1){
    count++;
  }
}
System.out.println(count);
  `,
    lang: "Java",
    difficulty: "medium",
  },
  {
    id: 14,
    name: "Prime Number Check",
    problem: `
int n = 17;
boolean isPrime = true;

for(int i = 2; i * i <= n; i++){
  if(n % i == 0){
    isPrime = false;
    break;
  }
}
System.out.println(isPrime);
  `,
    lang: "Java",
    difficulty: "medium",
  },
  {
    id: 15,
    name: "Remove Duplicates From Array",
    problem: `
int[] arr = {1,2,2,3,4,4,5};
Set<Integer> set = new HashSet<>();

for(int n : arr){
  set.add(n);
}

System.out.println(set);
  `,
    lang: "Java",
    difficulty: "medium",
  },
  {
    id: 16,
    name: "Find Missing Number",
    problem: `
int[] arr = {1,2,4,5};
int n = 5;
int expectedSum = n * (n + 1) / 2;
int actualSum = 0;

for(int x : arr){
  actualSum += x;
}

System.out.println(expectedSum - actualSum);
  `,
    lang: "Java",
    difficulty: "medium",
  },
  {
    id: 17,
    name: "Bubble Sort",
    problem: `
int[] arr = {5,2,8,1};
for(int i = 0; i < arr.length - 1; i++){
  for(int j = 0; j < arr.length - i - 1; j++){
    if(arr[j] > arr[j+1]){
      int temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}
System.out.println(Arrays.toString(arr));
  `,
    lang: "Java",
    difficulty: "medium",
  },
  {
    id: 18,
    name: "Linear Search",
    problem: `
int[] arr = {1,4,7,9};
int target = 7;
int index = -1;

for(int i = 0; i < arr.length; i++){
  if(arr[i] == target){
    index = i;
    break;
  }
}

System.out.println(index);
  `,
    lang: "Java",
    difficulty: "medium",
  },
  {
    id: 19,
    name: "Binary Search",
    problem: `
int[] arr = {1,2,3,4,5,6};
int target = 5;
int l = 0, r = arr.length - 1;

while(l <= r){
  int mid = (l + r) / 2;
  if(arr[mid] == target){
    System.out.println(mid);
    break;
  }
  if(arr[mid] < target){
    l = mid + 1;
  } else {
    r = mid - 1;
  }
}
  `,
    lang: "Java",
    difficulty: "medium",
  },
  {
    id: 20,
    name: "Matrix Addition",
    problem: `
int[][] a = {{1,2},{3,4}};
int[][] b = {{5,6},{7,8}};
int[][] res = new int[2][2];

for(int i = 0; i < 2; i++){
  for(int j = 0; j < 2; j++){
    res[i][j] = a[i][j] + b[i][j];
  }
}

System.out.println(Arrays.deepToString(res));
  `,
    lang: "Java",
    difficulty: "medium",
  },
  // ---------------- JAVA HARD ----------------
  {
    id: 21,
    name: "Longest Substring Without Repeating",
    problem: `
String s = "abcabcbb";
Set<Character> set = new HashSet<>();
int i = 0, j = 0, max = 0;

while(j < s.length()){
  if(!set.contains(s.charAt(j))){
    set.add(s.charAt(j));
    j++;
    max = Math.max(max, j - i);
  } else {
    set.remove(s.charAt(i));
    i++;
  }
}
System.out.println(max);
  `,
    lang: "Java",
    difficulty: "hard",
  },
  {
    id: 22,
    name: "Two Sum Problem",
    problem: `
int[] arr = {2,7,11,15};
int target = 9;
Map<Integer, Integer> map = new HashMap<>();

for(int i = 0; i < arr.length; i++){
  int diff = target - arr[i];
  if(map.containsKey(diff)){
    System.out.println(i + " " + map.get(diff));
    break;
  }
  map.put(arr[i], i);
}
  `,
    lang: "Java",
    difficulty: "hard",
  },
  {
    id: 23,
    name: "Rotate Matrix 90°",
    problem: `
int[][] m = {{1,2,3},{4,5,6},{7,8,9}};
int n = 3;

// transpose
for(int i = 0; i < n; i++){
  for(int j = i; j < n; j++){
    int temp = m[i][j];
    m[i][j] = m[j][i];
    m[j][i] = temp;
  }
}

// reverse rows
for(int i = 0; i < n; i++){
  for(int j = 0; j < n/2; j++){
    int temp = m[i][j];
    m[i][j] = m[i][n-j-1];
    m[i][n-j-1] = temp;
  }
}

System.out.println(Arrays.deepToString(m));
  `,
    lang: "Java",
    difficulty: "hard",
  },
  {
    id: 24,
    name: "Detect Cycle in Linked List",
    problem: `
public boolean hasCycle(ListNode head){
  ListNode slow = head, fast = head;
  while(fast != null && fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
    if(slow == fast) return true;
  }
  return false;
}
  `,
    lang: "Java",
    difficulty: "hard",
  },
  {
    id: 25,
    name: "Merge Two Sorted Arrays",
    problem: `
int[] a = {1,3,5};
int[] b = {2,4,6};
int[] result = new int[a.length + b.length];

int i=0, j=0, k=0;

while(i < a.length && j < b.length){
  if(a[i] < b[j]) result[k++] = a[i++];
  else result[k++] = b[j++];
}

while(i < a.length) result[k++] = a[i++];
while(j < b.length) result[k++] = b[j++];

System.out.println(Arrays.toString(result));
  `,
    lang: "Java",
    difficulty: "hard",
  },
  {
    id: 26,
    name: "QuickSort Algorithm",
    problem: `
int[] arr = {5,3,8,4,2};
quickSort(arr, 0, arr.length-1);

static void quickSort(int[] arr, int low, int high){
  if(low < high){
    int pi = partition(arr, low, high);
    quickSort(arr, low, pi-1);
    quickSort(arr, pi+1, high);
  }
}

static int partition(int[] arr, int low, int high){
  int pivot = arr[high];
  int i = low - 1;

  for(int j = low; j < high; j++){
    if(arr[j] < pivot){
      i++;
      int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
    }
  }

  int temp = arr[i+1]; arr[i+1] = arr[high]; arr[high] = temp;
  return i+1;
}
  `,
    lang: "Java",
    difficulty: "hard",
  },
  {
    id: 27,
    name: "Longest Palindromic Substring",
    problem: `
String s = "babad";
String res = "";

for(int i = 0; i < s.length(); i++){
  for(int j = i; j < s.length(); j++){
    String sub = s.substring(i, j+1);
    if(isPal(sub) && sub.length() > res.length()){
      res = sub;
    }
  }
}

System.out.println(res);
  `,
    lang: "Java",
    difficulty: "hard",
  },
  {
    id: 28,
    name: "DFS Traversal",
    problem: `
Map<Integer, List<Integer>> graph = new HashMap<>();
boolean[] visited = new boolean[100];

void dfs(int node){
  visited[node] = true;
  System.out.println(node);

  for(int next : graph.get(node)){
    if(!visited[next]) dfs(next);
  }
}
  `,
    lang: "Java",
    difficulty: "hard",
  },
  {
    id: 29,
    name: "Dijkstra’s Algorithm",
    problem: `
int V = 5;
int[][] graph = { ... };
int[] dist = new int[V];
boolean[] vis = new boolean[V];

Arrays.fill(dist, Integer.MAX_VALUE);
dist[0] = 0;

for(int i = 0; i < V; i++){
  int u = minDistance(dist, vis);
  vis[u] = true;

  for(int v = 0; v < V; v++){
    if(!vis[v] && graph[u][v] != 0 &&
      dist[u] + graph[u][v] < dist[v]){
      dist[v] = dist[u] + graph[u][v];
    }
  }
}
  `,
    lang: "Java",
    difficulty: "hard",
  },
  {
    id: 30,
    name: "N-Queens Backtracking",
    problem: `
int N = 4;
char[][] board = new char[N][N];

// backtracking function
boolean solve(int col){
  if(col == N) return true;
  for(int i = 0; i < N; i++){
    if(isSafe(i, col)){
      board[i][col] = 'Q';
      if(solve(col+1)) return true;
      board[i][col] = '.';
    }
  }
  return false;
}
  `,
    lang: "Java",
    difficulty: "hard",
  },
  // ---------------- JS EASY ----------------
  {
    id: 31,
    name: "Sum of Two Numbers",
    problem: `
let a = 10;
let b = 20;
let sum = a + b;
console.log("Sum:", sum);
  `,
    lang: "JavaScript",
    difficulty: "easy",
  },

  {
    id: 32,
    name: "Find Maximum",
    problem: `
let a = 15;
let b = 8;
console.log("Max:", a > b ? a : b);
  `,
    lang: "JavaScript",
    difficulty: "easy",
  },

  {
    id: 33,
    name: "Check Even or Odd",
    problem: `
let n = 7;
console.log(n % 2 === 0 ? "Even" : "Odd");
  `,
    lang: "JavaScript",
    difficulty: "easy",
  },

  {
    id: 34,
    name: "Reverse a String",
    problem: `
let str = "hello";
let rev = str.split("").reverse().join("");
console.log(rev);
  `,
    lang: "JavaScript",
    difficulty: "easy",
  },

  {
    id: 35,
    name: "Count Characters",
    problem: `
let str = "javascript";
console.log(str.length);
  `,
    lang: "JavaScript",
    difficulty: "easy",
  },

  {
    id: 36,
    name: "Swap Two Numbers",
    problem: `
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b);
  `,
    lang: "JavaScript",
    difficulty: "easy",
  },

  {
    id: 37,
    name: "Array Sum",
    problem: `
let arr = [1,2,3,4];
let sum = arr.reduce((a,b)=>a+b,0);
console.log(sum);
  `,
    lang: "JavaScript",
    difficulty: "easy",
  },

  {
    id: 38,
    name: "Find Largest Number in Array",
    problem: `
let arr = [4,1,9,2];
console.log(Math.max(...arr));
  `,
    lang: "JavaScript",
    difficulty: "easy",
  },

  {
    id: 39,
    name: "Check Substring",
    problem: `
let str = "hello world";
console.log(str.includes("world"));
  `,
    lang: "JavaScript",
    difficulty: "easy",
  },

  {
    id: 40,
    name: "Filter Even Numbers",
    problem: `
let arr = [1,2,3,4,5,6];
let evens = arr.filter(n => n % 2 === 0);
console.log(evens);
  `,
    lang: "JavaScript",
    difficulty: "easy",
  },
  // ---------------- JS MEDIUM ----------------
  {
    id: 41,
    name: "Remove Duplicates from Array",
    problem: `
let arr = [1,2,2,3,4,4,5];
let unique = [...new Set(arr)];
console.log(unique);
  `,
    lang: "JavaScript",
    difficulty: "medium",
  },

  {
    id: 42,
    name: "Count Vowels",
    problem: `
let str = "education";
let count = 0;
for(let c of str){
  if("aeiou".includes(c)) count++;
}
console.log(count);
  `,
    lang: "JavaScript",
    difficulty: "medium",
  },

  {
    id: 43,
    name: "Palindrome Check",
    problem: `
let str = "level";
let isPal = str === str.split("").reverse().join("");
console.log(isPal);
  `,
    lang: "JavaScript",
    difficulty: "medium",
  },

  {
    id: 44,
    name: "Find Missing Number",
    problem: `
let arr = [1,2,4,5];
let n = 5;
let expected = n*(n+1)/2;
let actual = arr.reduce((a,b)=>a+b,0);
console.log(expected - actual);
  `,
    lang: "JavaScript",
    difficulty: "medium",
  },

  {
    id: 45,
    name: "Sort Array Ascending",
    problem: `
let arr = [5,2,9,1];
arr.sort((a,b)=>a-b);
console.log(arr);
  `,
    lang: "JavaScript",
    difficulty: "medium",
  },

  {
    id: 46,
    name: "Factorial of Number",
    problem: `
let n = 5;
let fact = 1;
for(let i=1;i<=n;i++){
  fact *= i;
}
console.log(fact);
  `,
    lang: "JavaScript",
    difficulty: "medium",
  },

  {
    id: 47,
    name: "Fibonacci Series",
    problem: `
let n = 7;
let a = 0, b = 1;
for(let i=0;i<n;i++){
  console.log(a);
  [a,b] = [b, a+b];
}
  `,
    lang: "JavaScript",
    difficulty: "medium",
  },

  {
    id: 48,
    name: "Second Largest Number in Array",
    problem: `
let arr = [10,20,30,15];
let sorted = [...new Set(arr)].sort((a,b)=>b-a);
console.log(sorted[1]);
  `,
    lang: "JavaScript",
    difficulty: "medium",
  },

  {
    id: 49,
    name: "Capitalize Each Word",
    problem: `
let str = "hello world from javascript";
let result = str.split(" ").map(
  word => word[0].toUpperCase() + word.slice(1)
).join(" ");
console.log(result);
  `,
    lang: "JavaScript",
    difficulty: "medium",
  },

  {
    id: 50,
    name: "Find Index of Target",
    problem: `
let arr = [3,6,8,10];
let target = 8;
console.log(arr.indexOf(target));
  `,
    lang: "JavaScript",
    difficulty: "medium",
  },
  // ---------------- JS HARD ----------------
  {
    id: 51,
    name: "Two Sum",
    problem: `
let arr = [2,7,11,15];
let target = 9;
let map = {};

for(let i=0;i<arr.length;i++){
  let diff = target - arr[i];
  if(map[diff] !== undefined){
    console.log(i, map[diff]);
    break;
  }
  map[arr[i]] = i;
}
  `,
    lang: "JavaScript",
    difficulty: "hard",
  },

  {
    id: 52,
    name: "Longest Substring Without Repeating",
    problem: `
let s = "abcabcbb";
let set = new Set();
let i=0, j=0, max=0;

while(j < s.length){
  if(!set.has(s[j])){
    set.add(s[j]);
    j++;
    max = Math.max(max, j-i);
  } else {
    set.delete(s[i]);
    i++;
  }
}
console.log(max);
  `,
    lang: "JavaScript",
    difficulty: "hard",
  },

  {
    id: 53,
    name: "Binary Search",
    problem: `
let arr = [1,2,3,4,5,6];
let target = 4;

let l = 0, r = arr.length-1;

while(l <= r){
  let mid = Math.floor((l+r)/2);
  if(arr[mid] === target){
    console.log(mid);
    break;
  }
  if(arr[mid] < target) l = mid+1;
  else r = mid-1;
}
  `,
    lang: "JavaScript",
    difficulty: "hard",
  },

  {
    id: 54,
    name: "Rotate Array",
    problem: `
let arr = [1,2,3,4,5];
let k = 2;
k = k % arr.length;
let rotated = [...arr.slice(-k), ...arr.slice(0, -k)];
console.log(rotated);
  `,
    lang: "JavaScript",
    difficulty: "hard",
  },

  {
    id: 55,
    name: "Deep Copy Object",
    problem: `
let obj = {a:1, b:{c:2}};
let copy = JSON.parse(JSON.stringify(obj));
console.log(copy);
  `,
    lang: "JavaScript",
    difficulty: "hard",
  },

  {
    id: 56,
    name: "Flatten Nested Array",
    problem: `
let arr = [1,[2,[3,4],5],6];
let flat = arr.flat(Infinity);
console.log(flat);
  `,
    lang: "JavaScript",
    difficulty: "hard",
  },

  {
    id: 57,
    name: "Debounce Function",
    problem: `
function debounce(fn, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this,args), delay);
  };
}
  `,
    lang: "JavaScript",
    difficulty: "hard",
  },

  {
    id: 58,
    name: "Throttle Function",
    problem: `
function throttle(fn, limit){
  let last = 0;
  return function(...args){
    let now = Date.now();
    if(now - last >= limit){
      last = now;
      fn.apply(this, args);
    }
  };
}
  `,
    lang: "JavaScript",
    difficulty: "hard",
  },

  {
    id: 59,
    name: "Group By Property",
    problem: `
let users = [
  {role:"admin",name:"A"},
  {role:"user",name:"B"},
  {role:"admin",name:"C"}
];

let grouped = users.reduce((acc, curr)=>{
  acc[curr.role] = acc[curr.role] || [];
  acc[curr.role].push(curr);
  return acc;
}, {});

console.log(grouped);
  `,
    lang: "JavaScript",
    difficulty: "hard",
  },

  {
    id: 60,
    name: "LRU Cache",
    problem: `
class LRUCache{
  constructor(size){ 
    this.size = size;
    this.map = new Map();
  }
  get(key){
    if(!this.map.has(key)) return -1;
    let val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key,val);
    return val;
  }
  put(key,val){
    if(this.map.has(key)) this.map.delete(key);
    else if(this.map.size === this.size){
      let first = this.map.keys().next().value;
      this.map.delete(first);
    }
    this.map.set(key,val);
  }
}

let cache = new LRUCache(2);
cache.put(1,100);
cache.put(2,200);
cache.get(1);
cache.put(3,300);
  `,
    lang: "JavaScript",
    difficulty: "hard",
  },
  // C++ EASY
  {
    id: 31,
    name: "Print Hello World",
    problem: `
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World";
  return 0;
}
  `,
    lang: "C++",
    difficulty: "easy",
  },
  {
    id: 32,
    name: "Sum of Two Numbers",
    problem: `
#include <iostream>
using namespace std;

int main() {
  int a = 10, b = 20;
  cout << "Sum = " << a + b;
  return 0;
}
  `,
    lang: "C++",
    difficulty: "easy",
  },
  {
    id: 33,
    name: "Find Maximum",
    problem: `
#include <iostream>
using namespace std;

int main() {
  int a = 15, b = 25;
  cout << "Max = " << (a > b ? a : b);
  return 0;
}
  `,
    lang: "C++",
    difficulty: "easy",
  },
  {
    id: 34,
    name: "Check Even or Odd",
    problem: `
#include <iostream>
using namespace std;

int main() {
  int n = 7;
  if(n % 2 == 0) cout << "Even";
  else cout << "Odd";
}
  `,
    lang: "C++",
    difficulty: "easy",
  },
  {
    id: 35,
    name: "Square of a Number",
    problem: `
#include <iostream>
using namespace std;

int main() {
  int n = 6;
  cout << "Square = " << n * n;
}
  `,
    lang: "C++",
    difficulty: "easy",
  },
  {
    id: 36,
    name: "Simple Interest",
    problem: `
#include <iostream>
using namespace std;

int main() {
  float p = 1000, r = 5, t = 2;
  float si = (p * r * t) / 100;
  cout << "SI = " << si;
}
  `,
    lang: "C++",
    difficulty: "easy",
  },
  {
    id: 37,
    name: "Area of Circle",
    problem: `
#include <iostream>
using namespace std;

int main() {
  float r = 7;
  cout << "Area = " << 3.14 * r * r;
}
  `,
    lang: "C++",
    difficulty: "easy",
  },
  {
    id: 38,
    name: "Swap Two Numbers",
    problem: `
#include <iostream>
using namespace std;

int main() {
  int a = 10, b = 20, temp;
  temp = a;
  a = b;
  b = temp;
  cout << a << " " << b;
}
  `,
    lang: "C++",
    difficulty: "easy",
  },
  {
    id: 39,
    name: "Print 1 to 10",
    problem: `
#include <iostream>
using namespace std;

int main() {
  for(int i = 1; i <= 10; i++){
    cout << i << " ";
  }
}
  `,
    lang: "C++",
    difficulty: "easy",
  },
  {
    id: 40,
    name: "Factorial of 5",
    problem: `
#include <iostream>
using namespace std;

int main() {
  int fact = 1;
  for(int i = 1; i <= 5; i++) fact *= i;
  cout << fact;
}
  `,
    lang: "C++",
    difficulty: "easy",
  },
  // C++ MEDIUM
  {
    id: 41,
    name: "Reverse a Number",
    problem: `
#include <iostream>
using namespace std;

int main() {
  int n = 1234, rev = 0;
  while(n > 0){
    rev = rev * 10 + n % 10;
    n /= 10;
  }
  cout << rev;
}
  `,
    lang: "C++",
    difficulty: "medium",
  },
  {
    id: 42,
    name: "Fibonacci Series",
    problem: `
#include <iostream>
using namespace std;

int main() {
  int a = 0, b = 1, n = 10;
  for(int i = 0; i < n; i++){
    cout << a << " ";
    int temp = b;
    b = a + b;
    a = temp;
  }
}
  `,
    lang: "C++",
    difficulty: "medium",
  },
  {
    id: 43,
    name: "Check Prime",
    problem: `
#include <iostream>
using namespace std;

int main() {
  int n = 29, flag = 1;
  for(int i = 2; i * i <= n; i++)
    if(n % i == 0) flag = 0;

  if(flag) cout << "Prime";
  else cout << "Not Prime";
}
  `,
    lang: "C++",
    difficulty: "medium",
  },
  {
    id: 44,
    name: "Armstrong Number",
    problem: `
#include <iostream>
#include <math.h>
using namespace std;

int main() {
  int n = 153, sum = 0, temp = n;
  while(temp > 0){
    int d = temp % 10;
    sum += pow(d, 3);
    temp /= 10;
  }
  cout << (sum == n ? "Armstrong" : "Not Armstrong");
}
  `,
    lang: "C++",
    difficulty: "medium",
  },
  {
    id: 45,
    name: "Sum of Array",
    problem: `
#include <iostream>
using namespace std;

int main() {
  int arr[] = {1,2,3,4,5}, sum = 0;
  for(int i : arr) sum += i;
  cout << sum;
}
  `,
    lang: "C++",
    difficulty: "medium",
  },
  {
    id: 46,
    name: "Find Largest in Array",
    problem: `
#include <iostream>
using namespace std;

int main() {
  int arr[] = {10, 50, 30, 20};
  int max = arr[0];
  for(int i : arr) if(i > max) max = i;
  cout << max;
}
  `,
    lang: "C++",
    difficulty: "medium",
  },
  {
    id: 47,
    name: "String Length",
    problem: `
#include <iostream>
using namespace std;

int main() {
  string s = "hello";
  cout << s.length();
}
  `,
    lang: "C++",
    difficulty: "medium",
  },
  {
    id: 48,
    name: "Count Vowels in String",
    problem: `
#include <iostream>
using namespace std;

int main() {
  string s = "education";
  int count = 0;
  for(char c : s)
    if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u') count++;
  cout << count;
}
  `,
    lang: "C++",
    difficulty: "medium",
  },
  {
    id: 49,
    name: "Matrix Addition",
    problem: `
#include <iostream>
using namespace std;

int main() {
  int a[2][2] = {{1,2},{3,4}};
  int b[2][2] = {{5,6},{7,8}};
  int c[2][2];

  for(int i=0;i<2;i++)
    for(int j=0;j<2;j++)
      c[i][j] = a[i][j] + b[i][j];

  for(auto &row : c){
    for(int val : row) cout << val << " ";
    cout << endl;
  }
}
  `,
    lang: "C++",
    difficulty: "medium",
  },
  {
    id: 50,
    name: "Sort Array (Bubble Sort)",
    problem: `
#include <iostream>
using namespace std;

int main() {
  int arr[] = {5,2,9,1,3};
  int n = 5;

  for(int i=0;i<n-1;i++)
    for(int j=0;j<n-i-1;j++)
      if(arr[j] > arr[j+1])
        swap(arr[j], arr[j+1]);

  for(int i : arr) cout << i << " ";
}
  `,
    lang: "C++",
    difficulty: "medium",
  },
  // C++ HARD
  {
    id: 51,
    name: "Binary Search",
    problem: `
int binarySearch(int arr[], int n, int target) {
  int l = 0, r = n - 1;
  while(l <= r){
    int mid = (l + r) / 2;
    if(arr[mid] == target) return mid;
    else if(arr[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
}
  `,
    lang: "C++",
    difficulty: "hard",
  },
  {
    id: 52,
    name: "Quick Sort",
    problem: `
int partition(int arr[], int low, int high){
  int pivot = arr[high];
  int i = low - 1;

  for(int j = low; j < high; j++){
    if(arr[j] < pivot){
      i++;
      swap(arr[i], arr[j]);
    }
  }
  swap(arr[i + 1], arr[high]);
  return i + 1;
}

void quickSort(int arr[], int low, int high){
  if(low < high){
    int pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}
  `,
    lang: "C++",
    difficulty: "hard",
  },
  {
    id: 53,
    name: "Merge Sort",
    problem: `
void merge(int arr[], int l, int m, int r){
  int n1 = m - l + 1;
  int n2 = r - m;

  int L[n1], R[n2];
  for(int i=0;i<n1;i++) L[i]=arr[l+i];
  for(int j=0;j<n2;j++) R[j]=arr[m+1+j];

  int i=0,j=0,k=l;
  while(i<n1 && j<n2){
    if(L[i] <= R[j]) arr[k++]=L[i++];
    else arr[k++]=R[j++];
  }
  while(i<n1) arr[k++]=L[i++];
  while(j<n2) arr[k++]=R[j++];
}

void mergeSort(int arr[], int l, int r){
  if(l < r){
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);
    merge(arr, l, m, r);
  }
}
  `,
    lang: "C++",
    difficulty: "hard",
  },
  {
    id: 54,
    name: "Longest Increasing Subsequence",
    problem: `
int LIS(vector<int> &nums) {
  vector<int> dp;
  for(int x : nums){
    auto it = lower_bound(dp.begin(), dp.end(), x);
    if(it == dp.end()) dp.push_back(x);
    else *it = x;
  }
  return dp.size();
}
  `,
    lang: "C++",
    difficulty: "hard",
  },
  {
    id: 55,
    name: "Detect Cycle in Graph (DFS)",
    problem: `
bool dfs(int node, vector<int>& vis, vector<int>& path, vector<int> adj[]){
  vis[node] = 1;
  path[node] = 1;

  for(int x : adj[node]){
    if(!vis[x]){
      if(dfs(x, vis, path, adj)) return true;
    }
    else if(path[x]) return true;
  }

  path[node] = 0;
  return false;
}
  `,
    lang: "C++",
    difficulty: "hard",
  },
  {
    id: 56,
    name: "Dijkstra’s Algorithm",
    problem: `
vector<int> dijkstra(int n, vector<vector<int>> &adj, int src){
  vector<int> dist(n, 1e9);
  priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;

  dist[src]=0;
  pq.push({0, src});

  while(!pq.empty()){
    auto [d,u] = pq.top(); pq.pop();
    for(auto &edge : adj[u]){
      int v = edge[0], w = edge[1];
      if(dist[v] > d + w){
        dist[v] = d + w;
        pq.push({dist[v], v});
      }
    }
  }
  return dist;
}
  `,
    lang: "C++",
    difficulty: "hard",
  },
  {
    id: 57,
    name: "Knapsack (DP)",
    problem: `
int knapsack(int W, vector<int>& wt, vector<int>& val, int n){
  int dp[n+1][W+1];

  for(int i=0;i<=n;i++){
    for(int w=0;w<=W;w++){
      if(i==0 || w==0) dp[i][w]=0;
      else if(wt[i-1] <= w)
        dp[i][w] = max(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w]);
      else dp[i][w] = dp[i-1][w];
    }
  }
  return dp[n][W];
}
  `,
    lang: "C++",
    difficulty: "hard",
  },
  {
    id: 58,
    name: "Trie Insert & Search",
    problem: `
struct TrieNode {
  TrieNode* children[26];
  bool isEnd = false;
};

void insert(TrieNode* root, string word){
  TrieNode* curr = root;
  for(char c : word){
    int i = c - 'a';
    if(!curr->children[i]) curr->children[i] = new TrieNode();
    curr = curr->children[i];
  }
  curr->isEnd = true;
}

bool search(TrieNode* root, string word){
  TrieNode* curr = root;
  for(char c : word){
    int i = c - 'a';
    if(!curr->children[i]) return false;
    curr = curr->children[i];
  }
  return curr->isEnd;
}
  `,
    lang: "C++",
    difficulty: "hard",
  },
  {
    id: 59,
    name: "Topological Sort (DFS)",
    problem: `
void dfs(int node, vector<int> adj[], vector<int>& vis, stack<int>& st){
  vis[node] = 1;
  for(int x : adj[node])
    if(!vis[x]) dfs(x, adj, vis, st);
  st.push(node);
}

vector<int> topoSort(int n, vector<int> adj[]){
  vector<int> vis(n,0);
  stack<int> st;

  for(int i=0;i<n;i++)
    if(!vis[i]) dfs(i, adj, vis, st);

  vector<int> res;
  while(!st.empty()){
    res.push_back(st.top());
    st.pop();
  }
  return res;
}
  `,
    lang: "C++",
    difficulty: "hard",
  },
  {
    id: 60,
    name: "Longest Common Subsequence (DP)",
    problem: `
int LCS(string a, string b){
  int n = a.size(), m = b.size();
  int dp[n+1][m+1];

  for(int i=0;i<=n;i++){
    for(int j=0;j<=m;j++){
      if(i==0 || j==0) dp[i][j] = 0;
      else if(a[i-1] == b[j-1])
        dp[i][j] = 1 + dp[i-1][j-1];
      else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[n][m];
}
  `,
    lang: "C++",
    difficulty: "hard",
  },
  // -------------- SQL EASY --------------
  {
    id: 91,
    name: "Select All Employees",
    problem: `
SELECT * FROM employees;
  `,
    lang: "SQL",
    difficulty: "easy",
  },
  {
    id: 92,
    name: "Select Employee Names",
    problem: `
SELECT name FROM employees;
  `,
    lang: "SQL",
    difficulty: "easy",
  },
  {
    id: 93,
    name: "Filter by Department",
    problem: `
SELECT * 
FROM employees
WHERE department = 'Sales';
  `,
    lang: "SQL",
    difficulty: "easy",
  },
  {
    id: 94,
    name: "Order Employees by Salary",
    problem: `
SELECT name, salary
FROM employees
ORDER BY salary DESC;
  `,
    lang: "SQL",
    difficulty: "easy",
  },
  {
    id: 95,
    name: "Count Total Employees",
    problem: `
SELECT COUNT(*)
FROM employees;
  `,
    lang: "SQL",
    difficulty: "easy",
  },
  {
    id: 96,
    name: "Select Employees with Salary > 50000",
    problem: `
SELECT *
FROM employees
WHERE salary > 50000;
  `,
    lang: "SQL",
    difficulty: "easy",
  },
  {
    id: 97,
    name: "Find Unique Departments",
    problem: `
SELECT DISTINCT department
FROM employees;
  `,
    lang: "SQL",
    difficulty: "easy",
  },
  {
    id: 98,
    name: "Limit Output",
    problem: `
SELECT *
FROM employees
LIMIT 5;
  `,
    lang: "SQL",
    difficulty: "easy",
  },
  {
    id: 99,
    name: "Select Names in Alphabetical Order",
    problem: `
SELECT name
FROM employees
ORDER BY name ASC;
  `,
    lang: "SQL",
    difficulty: "easy",
  },
  {
    id: 100,
    name: "Employees with Age Above 30",
    problem: `
SELECT *
FROM employees
WHERE age > 30;
  `,
    lang: "SQL",
    difficulty: "easy",
  },
  // -------------- SQL MEDIUM --------------
  {
    id: 101,
    name: "Find Second Highest Salary",
    problem: `
SELECT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
  `,
    lang: "SQL",
    difficulty: "medium",
  },
  {
    id: 102,
    name: "Total Salary by Department",
    problem: `
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department;
  `,
    lang: "SQL",
    difficulty: "medium",
  },
  {
    id: 103,
    name: "Average Age of Employees",
    problem: `
SELECT AVG(age) AS average_age
FROM employees;
  `,
    lang: "SQL",
    difficulty: "medium",
  },
  {
    id: 104,
    name: "Employees Joined After 2020",
    problem: `
SELECT *
FROM employees
WHERE join_date > '2020-01-01';
  `,
    lang: "SQL",
    difficulty: "medium",
  },
  {
    id: 105,
    name: "Count Employees by Department",
    problem: `
SELECT department, COUNT(*) AS count
FROM employees
GROUP BY department;
  `,
    lang: "SQL",
    difficulty: "medium",
  },
  {
    id: 106,
    name: "Find Employees Without Bonus",
    problem: `
SELECT *
FROM employees
WHERE bonus IS NULL;
  `,
    lang: "SQL",
    difficulty: "medium",
  },
  {
    id: 107,
    name: "Find Highest Paid Employee in IT",
    problem: `
SELECT *
FROM employees
WHERE department = 'IT'
ORDER BY salary DESC
LIMIT 1;
  `,
    lang: "SQL",
    difficulty: "medium",
  },
  {
    id: 108,
    name: "Employees Name Starting With A",
    problem: `
SELECT *
FROM employees
WHERE name LIKE 'A%';
  `,
    lang: "SQL",
    difficulty: "medium",
  },
  {
    id: 109,
    name: "Employees Paid Between 50k and 80k",
    problem: `
SELECT *
FROM employees
WHERE salary BETWEEN 50000 AND 80000;
  `,
    lang: "SQL",
    difficulty: "medium",
  },
  {
    id: 110,
    name: "Group by Age and Count",
    problem: `
SELECT age, COUNT(*) AS people
FROM employees
GROUP BY age;
  `,
    lang: "SQL",
    difficulty: "medium",
  },
  // -------------- SQL HARD --------------
  {
    id: 111,
    name: "Employees Earning More Than Their Manager",
    problem: `
SELECT e.name
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;
  `,
    lang: "SQL",
    difficulty: "hard",
  },
  {
    id: 112,
    name: "Top 3 Salaries",
    problem: `
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 3;
  `,
    lang: "SQL",
    difficulty: "hard",
  },
  {
    id: 113,
    name: "Find Duplicate Emails",
    problem: `
SELECT email, COUNT(*)
FROM employees
GROUP BY email
HAVING COUNT(*) > 1;
  `,
    lang: "SQL",
    difficulty: "hard",
  },
  {
    id: 114,
    name: "Department With Max Average Salary",
    problem: `
SELECT department
FROM employees
GROUP BY department
ORDER BY AVG(salary) DESC
LIMIT 1;
  `,
    lang: "SQL",
    difficulty: "hard",
  },
  {
    id: 115,
    name: "Employee Count per Manager",
    problem: `
SELECT manager_id, COUNT(*) AS reportees
FROM employees
GROUP BY manager_id;
  `,
    lang: "SQL",
    difficulty: "hard",
  },
  {
    id: 116,
    name: "Find Nth Highest Salary (Using Subquery)",
    problem: `
SELECT salary
FROM employees e1
WHERE 3 = (
  SELECT COUNT(DISTINCT salary)
  FROM employees e2
  WHERE e2.salary > e1.salary
);
  `,
    lang: "SQL",
    difficulty: "hard",
  },
  {
    id: 117,
    name: "Employees Who Never Got a Bonus",
    problem: `
SELECT *
FROM employees e
LEFT JOIN bonus b ON e.id = b.emp_id
WHERE b.emp_id IS NULL;
  `,
    lang: "SQL",
    difficulty: "hard",
  },
  {
    id: 118,
    name: "Find Department Having More Than 5 Employees",
    problem: `
SELECT department
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
  `,
    lang: "SQL",
    difficulty: "hard",
  },
  {
    id: 119,
    name: "Employees With Same Salary",
    problem: `
SELECT salary, COUNT(*)
FROM employees
GROUP BY salary
HAVING COUNT(*) > 1;
  `,
    lang: "SQL",
    difficulty: "hard",
  },
  {
    id: 120,
    name: "Join Employees With Projects",
    problem: `
SELECT e.name, p.project_name
FROM employees e
JOIN projects p ON e.id = p.emp_id;
  `,
    lang: "SQL",
    difficulty: "hard",
  },
];
