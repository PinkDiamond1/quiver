const response = [
  [
    [
      "awDitPs5DiuGQo4Nzsws5Hk7ugX6YjQ52km",
      138374.88000000,
      ""
    ]
  ]
]

const addrs = response.map(outer => outer.map(inner => inner[0]))

console.log(...addrs)
