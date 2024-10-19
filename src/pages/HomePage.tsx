import { Link } from "react-router-dom";
import { Button, Typography } from "antd";

const { Title } = Typography;

const HomePage = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Title level={1}>Welcome to the List App</Title>
      <Button type="primary">
        <Link to="/items" style={{ color: "white" }}>
          Go to Items Page
        </Link>
      </Button>
    </div>
  );
};

export default HomePage;
