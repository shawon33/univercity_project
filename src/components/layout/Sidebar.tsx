import { sidebarItemGenerator } from "../../utils/sidebarItemGenetor";
import { adminPaths } from "../../routes/admin.routes";
import { Layout,Menu } from "antd";
import { useAppSelector } from "../../redux/features/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";


const { Sider } = Layout;

const userRole = {
  ADMIN:'admin',
  FACULTY:'faculty',
  STUDENT:'student',
}

const Sidebar = () => {

const {user} = useAppSelector(selectCurrentUser);

let sidebarItems ;
switch (user!.role) {
  case userRole.ADMIN:
    sidebarItems = sidebarItemGenerator(adminPaths,userRole.ADMIN)
    break;
  case userRole.FACULTY:
    sidebarItems = sidebarItemGenerator(facultyPaths,userRole.FACULTY)
    break;
  case userRole.STUDENT:
    sidebarItems = sidebarItemGenerator(studentPaths,userRole.STUDENT)
    break;

  default:
    break;
}

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div style={{ color: "white", textAlign: "center", height: "4rem" }}>
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
