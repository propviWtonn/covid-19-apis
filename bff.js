const fs = require('fs');
const sh = require('shelljs');
const crypto = require('crypto');

const runtime = {
  pm: ['node_modules/@postman/pm-tech/index.js'],
};

if (process.env.NPM_TOKEN) {
  sh.exec('mkdir -p public');

  Object.keys(runtime).forEach(key => {
    const fileBuffer = fs.readFileSync(runtime[key][0]);
    const hashSum = crypto.createHash('sha1');
    const ext = runtime[key][0]
      .split('/')
      .pop()
      .split('.')
      .pop();

    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');

    runtime[key].push(`_${hex}.${ext}`);

    sh.exec(`cp ${runtime[key][0]} public/${runtime[key][1]}`);
  });
}

const prefetch = async () => {
  const script =
    (process.env.NPM_TOKEN &&
      `
      function load(src, cb) {
        var e = document.createElement('script');
        e.src = src;
        e.async = true;
        e.onreadystatechange = function(){
          if (this.readyState === 'complete' || this.readyState === 'loaded') {
            if (typeof cb === 'function') {
              cb();
            }
          }
        };
        e.onload = cb;
        document.head.appendChild(e);
      }

      if (!window.pm) {
        load('/${runtime.pm[1]}', function(){
          window.pm.setScalp({
            property: 'covid-19-apis'
          });
        });
      }
    `) ||
    `
      console.info('Postman OSS');
    `;

  fs.writeFile('bff.json', JSON.stringify({ script }), err => {
    if (err) {
      throw err;
    }
  });
};

prefetch();
