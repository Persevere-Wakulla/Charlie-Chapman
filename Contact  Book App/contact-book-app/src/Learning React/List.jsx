import PropTypes from 'prop-types'

const List = (props) => {

    const itemsList = props.items
    const category = props.category
 
  // alphabetical order
  // fruits.sort((a, b) => a.name.localeCompare(b.name))

  // ? reverse alphabetical order
  // ? fruits.sort((a,b) => b.name.localCompare(a.name))

  // sorting by calories numeric order
  // fruits.sort((a,b) => a.calories - b.calories)

  // ? reverse numeric order
  // ? fruits.sort((a,b) => b.calories - a.calories)
//   const listItems = fruits.map(fruit => <li key={fruit.id}>
//       {fruit.name} : &nbsp;
//      <b> { fruit.calories}</b>
//       </li>)
  const listItems = itemsList.map(item => <li key={item.id}>
      {item.name} : &nbsp;
     <b> { item.calories}</b>
      </li>)

  // filtering calories under 100
  //  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
  //  const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)
  //  ! replace low cal with highCalFruit

//   const listItems = lowCalFruits.map((lowCalFruit) => (
//     <li key={lowCalFruit.id}>
//       {lowCalFruit.name} : &nbsp;
//       <b> {lowCalFruit.calories}</b>
//     </li>
//   ));

  return (
    <>
        <h3 className="list-category" >{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
};
List.propTypes = {
    category:PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number, name:PropTypes.string,
    calories:PropTypes.number
    }))
}

List.defaultProps = {
    category:'Category',
    items:[],
}
export default List;
