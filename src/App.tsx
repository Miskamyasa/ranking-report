import {Provider} from "react-redux"

import PageFooter from "./components/page-footer/PageFooter"
import PageHeader from "./components/page-header/PageHeader"
import Dashboard from "./features/dashboard/Dashboard"
import SearchForm from "./features/search-form/SearchForm"
import {store} from "./store/createStore"


function App() {
  return (
    <Provider store={store}>
      <div className="my-3">
        <PageHeader />
      </div>

      <div className="container mb-6">
        <SearchForm />

        <div className="mt-6">
          <Dashboard />
        </div>
      </div>

      <PageFooter />
    </Provider>
  )
}

export default App
