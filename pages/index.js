import React from "react";
import { useRouter } from "next/navigation";
import Table from "../components/Table";
import styles from "@/styles/Home.module.css";

export default function List() {
  const router = useRouter();
  const [tableData, setTableData] = React.useState([]);

  const sampleData = [
    {
      id: 5,
      list_name: "Ticklish Ribs & Wiches",
      distance: "4.2",
    },
    {
      id: 6,
      list_name: "myBurgerLab Sunway",
      distance: "7.7",
    },
    {
      id: 8,
      list_name: "PappaRich",
      distance: "2.5",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    router.push("/signin");
  };

  React.useEffect(() => {
    //const id = localStorage.getItem("id");
    //const token = localStorage.getItem("token");
    //const isLoggedIn = id && token;
    //if (!isLoggedIn) router.push("/signin");
    //else {
    //  const fetchData = async () => {
    //    const res = await fetch(
    //      `http://interview.advisoryapps.com/index.php/listing?id=${id}&token=${token}`
    //    );
    //    const data = await res.json();
    //    setTableData(data);
    //  };
    //  fetchData();
    //}
    setTableData(sampleData);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.topSection}>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <Table tableData={tableData} />
    </div>
  );
}
