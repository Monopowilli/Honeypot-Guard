"use client"

import React, { useState, useEffect } from 'react'

export default function LiveDashboard() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/dashboard-data')
      const data = await response.json()
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Live Dashboard</h1>
      {/* Display dynamic data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
