'use client'

import Header from '../Header'
import Editor from '../Editor'

const ClientSideWrapperDash = () => {
  return (
    <>
      <Header />
      <div className="mt-4 pl-2">
        <Editor />
      </div>
    </>
  )
}

export default ClientSideWrapperDash
