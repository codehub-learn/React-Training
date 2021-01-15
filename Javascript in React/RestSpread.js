const arr = [5, 6, 8, 4, 9];
Math.max(...arr);
// is the same as
Math.max.apply(null, arr);

const obj1 = {
  a: 'a from obj1',
  b: 'b from obj1',
  c: 'c from obj1',
  d: {
    e: 'e from obj1',
    f: 'f from obj1',
  },
};
const obj2 = {
  b: 'b from obj2',
  c: 'c from obj2',
  d: {
    g: 'g from obj2',
    h: 'g from obj2',
  },
};
console.log({...obj1, ...obj2});
// is the same as
console.log(Object.assign({}, obj1, obj2));

function add(first, ...rest) {
  return rest.reduce((sum, next) => sum + next, first);
}
// is the same as
function add() {
  const first = arguments[0];
  const rest = Array.from(arguments).slice(1);
  return rest.reduce((sum, next) => sum + next, first);
}

// in React:
<Box className={className} like={like} dislike={dislike}>

function Box(props) {
  const {className, like, } = props;
  const defaultProps = {
    className: `box ${className}`,
    children: 'Empty box',
  };

  return <Box2 className={className} children={children} like={like} dislike={dislike} />;
}


function Box2({className, children, like, dislike}) {
  return (
    <div></div>
  )
}