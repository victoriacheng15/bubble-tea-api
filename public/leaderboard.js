(function () {
  const lists = [...document.querySelectorAll('.leaderboard-list')];
  const leadingBackground = [...document.querySelectorAll('.leading-background')];
  const values = [];
  lists.forEach((list) => values.push(list.innerText.slice(-1)));
  const totalSum = values.reduce((acc, curr) => acc + +curr, 0);
  const getPercentage = values.map(((num) => (num / totalSum) * 100));
  leadingBackground.forEach((elem, index) => elem.style.width = `${getPercentage[index]}%`);
}());
