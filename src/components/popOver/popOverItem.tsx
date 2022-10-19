import { FC } from 'react'
import './styles.css'

type PopOverItemProps = {
  code: string
  name: string
  alt: string
  stylename: string
  icon: JSX.Element
  current: string
  click: any
}

const PopOverItem: FC<PopOverItemProps> = ({
  code,
  name,
  alt,
  stylename,
  icon,
  current,
  click
}) => (
  <article
    key={code}
    className={`item ${stylename} ${code === current && 'select'}`}
    onClick={click(code)}>
    {icon}
    <span className="name">{name}</span>
    <span className="alt">{alt}</span>
  </article>
)

export default PopOverItem
