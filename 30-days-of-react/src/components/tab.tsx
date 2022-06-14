export interface TabItem {
  label: string | number
  value: number | string
}
interface Props {
  active: string | number
  tabList: TabItem[]
  onClick: (item: TabItem) => void
}
const Tab = (props: Props) => {
  return (
    <div className="tab">
        {
            props.tabList.map((tab, index) =>
            <div key={index} className={`tab-item ${props.active === tab.value ? 'active' : ''}`} onClick={() => props.onClick(tab)}>{tab.label}</div>,
            )
        }
    </div>
  )
}
export default Tab
