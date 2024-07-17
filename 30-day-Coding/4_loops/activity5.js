// continue and break

// skip 5 by continue
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// break for 7
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 7) {
    break;
  }
}
