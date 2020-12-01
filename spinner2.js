let arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
    if (i === arr.length - 1) {
      process.stdout.write('\n');
    }
  }, 100 + (i * 200));
};







