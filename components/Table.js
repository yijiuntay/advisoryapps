function Table({ tableData }) {
  // tableData is an array with objects that contain the data
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>list_name</th>
          <th>distance</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.list_name}</td>
            <td>{item.distance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
