import { TextInput } from "@mantine/core";
import deleteListItem from './svg/delete-listitem.svg';

export default function ListItem({ listItem, index, setList, selectedList, setSelectedList }) {
  function deleteListItemHandler(index) {
    console.log(index, "index");
    console.log(listItem, "listitem");

    if (setSelectedList) {
      // Used in ViewAndEditList
      setSelectedList((prevList) => {
        const updatedItems = [...prevList.list_items];
        updatedItems.splice(index, 1);
        return {
          ...prevList,
          list_items: updatedItems,
        };
      });
    } else if (setList) {
      // Used in CreateList
      setList((prev) => {
        const updated = [...prev];
        updated.splice(index, 1);
        return updated;
      });
    }
  }

  function editListItemHandler(value, index) {
    if (setSelectedList) {
      // Used in ViewAndEditList
      setSelectedList((prevList) => {
        const updatedItems = [...prevList.list_items];
        updatedItems[index] = value;
        return {
          ...prevList,
          list_items: updatedItems,
        };
      });
    } else if (setList) {
      // Used in CreateList
      setList((prev) => {
        const updated = [...prev];
        updated[index] = value;
        return updated;
      });
    }
  }

  return (
    <div style={{ display: "flex", marginTop: "1em" }}>
      <TextInput
        type="text"
        onChange={(event) => editListItemHandler(event.target.value, index)}
        value={listItem}
        placeholder={`List item ${index + 1}`}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{
            height: '1.3em',
            width: '1.3em',
            background: '#03fc88',
            borderRadius: '0.1em',
            marginLeft: '1em',
            cursor: 'pointer',
          }}
          src={deleteListItem}
          alt="Delete"
          onClick={() => deleteListItemHandler(index)}
        />
      </div>
    </div>
  );
}
