import styles from "@/styles/Table.module.css";
import { useRef, useEffect, useState } from "react";

function Table({ tableData }) {
  const modalRef = useRef(null);
  const [modalData, setModalData] = useState({});

  function openModal(data) {
    const dialog = modalRef.current;
    setModalData(data);
    if (dialog) {
      dialog.showModal();
    }
  }

  function closeModal() {
    const dialog = modalRef.current;

    if (dialog) {
      dialog.close();
      setModalData({});
    }
  }

  useEffect(() => {
    modalRef.current.addEventListener("click", (e) => {
      const dialogDimensions = modalRef.current.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        closeModal();
      }
    });
  }, []);
  // tableData is an array with objects that contain the data
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>id</th>
            <th className={styles.th}>list_name</th>
            <th className={styles.th}>distance</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr
              key={item.id}
              className={styles.tr}
              onClick={() => openModal(item)}
            >
              <td className={styles.td}>{item.id}</td>
              <td className={styles.td}>{item.list_name}</td>
              <td className={styles.td}>{item.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <dialog className={styles.modal} ref={modalRef}>
        <div>
          <p>list_name: {modalData?.list_name}</p>
          <p>distance: {modalData?.distance}</p>
        </div>
      </dialog>
    </>
  );
}

export default Table;
