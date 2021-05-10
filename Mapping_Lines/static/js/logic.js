// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
/* let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790]
  ]; */

  // Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// add a circle to the map
L.circle([34.0522, -118.2437], {
    color: 'black',
    fillColor: 'yellow',
    fillOpacity: 0.3,
    radius: 3000
 }).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//13.5.1 
/* 
{
  type: "Feature",
  properties: {
  mag: 1.88,
  place: "6km SE of Pahala, Hawaii",
  time: 1573766377230,
  type: "earthquake",
  title: "M 1.9 - 6km SE of Pahala, Hawaii"
  },
  geometry: {
  type: "Point",
  coordinates: [
  -155.4329987,
  19.1634998
  ]},
  
  
  {"type":"FeatureCollection","features":
[
  {
    "type":"Feature","properties":{
"airline":"AA","airline_id":"24","src":"LAX","dst":"ABQ","dst_id":"4019","stops":"0","equipment":"CRJ CR7"},"geometry":{
"type":"LineString",
"coordinates":[[-118.4079971,33.94250107],[-106.609001,35.040199]]}
},
{
"type":"Feature","properties":{
"airline":"AA","airline_id":"24","src":"LAX","src_id":"3484","dst":"ANC","dst_id":"3774","codeshare":"Y","stops":"0","equipment":"737"},"geometry":{
"type":"LineString",
"coordinates":[[-118.4079971,33.94250107],[-149.99600219726562,61.174400329589844]]}
  },
{
  "type":"Feature","properties":{
"airline":"AA","airline_id":"24","src":"LAX","src_id":"3484","dst":"AUS","dst_id":"3673","codeshare":"","stops":"0","equipment":"M83 738"},"geometry":{
"type":"LineString",
"coordinates":[[-118.4079971,33.94250107],[-97.6698989868164,30.194499969482422]]}
  }
]

}
  
  
  
  */
