import "./Text.css"


interface Props {
  id: string
  name: string
  label?: string
  required?: boolean
}


export default function TextInput(props: Props) {
  return (
    <div>
      {props.label && (
        <label
          className="block"
          htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <input
        className="input"
        id={props.id}
        name={props.name}
        placeholder="enter username"
        required={props.required}
        type="text" />
    </div>
  )
}