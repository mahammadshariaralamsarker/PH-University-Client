import { TSideBarItem, TUserPath } from "../types"

 




const sidebarItemsGenerator = (itmes:TUserPath[]) =>{
   const sidebarItems = itmes.reduce((acc:TSideBarItem[], item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.path,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
      })
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
      }))
      })
    }
    // acc.push(item)
    return acc
  }, [])
}