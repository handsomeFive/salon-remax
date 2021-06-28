import { cloud } from 'remax/wechat';

const functionName = {
  development: 'api-qa',
  production: 'api',
}[process.env.NODE_ENV];

function request(path, params) {
  return new Promise(function (resolve, reject) {
    cloud
      .callFunction({
        name: functionName,
        data: { url: path, data: params },
      })
      .then(({ result }) => {
        if (result.code === 200) {
          resolve(result);
        } else {
          reject(result);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { request };
