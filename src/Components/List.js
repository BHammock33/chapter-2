import './List.css';

function List({ items }){
    return(
        <ul>
            {items.map((item) =>(
                <li key ={item.field}>
                    <span>{item.field}: 
                    <span>{item.value}</span></span>
                </li>
            ))}
        </ul>
    );
}

export default List;