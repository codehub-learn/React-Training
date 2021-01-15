// const obj = {x: 3.6, y: 7.8}
// makeCalculation(obj)
function makeCalculation({x, y: d, z = 4}) {
  return Math.floor((x + d + z) / 3);
}

// this is the same as
function makeCalculation(obj) {
  const {x, y: d, z = 4} = obj;
  return Math.floor((x + d + z) / 3);
}
// which is the same as
function makeCalculation(obj) {
  const x = obj.x;
  const d = obj.y;
  const z = obj.z === undefined ? 4 : obj.z;
  return Math.floor((x + d + z) / 3);
}

// in React:
function UserGitHubImg({username = 'ghost', ...props}) {
  return <img src={`https://github.com/${username}.png`} {...props} />;
}

function nestedArrayAndObject() {
  const info = {
    title: 'Once Upon a Time',
    protagonist: {
      name: 'Emma Swan',
      enemies: [
        {name: 'Regina Mills', title: 'Evil Queen'},
        {name: 'Cora Mills', title: 'Queen of Hearts'},
        {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
        {name: 'Zelena', title: 'The Wicked Witch'},
      ]
    }
  };

  const {title, protagonist: {name: protagonistName, enemies}} = info;
  const {title: enemyTitle, name: enemyName } = enemies[3];


  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`;
}