const spinChars = ['|', '/', '-', '\\'];

for (let i = 0; i < 9001; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinChars[i % spinChars.length]}      `);
  }, 100*i);
}