const { readdirSync, existsSync, mkdir, mkdirSync, writeFile } = require("fs");
const path = require("path");
const { createInterface } = require("readline");

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * @param {*} context 写入的内容
 */
function savsAsFile(data) {
  if (existsSync("outJson")) {
    writeFile("./outJson/outJson.json", JSON.stringify(data), () => {});
  } else {
    mkdirSync("outJson");
  }
}

/**
 *
 * @param {*} dirUrl 文件夹路径
 * @param {*} IpAddress IP地址路径
 * @param {*} navigateLevel navigate路径
 * @param {*} saveAsJSONFile 是否保存为文件
 */
function parseToJSON(
  dirUrl,
  IpAddress = "http://127.0.0.1:3000",
  navigateLevel,
  saveAsJSONFile = false
) {
  let strJSON = { swiperIcon: [] };
  let temp = {};
  let result = readdirSync(dirUrl, { encoding: "utf-8" });
  result.forEach((value, index) => {
    temp = {};
    temp.id = index;
    temp.url = IpAddress + "/" + navigateLevel + "/" + value;
    strJSON.swiperIcon.push(temp);
  });

  if (saveAsJSONFile == true) {
    if (existsSync("outJson")) {
      writeFile("outJson.json");
    } else {
      mkdirSync("outJson");
    }
  }
  return strJSON;
}

readline.question(
  "请输入文件夹路径：[格式：图片所在目录,IP地址,navigate或其他名字,是否导出为文件]:",
  (a) => {
    let b = a.split(",");
    let c = parseToJSON(b[0], b[1], b[2]);
    console.log(c);
    savsAsFile(c);
    readline.close();
  }
);
