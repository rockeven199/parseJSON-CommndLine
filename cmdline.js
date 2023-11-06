const { createInterface } = require("readline");

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "请输入文件夹路径：[格式：文件目录,navigate或其他名字] \n效果：(http://127.0.0.1:3000/[navigate或其他文字]/[文件名]):",
  (a) => {
    readline.close();
  }
);
