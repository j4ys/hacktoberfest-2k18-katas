export const listFiles = (data, f) => {
  if (data != null && typeof data == "object" && !(data === "undefined")) {
    if (f) {
      return getFilesWithFolder(data, f);
    } else {
      return getFiles(data);
    }
  } else {
    throw "Invalid Arguments!";
  }
};

const fakedata = {
  dir: "app",
  files: [
    "index.html",
    {
      dir: "js",
      files: [
        "main.js",
        "app.js",
        "misc.js",
        {
          dir: "vendor",
          files: ["jquery.js", "react.js"]
        }
      ]
    },
    {
      dir: "css",
      files: ["styles.css", "main.css"]
    }
  ]
};

function getFiles(data) {
  let files = [];
  files = data.files.map(f => {
    if (typeof f === "string") {
      return f;
    } else if (typeof f === "object") {
      return getFiles(f);
    }
  });
  files = [].concat.apply([], files);
  return files;
}

function getFilesWithFolder(data, f) {
  let files = [];
  if (data.dir === f) {
    return getFiles(data);
  } else {
    data.files.forEach(e => {
      if (typeof e === "object") {
        files = files.concat(getFilesWithFolder(e, f));
      }
    });
  }
  return files;
}
