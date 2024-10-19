import { FormEvent, useState } from "react";
import { Input, Button, List, Typography } from "antd";
import { Link } from "react-router-dom";
import * as styles from "./ItemPage.css";

const ItemPage = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [sorted, setSorted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (item.trim()) {
      setItems([...items, item]);
      setItem("");
      setSorted(false);
    }
  };

  const sortItems = () => {
    const sortedItems = [...items].sort((a, b) => a.localeCompare(b));
    setItems(sortedItems);
    setSorted(true);
  };

  return (
    <div className={styles.container}>
      <Typography.Title level={2}>Add Items to the List</Typography.Title>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.inputGroup}>
          <Input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter an item"
            style={{ width: "300px" }}
          />
          <Button type="primary" htmlType="submit">
            Add Item
          </Button>
          <Button onClick={sortItems} disabled={sorted}>
            Sort Items
          </Button>
        </div>
      </form>
      {items.length > 0 && (
        <List
          bordered
          dataSource={items}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          className={styles.listContainer}
        />
      )}
      <div className={styles.backButton}>
        <Button type="default">
          <Link to="/" style={{ color: "inherit" }}>
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ItemPage;
