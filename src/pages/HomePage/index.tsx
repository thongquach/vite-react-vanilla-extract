import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import * as styles from "./index.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Typography.Title level={1}>Welcome to the List App</Typography.Title>
      <Button type="primary" className={styles.button}>
        <Link to="/items" style={{ color: "inherit" }}>
          Go to Items Page
        </Link>
      </Button>
    </div>
  );
};

export default HomePage;
