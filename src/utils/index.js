import { cloud } from 'remax/wechat';

function request(path, params) {
  return new Promise(function (resolve, reject) {
    cloud
      .callFunction({
        name: 'api',
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
