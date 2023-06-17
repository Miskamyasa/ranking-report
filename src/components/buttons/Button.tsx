import "./Button.css"

import {PropsWithChildren, useState} from "react"


interface Props extends PropsWithChildren {
  type: "submit" // ... "reset" | "button"
}

export default function Button(props: Props) {
  const [pressed, setPressed] = useState(false)

  /*
    Just fancy stuff to show nice animation on button press if user uses keyboard
   */
  const onPressStart = (ev: React.KeyboardEvent) => {
    if (ev.code === "Enter" || ev.code === "Space") {
      setPressed(true)
    }
  }

  const onPressEnd = () => {
    setPressed(false)
  }

  return (
    <button
      className={`button ${pressed ? "active" : ""}`}
      type={props.type}
      onKeyDown={onPressStart}
      onKeyUp={onPressEnd}>
      {props.children}
    </button>
  )
}
