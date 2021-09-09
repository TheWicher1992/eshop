import React, { useEffect, useState } from 'react'

const Order = ({ match }) => {
  const [id, setId] = useState('')
  useEffect(() => {
    setId(match.params.id)
  }, [match])

  return (
    <div>
      {id}
    </div>
  )
}

export default Order
