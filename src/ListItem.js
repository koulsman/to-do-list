import { useCallback } from "react";


export default function ListItem({listItem,setList,index}) {

    const deleteListItemHandler = useCallback((event) => {
        event.preventDefault();
        setList(listItems => {
            const newArray = [...listItems];
            console.log("diagrafw to listItem " + listItem + " pou einai sto position " + index);
            newArray.splice(index,1);
            return newArray;

        })
    },[setList,listItem,index]);

    const onChangeHandler = useCallback((event) => {
        event.preventDefault();
       const newListItem = event.target.value;
       setList(listItems => {
         const newArray = [...listItems];   
         newArray[index] = newListItem;
         return newArray;
       })
    },[setList,index]);



    

    return (
        <div>
            
            <input type="text" onChange={onChangeHandler} value={listItem}  />
            <button onClick={deleteListItemHandler} value={listItem}>delete</button>
        </div>
    );
}

