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

    // Set up live updates
    const interval = setInterval(fetchData, 5000) // Update data every 5 seconds

    return () => clearInterval(interval) // Clean up the interval on unmount
  }, [])

  return (
    <div>
      <h1>Live Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
