#!/usr/bin/env node

const fs = require("fs");
const svg2png = require("svg2png");
const path = require('path');
const icongen = require('icon-gen');

let jobs = [
  {
    type:'cordova',
    inputFile: 'assets/icons/round/NC-Round.svg',
    outputPath: 'www/icons/android/',
    sizes: [36,48,72,96,144,192],
    fileName: 'NC-Round-',
    append: ['ldpi','mdpi','hdpi','xhdpi','xxhdpi','xxxhdpi']
  },
  {
    type:'cordova',
    inputFile: 'assets/icons/square/NC-Square.svg',
    outputPath: 'www/icons/ios/',
    sizes: [76,152,40,80,72,144,50,100,167],
    fileName: 'NC-Square-',
    append: 'size'

  },
  {
    type:'electron',
    inputFile: 'assets/icons/round/NC-Round.svg',
    outputPath: 'assets/icons/round',
    options: {
      modes: ['ico', 'icns'], //all
      names: {
        ico: 'round',
        icns: 'round'
      },
      report: true,
    }
  }
];

parseJobs(jobs);

function parseJobs(jobs) {
  for (let job of jobs) {
    if (job.type === "electron") {
      generateElectronIcons(job);
    } else if (job.type === "cordova") {
      generateCordovaIcons(job);
    }
  }

}

function generateElectronIcons(job) {
  icongen ( job.inputFile, job.outputPath, job.options )
  .then( (results)=> {
    console.log(results);
  })
  .catch( (err)=> {
    console.log(err);
  })
}

function generateCordovaIcons(job) {
  const buffer = fs.readFileSync(job.inputFile);
  for (let size of job.sizes) {

    if (!buffer) {
      new Error('Faild to write the image, ' + job.size + 'x' + job.size);
      return;
    }

    let dest = job.fileName;

    if (job.append === 'size') {
      dest = dest + size
    } else if (job.append.length) {
      dest = dest + job.append[job.sizes.indexOf(size)];
    }

    dest = dest + '.png';

    dest = path.join(job.outputPath + dest);

    svg2png(buffer, { width: size, height: size }).then(output => {
      fs.writeFile(dest, output, function (err) {
        if (err) {
          console.log(err);
          return;
        }
      });
    });
  }
}
