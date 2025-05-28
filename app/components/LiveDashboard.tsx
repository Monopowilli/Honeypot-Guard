"use client"

import React, { useState, useEffect } from 'react'

export default function LiveDashboard() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/dashboard-data')
      const result = await response.json()
      setData(result)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Live Dashboard</h1>
      {data ? (
        <div>
          {/* Insert chart or visualization here */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  )
}
