const { readFile } = require('fs');

function getFile() {
  return new Promise((resolve, reject) => {
    readFile('./config.txt', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function isAdmin(event) {
  try {
    const data = await getFile();
    const list = JSON.parse(data.toString());
    const { name, password } = event;
    const isExit = list.some(
      (item) => item.name === name && password === item.password
    );
    if (isExit) {
      return { code: 200, data: { name } };
    } else {
      return { code: 500, message: '账号/密码错误' };
    }
  } catch (error) {
    return { code: 500, message: error };
  }
}

module.exports = { '/auth': isAdmin };
