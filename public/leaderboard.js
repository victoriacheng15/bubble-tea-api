(function () {
  const lists = [...document.querySelectorAll('.leaderboard-list')];
  const leadingBackground = [...document.querySelectorAll('.leading-background')];
  const values = [];
  lists.forEach((list) => {
    const regex = /[a-z\W]/gi;
    const num = list.innerText.replace(regex, '');
    values.push(num);
  });
  const totalSum = values.reduce((acc, curr) => acc + +curr, 0);
  const getPercentage = [...values].map(((num) => ((num / totalSum) * 100).toFixed(2)));
  leadingBackground.forEach((elem, index) => elem.style.width = `${getPercentage[index]}%`);
}());
