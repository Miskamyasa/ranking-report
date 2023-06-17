import {useState} from "react"
import "./Radio.css"


interface Props {
  name: string
  options: Array<string>
}

/*
 I did it only here on purpose to show how to handle keyboard events
 */
const handleKeyUp = (ev: React.KeyboardEvent<HTMLLabelElement>) => {
  const {firstElementChild} = ev.currentTarget as HTMLLabelElement
  if (ev.code === "Enter" || ev.code === "Space") {
    (firstElementChild as HTMLInputElement).click()
  }
}

export default function Radio(props: Props) {
  const [checked, setChecked] = useState(() => {
    return props.options.length > 0 ? props.options[0] : ""
  })

  return (
    <div className="radio flex gap-1">
      {props.options.map((value, i) => (
        <label
          key={i}
          className={`radio-label ${checked === value ? "checked" : ""}`}
          tabIndex={0}
          onKeyDown={handleKeyUp}>
          {value}
          <input
            checked={checked === value}
            className="radio"
            name={props.name}
            type="radio"
            value={value}
            onChange={() => setChecked(value)} />
        </label>
      ))}
    </div>
  )
}
