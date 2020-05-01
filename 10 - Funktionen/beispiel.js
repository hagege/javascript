"use strict"

const https = require("https")
const http = require("http")

const url = "https://api.spacexdata.com/v3/launches/latest"

https.get(url, res => {
//  console.log(res)
    console.log(res.statusCode)


  let data = ""
  res.on("data", chunk => {
    console.log("chunk:", chunk)
    data+=chunk
  })

  res.on("end", () => {
    const dataAsObj = JSON.parse(data)
    console.log(JSON.parse(data))
    console.log(dataAsObj["mission_name"])
  })

  //console.log(res.statusCode)
})
