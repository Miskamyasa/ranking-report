import {PropsWithChildren} from "react"


interface Props extends PropsWithChildren {
  alignRight?: boolean
}


export default function Td(props: Props) {
  return (
    <td className={`p-2 ${props.alignRight ? "text-right" : "text-left"}`}>
      {props.children}
    </td>
  )
}
