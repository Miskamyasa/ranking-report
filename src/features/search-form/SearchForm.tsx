import {useRef} from "react"

import Button from "../../components/buttons/Button"
import Radio from "../../components/inputs/Radio"
import TextInput from "../../components/inputs/Text"
import {useAppDispatch, useAppSelector} from "../../store/createStore"
import {searchStartAction} from "../../store/search/actions"


interface FormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement
  depth: HTMLInputElement
}

const depthOptions = ["1", "2", "3"]

export default function SearchForm() {
  const reducerState = useAppSelector(state => state.search)
  const formRef = useRef<HTMLFormElement>(null)

  const dispatch = useAppDispatch()

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const {search, depth} = ev.currentTarget.elements as FormElements
    if (reducerState.value === search.value && reducerState.depth === Number(depth.value)) {
      return
    }

    dispatch(searchStartAction({
      value: search.value,
      depth: Number(depth.value),
    }))
  }

  return (
    <form
      ref={formRef}
      className="flex gap-5 items-start"
      onSubmit={handleSubmit}>
      <div>
        <label>Depth</label>
        <Radio
          name="depth"
          options={depthOptions} />
      </div>
      <div className="flex items-end gap-3">
        <TextInput
          required
          id="search-input"
          label="Username"
          name="search" />
        <Button type="submit">search</Button>
      </div>
    </form>
  )
}
