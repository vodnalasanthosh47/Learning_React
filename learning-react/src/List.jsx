function List(props) {
    
    const items = props.items;
    const listItems = items.map(item => 
                                <li key={item.id}>
                                    {item.name}
                                </li>);
    
    return (
    <>
        <h1>{props.category}</h1>
        <ul>{listItems}</ul>
    </>
    );
}

export default List;