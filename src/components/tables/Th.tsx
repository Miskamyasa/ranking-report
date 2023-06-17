import {PropsWithChildren} from "react"


interface Props extends PropsWithChildren {
  className?: string
  alignRight?: boolean
}


export default function Th(props: Props) {
  const className = [
    "p-2",
    props.className,
    props.alignRight ? "text-right" : "text-left",
  ]
  return (
    <th className={className.join(" ")}>
      {props.children}
    </th>
  )
}
