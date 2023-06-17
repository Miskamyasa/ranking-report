import {Fragment} from "react"

import ReactPaginate from "react-paginate"


import {itemsPerPage} from "../../constants/config.ts"
import {useAppSelector} from "../../store/createStore"

import FollowerRow from "./FollowerRow.tsx"
import FollowersHead from "./FollowersHead.tsx"
import usePagination from "./usePagination.ts"
import useSort from "./useSort.ts"


export default function Followers() {
  const userId = useAppSelector(state => state.search.userId)

  const {ids, size, order, createHandleSort} = useSort(userId)
  const {items, handlePageClick} = usePagination({ids, size})

  const pageCount = Math.ceil(size / itemsPerPage)

  return (
    <Fragment>
      <h2>Followers</h2>
      <table className="table-auto w-full">
        <FollowersHead
          createHandleSort={createHandleSort}
          order={order} />
        <tbody>
          {items.map(id => (
            <FollowerRow
              key={id}
              profileId={id} />
          ))}
        </tbody>
      </table>
      <ReactPaginate
        activeClassName="text-gray-50"
        breakLabel="..."
        containerClassName="mt-2 flex gap-3"
        nextClassName="hover:text-gray-200"
        nextLabel="next >"
        pageClassName="hover:text-gray-200"
        pageCount={pageCount}
        pageRangeDisplayed={5}
        previousClassName="hover:text-gray-200"
        previousLabel="< previous"
        onPageChange={handlePageClick} />
    </Fragment>
  )
}
