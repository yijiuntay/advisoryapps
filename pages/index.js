import React from "react";
import { useRouter } from "next/navigation";
import Table from "../components/Table";
import styles from "@/styles/Home.module.css";

export default function List({ tableData }) {
  const router = useRouter();
  const [tableData, setTableData] = useState([]);

  React.useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const isLoggedIn = id && token;
    if (!isLoggedIn) router.push("/signin");
    else {
      const fetchData = async () => {
        const res = await fetch(
          `http://interview.advisoryapps.com/index.php/listing?id=${id}&token=${token}`
        );
        const data = await res.json();
        setTableData(data);
      };
      fetchData();
    }
  }, []);

  return (
    <div className={styles.main}>
      <Table tableData={tableData} />
    </div>
  );
}
