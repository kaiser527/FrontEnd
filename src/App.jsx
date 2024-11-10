import ModalCreateUser from "./Components/ModalCreateUser";
import ModalDeleteUser from "./Components/ModalDeleteUser";
import ModalUpdateUser from "./Components/ModalUpdateUser";
import TableUsers from "./Components/TableUsers";
import "./style/App.scss";

const App = () => {
  return (
    <>
      <ModalCreateUser />
      <ModalUpdateUser />
      <ModalDeleteUser />
      <TableUsers />
    </>
  );
};

export default App;
