import {PropsWithChildren} from "react"


export default function Tr(props: PropsWithChildren) {
  return (
    <tr className="border-2 border-gray-400">
      {props.children}
    </tr>
  )
}
