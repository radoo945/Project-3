
/// Create a map object.
var myMap = L.map("map", {
    center: [9.08, 8.67],
    zoom: 3
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  var countries = [
    {
      name: "China",
      pop2022: 1425887.337,
      pop2021: 1425893.465,
      Location: [35.86166, 104.195397]
    },
    {
      name: "India",
      pop2022: 1417173.173,
      pop2021: 1407563.842,
      Location: [20.593684, 78.96288]
    },
    {
      name: "United States",
      pop2022: 338289.857,
      pop2021: 336997.624,
      Location: [37.09024, -95.712891]
    },
    {
      name: "Indonesia",
      pop2022: 275501.339,
      pop2021: 273753.191,
      Location: [-0.789275, 113.921327]
    },
    {
      name: "Pakistan",
      pop2022: 235824.862,
      pop2021: 231402.117,
      Location: [30.375321, 69.345116]
    },
    {
      name: "Nigeria",
      pop2022: 218541.212,
      pop2021: 213401.323,
      Location: [9.081999, 8.675277]
    },
    {
      name: "Brazil",
      pop2022: 215313.498,
      pop2021: 214326.223,
      Location: [-14.235004, -51.92528]
    },
    {
      name: "Bangladesh",
      pop2022: 171186.372,
      pop2021: 169356.251,
      Location: [23.684994, 90.356331]
    },
    {
      name: "Russia",
      pop2022: 144713.314,
      pop2021: 145102.755,
      Location: [61.52401, 105.318756]
    },
    {
      name: "Mexico",
      pop2022: 127504.125,
      pop2021: 126705.138,
      Location: [23.634501, -102.55278]
    },
    {
      name: "Japan",
      pop2022: 123951.692,
      pop2021: 124612.53,
      Location: [36.204824, 138.252924]
    },
    {
      name: "Ethiopia",
      pop2022: 123379.924,
      pop2021: 120283.026,
      Location: [9.145, 40.489673]
    },
    {
      name: "Philippines",
      pop2022: 115559.009,
      pop2021: 113880.328,
      Location: [12.879721, 121.774017]
    },
    {
      name: "Egypt",
      pop2022: 110990.103,
      pop2021: 109262.178,
      Location: [26.820553, 30.802498]
    },
    {
      name: "DR Congo",
      pop2022: 99010.212,
      pop2021: 95894.118,
      Location: [-4.038333, 21.758664]
    },
    {
      name: "Vietnam",
      pop2022: 98186.856,
      pop2021: 97468.029,
      Location: [14.058324, 108.277199]
    },
    {
      name: "Iran",
      pop2022: 88550.57,
      pop2021: 87923.432,
      Location: [32.427908, 53.688046]
    },
    {
      name: "Turkey",
      pop2022: 85341.241,
      pop2021: 84775.404,
      Location: [38.963745, 35.243322]
    },
    {
      name: "Germany",
      pop2022: 83369.843,
      pop2021: 83408.554,
      Location: [51.165691, 10.451526]
    },
    {
      name: "Thailand",
      pop2022: 71697.03,
      pop2021: 71601.103,
      Location: [15.870032, 100.992541]
    },
    {
      name: "United Kingdom",
      pop2022: 67508.936,
      pop2021: 67281.039,
      Location: [55.378051, -3.435973]
    },
    {
      name: "Tanzania",
      pop2022: 65497.748,
      pop2021: 63588.334,
      Location: [-6.369028, 34.888822]
    },
    {
      name: "France",
      pop2022: 64626.628,
      pop2021: 64531.444,
      Location: [46.227638, 2.213749]
    },
    {
      name: "South Africa",
      pop2022: 59893.885,
      pop2021: 59392.255,
      Location: [-30.559482, 22.937506]
    },
    {
      name: "Italy",
      pop2022: 59037.474,
      pop2021: 59240.329,
      Location: [41.87194, 12.56738]
    },
    {
      name: "Myanmar",
      pop2022: 54179.306,
      pop2021: 53798.084,
      Location: [21.913965, 95.956223]
    },
    {
      name: "Kenya",
      pop2022: 54027.487,
      pop2021: 53005.614,
      Location: [-0.023559, 37.906193]
    },
    {
      name: "Colombia",
      pop2022: 51874.024,
      pop2021: 51516.562,
      Location: [12.565679, 104.990963]
    },
    {
      name: "South Korea",
      pop2022: 51815.81,
      pop2021: 51830.139,
      Location: [35.907757, 127.766922]
    },
    {
      name: "Spain",
      pop2022: 47558.63,
      pop2021: 47486.935,
      Location: [40.463667, -3.74922]
    },
    {
      name: "Uganda",
      pop2022: 47249.585,
      pop2021: 45853.778,
      Location: [1.373333, 32.290275]
    },
    {
      name: "Sudan",
      pop2022: 46874.204,
      pop2021: 45657.202,
      Location: [12.862807, 30.217636]
    },
    {
      name: "Argentina",
      pop2022: 45510.318,
      pop2021: 45276.78,
      Location: [-38.416097, -63.616672]
    },
    {
      name: "Algeria",
      pop2022: 44903.225,
      pop2021: 44177.969,
      Location: [28.033886, 1.659626]
    },
    {
      name: "Iraq",
      pop2022: 44496.122,
      pop2021: 43533.592,
      Location: [33.223191, 43.679291]
    },
    {
      name: "Afghanistan",
      pop2022: 41128.771,
      pop2021: 40099.462,
      Location: [33.93911, 67.709953]
    },
    {
      name: "Poland",
      pop2022: 39857.145,
      pop2021: 38307.726,
      Location: [51.919438, 19.145136]
    },
    {
      name: "Ukraine",
      pop2022: 39701.739,
      pop2021: 43531.422,
      Location: [48.379433, 31.16558]
    },
    {
      name: "Canada",
      pop2022: 38454.327,
      pop2021: 38155.012,
      Location: [56.130366, -106.34677]
    },
    {
      name: "Morocco",
      pop2022: 37457.971,
      pop2021: 37076.584,
      Location: [31.791702, -7.09262]
    },
    {
      name: "Saudi Arabia",
      pop2022: 36408.82,
      pop2021: 35950.396,
      Location: [23.885942, 45.079162]
    },
    {
      name: "Angola",
      pop2022: 35588.987,
      pop2021: 34503.774,
      Location: [-11.202692, 17.873887]
    },
    {
      name: "Uzbekistan",
      pop2022: 34627.652,
      pop2021: 34081.449,
      Location: [41.377491, 64.585262]
    },
    {
      name: "Peru",
      pop2022: 34049.588,
      pop2021: 33715.471,
      Location: [-9.189967, -75.015152]
    },
    {
      name: "Malaysia",
      pop2022: 33938.221,
      pop2021: 33573.874,
      Location: [4.210484, 101.975766]
    },
    {
      name: "Yemen",
      pop2022: 33696.614,
      pop2021: 32981.641,
      Location: [15.552727, 48.516388]
    },
    {
      name: "Ghana",
      pop2022: 33475.87,
      pop2021: 32833.031,
      Location: [7.946527, -1.023194]
    },
    {
      name: "Mozambique",
      pop2022: 32969.518,
      pop2021: 32077.072,
      Location: [-18.665695, 35.529562]
    },
    {
      name: "Nepal",
      pop2022: 30547.58,
      pop2021: 30034.989,
      Location: [28.394857, 84.124008]
    },
    {
      name: "Madagascar",
      pop2022: 29611.714,
      pop2021: 28915.653,
      Location: [-18.766947, 46.869107]
    },
    {
      name: "Venezuela",
      pop2022: 28301.696,
      pop2021: 28199.867,
      Location: [6.42375, -66.58973]
    },
    {
      name: "Ivory Coast",
      pop2022: 28160.542,
      pop2021: 27478.249,
      Location: [5.345317, -4.024429]
    },
    {
      name: "Cameroon",
      pop2022: 27914.536,
      pop2021: 27198.628,
      Location: [7.369722, 12.354722]
    },
    {
      name: "Niger",
      pop2022: 26207.977,
      pop2021: 25252.722,
      Location: [17.607789, 8.081666]
    },
    {
      name: "Australia",
      pop2022: 26177.413,
      pop2021: 25921.089,
      Location: [-25.274398, 133.775136]
    },
    {
      name: "North Korea",
      pop2022: 26069.416,
      pop2021: 25971.909,
      Location: [40.339852, 127.510093]
    },
    {
      name: "Taiwan",
      pop2022: 23893.394,
      pop2021: 23859.912,
      Location: [23.69781, 120.960515]
    },
    {
      name: "Burkina Faso",
      pop2022: 22673.762,
      pop2021: 22100.683,
      Location: [12.238333, -1.561593]
    },
    {
      name: "Mali",
      pop2022: 22593.59,
      pop2021: 21904.983,
      Location: [17.570692, -3.996166]
    },
    {
      name: "Syria",
      pop2022: 22125.249,
      pop2021: 21324.367,
      Location: [34.802075, 38.996815]
    },
    {
      name: "Sri Lanka",
      pop2022: 21832.143,
      pop2021: 21773.441,
      Location: [7.873054, 80.771797]
    },
    {
      name: "Malawi",
      pop2022: 20405.317,
      pop2021: 19889.742,
      Location: [-13.254308, 34.301525]
    },
    {
      name: "Zambia",
      pop2022: 20017.675,
      pop2021: 19473.125,
      Location: [-13.133897, 27.849332]
    },
    {
      name: "Romania",
      pop2022: 19659.267,
      pop2021: 19328.56,
      Location: [45.943161, 24.96676]
    },
    {
      name: "Chile",
      pop2022: 19603.733,
      pop2021: 19493.184,
      Location: [-35.675147, -71.542969]
    },
    {
      name: "Kazakhstan",
      pop2022: 19397.998,
      pop2021: 19196.465,
      Location: [48.019573, 66.923684]
    },
    {
      name: "Ecuador",
      pop2022: 18001,
      pop2021: 17797.737,
      Location: [-1.831239, -78.183406]
    },
    {
      name: "Guatemala",
      pop2022: 17843.908,
      pop2021: 17608.483,
      Location: [15.783471, -90.230759]
    },
    {
      name: "Chad",
      pop2022: 17723.315,
      pop2021: 17179.74,
      Location: [15.454166, 18.732207]
    },
    {
      name: "Somalia",
      pop2022: 17597.511,
      pop2021: 17065.581,
      Location: [5.152149, 46.199616]
    },
    {
      name: "Netherlands",
      pop2022: 17564.014,
      pop2021: 17501.696,
      Location: [52.132633, 5.291266]
    },
    {
      name: "Senegal",
      pop2022: 17316.449,
      pop2021: 16876.72,
      Location: [14.497401, -14.452362]
    },
    {
      name: "Cambodia",
      pop2022: 16767.842,
      pop2021: 16589.023,
      Location: [12.565679, 104.990963]
    },
    {
      name: "Zimbabwe",
      pop2022: 16320.537,
      pop2021: 15993.524,
      Location: [-19.015438, 29.154857]
    },
    {
      name: "Guinea",
      pop2022: 13859.341,
      pop2021: 13531.906,
      Location: [9.945587, -9.696645]
    },
    {
      name: "Rwanda",
      pop2022: 13776.698,
      pop2021: 13461.888,
      Location: [-1.940278, 29.873888]
    },
    {
      name: "Benin",
      pop2022: 13352.864,
      pop2021: 12996.895,
      Location: [9.30769, 2.315834]
    },
    {
      name: "Burundi",
      pop2022: 12889.576,
      pop2021: 12551.213,
      Location: [-3.373056, 29.918886]
    },
    {
      name: "Tunisia",
      pop2022: 12356.117,
      pop2021: 12262.946,
      Location: [33.886917, 9.537499]
    },
    {
      name: "Bolivia",
      pop2022: 12224.11,
      pop2021: 12079.472,
      Location: [-16.290154, -63.588653]
    },
    {
      name: "Belgium",
      pop2022: 11655.93,
      pop2021: 11611.419,
      Location: [50.503887, 4.469936]
    },
    {
      name: "Haiti",
      pop2022: 11584.996,
      pop2021: 11447.569,
      Location: [18.971187, -72.285215]
    },
    {
      name: "Jordan",
      pop2022: 11285.869,
      pop2021: 11148.278,
      Location: [30.585164, 36.238414]
    },
    {
      name: "Dominican Republic",
      pop2022: 11228.821,
      pop2021: 11117.873,
      Location: [18.735693, -70.162651]
    },
    {
      name: "Cuba",
      pop2022: 11212.191,
      pop2021: 11256.372,
      Location: [21.521757, -77.781167]
    },
    {
      name: "South Sudan",
      pop2022: 10913.164,
      pop2021: 10748.272,
      Location: [4.859363, 31.571251]
    },
    {
      name: "Sweden",
      pop2022: 10549.347,
      pop2021: 10467.097,
      Location: [60.128161, 18.643501]
    },
    {
      name: "Czech Republic",
      pop2022: 10493.986,
      pop2021: 10510.751,
      Location: [49.817492, 15.472962]
    },
    {
      name: "Honduras",
      pop2022: 10432.86,
      pop2021: 10278.345,
      Location: [15.199999, -86.241905]
    },
    {
      name: "Greece",
      pop2022: 10384.971,
      pop2021: 10445.365,
      Location: [39.074208, 21.824312]
    },
    {
      name: "Azerbaijan",
      pop2022: 10358.074,
      pop2021: 10312.992,
      Location: [40.143105, 47.576927]
    },
    {
      name: "Portugal",
      pop2022: 10270.865,
      pop2021: 10290.103,
      Location: [39.399872, -8.224454]
    },
    {
      name: "Papua New Guinea",
      pop2022: 10142.619,
      pop2021: 9949.437,
      Location: [-6.314993, 143.95555]
    },
    {
      name: "Hungary",
      pop2022: 9967.308,
      pop2021: 9709.786,
      Location: [47.162494, 19.503304]
    },
    {
      name: "Tajikistan",
      pop2022: 9952.787,
      pop2021: 9750.064,
      Location: [38.861034, 71.276093]
    },
    {
      name: "Belarus",
      pop2022: 9534.954,
      pop2021: 9578.167,
      Location: [53.709807, 27.953389]
    },
    {
      name: "United Arab Emirates",
      pop2022: 9441.129,
      pop2021: 9365.145,
      Location: [23.424076, 53.847818]
    },
    {
      name: "Israel",
      pop2022: 9038.309,
      pop2021: 8900.059,
      Location: [31.046051, 34.851612]
    },
    {
      name: "Austria",
      pop2022: 8939.617,
      pop2021: 8922.082,
      Location: [47.516231, 14.550072]
    },
    {
      name: "Togo",
      pop2022: 8848.699,
      pop2021: 8644.829,
      Location: [8.619543, 0.824782]
    },
    {
      name: "Switzerland",
      pop2022: 8740.472,
      pop2021: 8691.406,
      Location: [46.818188, 8.227512]
    },
    {
      name: "Sierra Leone",
      pop2022: 8605.718,
      pop2021: 8420.641,
      Location: [8.460555, -11.779889]
    },
    {
      name: "Laos",
      pop2022: 7529.475,
      pop2021: 7425.057,
      Location: [19.85627, 102.495496]
    },
    {
      name: "Hong Kong",
      pop2022: 7488.865,
      pop2021: 7494.578,
      Location: [22.396428, 114.109497]
    },
    {
      name: "Serbia",
      pop2022: 7221.365,
      pop2021: 7296.769,
      Location: [44.016521, 21.005859]
    },
    {
      name: "Nicaragua",
      pop2022: 6948.392,
      pop2021: 6850.54,
      Location: [12.865416, -85.207229]
    },
    {
      name: "Libya",
      pop2022: 6812.341,
      pop2021: 6735.277,
      Location: [26.3351, 17.228331]
    },
    {
      name: "Bulgaria",
      pop2022: 6781.953,
      pop2021: 6885.868,
      Location: [42.733883, 25.48583]
    },
    {
      name: "Paraguay",
      pop2022: 6780.744,
      pop2021: 6703.799,
      Location: [-23.442503, -58.443832]
    },
    {
      name: "Kyrgyzstan",
      pop2022: 6630.623,
      pop2021: 6527.743,
      Location: [41.20438, 74.766098]
    },
    {
      name: "Turkmenistan",
      pop2022: 6430.77,
      pop2021: 6341.855,
      Location: [38.969719, 59.556278]
    },
    {
      name: "El Salvador",
      pop2022: 6336.392,
      pop2021: 6314.167,
      Location: [13.794185, -88.89653]
    },
    {
      name: "Singapore",
      pop2022: 5975.689,
      pop2021: 5941.06,
      Location: [1.352083, 103.819836]
    },
    {
      name: "Republic of the Congo",
      pop2022: 5970.424,
      pop2021: 5835.806,
      Location: [-0.228021, 15.827659]
    },
    {
      name: "Denmark",
      pop2022: 5882.261,
      pop2021: 5854.24,
      Location: [56.26392, 9.501785]
    },
    {
      name: "Slovakia",
      pop2022: 5643.453,
      pop2021: 5447.622,
      Location: [48.669026, 19.699024]
    },
    {
      name: "Central African Republic",
      pop2022: 5579.144,
      pop2021: 5457.154,
      Location: [6.611111, 20.939444]
    },
    {
      name: "Finland",
      pop2022: 5540.745,
      pop2021: 5535.992,
      Location: [61.92411, 25.748151]
    },
    {
      name: "Lebanon",
      pop2022: 5489.739,
      pop2021: 5592.631,
      Location: [33.854721, 35.862285]
    },
    {
      name: "Norway",
      pop2022: 5434.319,
      pop2021: 5403.021,
      Location: [60.472024, 8.468946]
    },
    {
      name: "Liberia",
      pop2022: 5302.681,
      pop2021: 5193.416,
      Location: [6.428055, -9.429499]
    },
    {
      name: "Palestine",
      pop2022: 5250.072,
      pop2021: 5133.392,
      Location: [31.952162, 35.233154]
    },
    {
      name: "New Zealand",
      pop2022: 5185.288,
      pop2021: 5129.727,
      Location: [-40.900557, 174.885971]
    },
    {
      name: "Costa Rica",
      pop2022: 5180.829,
      pop2021: 5153.957,
      Location: [9.748917, -83.753428]
    },
    {
      name: "Ireland",
      pop2022: 5023.109,
      pop2021: 4986.526,
      Location: [53.41291, -8.24389]
    },
    {
      name: "Mauritania",
      pop2022: 4736.139,
      pop2021: 4614.974,
      Location: [21.00789, -10.940835]
    },
    {
      name: "Oman",
      pop2022: 4576.298,
      pop2021: 4520.471,
      Location: [21.512583, 55.923255]
    },
    {
      name: "Panama",
      pop2022: 4408.581,
      pop2021: 4351.267,
      Location: [8.537981, -80.782127]
    },
    {
      name: "Kuwait",
      pop2022: 4268.873,
      pop2021: 4250.114,
      Location: [29.31166, 47.481766]
    },
    {
      name: "Croatia",
      pop2022: 4030.358,
      pop2021: 4060.135,
      Location: [45.815399, 15.966568]
    },
    {
      name: "Georgia",
      pop2022: 3744.385,
      pop2021: 3757.98,
      Location: [42.315407, 43.356892]
    },
    {
      name: "Eritrea",
      pop2022: 3684.032,
      pop2021: 3620.312,
      Location: [15.179384, 39.782334]
    },
    {
      name: "Uruguay",
      pop2022: 3422.794,
      pop2021: 3426.26,
      Location: [-32.522779, -55.765835]
    },
    {
      name: "Mongolia",
      pop2022: 3398.366,
      pop2021: 3347.782,
      Location: [46.862496, 103.846656]
    },
    {
      name: "Moldova",
      pop2022: 3272.996,
      pop2021: 3061.506,
      Location: [47.411631, 28.369885]
    },
    {
      name: "Puerto Rico",
      pop2022: 3252.407,
      pop2021: 3256.028,
      Location: [18.220833, -66.590149]
    },
    {
      name: "Bosnia and Herzegovina",
      pop2022: 3233.526,
      pop2021: 3270.943,
      Location: [43.915886, 17.679076]
    },
    {
      name: "Albania",
      pop2022: 2842.321,
      pop2021: 2854.71,
      Location: [41.153332, 20.168331]
    },
    {
      name: "Jamaica",
      pop2022: 2827.377,
      pop2021: 2827.695,
      Location: [18.109581, -77.297508]
    },
    {
      name: "Armenia",
      pop2022: 2780.469,
      pop2021: 2790.974,
      Location: [40.069099, 45.038189]
    },
    {
      name: "Lithuania",
      pop2022: 2750.055,
      pop2021: 2786.651,
      Location: [55.169438, 23.881275]
    },
    {
      name: "Gambia",
      pop2022: 2705.992,
      pop2021: 2639.916,
      Location: [13.443182, -15.310139]
    },
    {
      name: "Qatar",
      pop2022: 2695.122,
      pop2021: 2688.235,
      Location: [25.354826, 51.183884]
    },
    {
      name: "Botswana",
      pop2022: 2630.296,
      pop2021: 2588.423,
      Location: [-22.328474, 24.684866]
    },
    {
      name: "Namibia",
      pop2022: 2567.012,
      pop2021: 2530.151,
      Location: [-22.95764, 18.49041]
    },
    {
      name: "Gabon",
      pop2022: 2388.992,
      pop2021: 2341.179,
      Location: [-0.803689, 11.609444]
    },
    {
      name: "Lesotho",
      pop2022: 2305.825,
      pop2021: 2281.454,
      Location: [-29.609988, 28.233608]
    },
    {
      name: "Slovenia",
      pop2022: 2119.844,
      pop2021: 2119.41,
      Location: [46.151241, 14.995463]
    },
    {
      name: "Guinea-Bissau",
      pop2022: 2105.566,
      pop2021: 2060.721,
      Location: [11.803749, -15.180413]
    },
    {
      ame: "North Macedonia",
      pop2022: 2093.599,
      pop2021: 2103.33,
      Location: [41.608635, 21.745275]
    },
    {
      name: "Latvia",
      pop2022: 1850.651,
      pop2021: 1873.919,
      Location: [56.879635, 24.603189]
    },
    {
      name: "Kosovo",
      pop2022: 1802.25,
      pop2021: null,
      Location: [42.602636, 20.902977]
    },
    {
      name: "Equatorial Guinea",
      pop2022: 1674.908,
      pop2021: 1634.466,
      Location: [1.650801, 10.267895]
    },
    {
      name: "Trinidad and Tobago",
      pop2022: 1531.044,
      pop2021: 1525.663,
     Location: [10.691803, -61.222503]
    },
    {
      name: "Bahrain",
      pop2022: 1472.233,
      pop2021: 1463.265,
      Location: [25.930414, 50.637772]
    },
    {
      name: "Timor-Leste",
      pop2022: 1341.296,
      pop2021: 1320.942,
      Location: [-8.874217, 125.727539]
    },
    {
      name: "Estonia",
      pop2022: 1326.062,
      pop2021: 1328.701,
      Location: [58.595272, 25.013607]
    },
    {
      name: "Mauritius",
      pop2022: 1299.469,
      pop2021: 1298.915,
      Location: [-20.348404, 57.552152]
    },
    {
      name: "Cyprus",
      pop2022: 1251.488,
      pop2021: 1244.188,
      Location: [35.126413, 33.429859]
    },
    {
      name: "Eswatini",
      pop2022: 1201.67,
      pop2021: 1192.271,
      Location: [-26.522503, 31.465866]
    },
    {
      name: "Djibouti",
      pop2022: 1120.849,
      pop2021: 1105.557,
      Location: [11.825138, 42.590275]
    },
    {
      name: "Reunion",
      pop2022: 974.052,
      pop2021: 966.129,
      Location: [-21.115141, 55.536384]
    },
    {
      name: "Fiji",
      pop2022: 929.766,
      pop2021: 924.61,
      Location: [-16.578193, 179.414413]
    },
    {
      name: "Comoros",
      pop2022: 836.774,
      pop2021: 821.625,
      Location: [-11.875001, 43.872219]
    },
    {
      name: "Guyana",
      pop2022: 808.726,
      pop2021: 804.567,
      Location: [4.860416, -58.93018]
    },
    {
      name: "Bhutan",
      pop2022: 782.455,
      pop2021: 777.486,
      Location: [27.514162, 90.433601]
    },
    {
      name: "Solomon Islands",
      pop2022: 724.273,
      pop2021: 707.851,
      Location: [-9.64571, 160.156194]
    },
    {
      name: "Luxembourg",
      pop2022: 647.599,
      pop2021: 639.321,
      Location: [49.815273, 6.129583]
    },
    {
      name: "Montenegro",
      pop2022: 627.082,
      pop2021: 627.859,
      Location: [42.708678, 19.37439]
    },
    {
      name: "Suriname",
      pop2022: 618.04,
      pop2021: 612.985,
      Location: [3.919305, -56.027783]
    },
    {
      name: "Cape Verde",
      pop2022: 593.149,
      pop2021: 587.925,
     Location: [16.002082, -24.013197]
    },
    {
      name: "Western Sahara",
      pop2022: 575.986,
      pop2021: 565.581,
      Location: [24.215527, -12.885834]
    },
    {
      name: "Malta",
      pop2022: 533.286,
      pop2021: 526.748,
      Location: [35.937496, 14.375416]
    },
    {
      name: "Maldives",
      pop2022: 523.787,
      pop2021: 521.457,
      Location: [3.202778, 73.22068]
    },
    {
      name: "Brunei",
      pop2022: 449.002,
      pop2021: 445.373,
      Location: [4.535277, 114.727669]
    },
    {
      name: "Bahamas",
      pop2022: 409.984,
      pop2021: 407.906,
      Location: [25.03428,-77.39628]
    },
    {
      name: "Belize",
      pop2022: 405.272,
      pop2021: 400.031,
      Location: [17.189877, -88.49765]
    },
    {
      name: "Guadeloupe",
      pop2022: 395.752,
      pop2021: 396.051,
      Location: [16.995971, -62.067641]
    },
    {
      name: "Iceland",
      pop2022: 372.899,
      pop2021: 370.335,
      Location: [64.963051, -19.020835]
    },
    {
      name: "Martinique",
      pop2022: 367.507,
      pop2021: 368.796,
      Location: [14.641528, -61.024174]
    },
    {
      name: "Vanuatu",
      pop2022: 326.74,
      pop2021: 319.137,
      Location: [-15.376706, 166.959158]
    },
    {
      name: "Mayotte",
      pop2022: 326.101,
      pop2021: 316.014,
      Location: [-12.8275, 45.166244]
    },
    {
      name: "French Guiana",
      pop2022: 304.557,
      pop2021: 297.449,
      Location: [3.933889, -53.125782]
    },
    {
      name: "Barbados",
      pop2022: 281.635,
      pop2021: 281.2,
      Location: [13.193887, -59.543198]
    },
    {
      name: "Sao Tome and Principe",
      pop2022: 227.38,
      pop2021: 223.107,
      Location: [0.18636, 6.613081]
    },
    {
      name: "Samoa",
      pop2022: 222.382,
      pop2021: 218.764,
      Location: [-13.759029, -172.10463]
    },
    {
      name: "Saint Lucia",
      pop2022: 179.857,
      pop2021: 179.651,
      Location: [13.909444, -60.978893]
    },
    {
      name: "Kiribati",
      pop2022: 131.232,
      pop2021: 128.874,
      Location: [-3.370417, -168.73404]
    },
    {
      name: "Grenada",
      pop2022: 125.438,
      pop2021: 124.61,
      Location: [12.262776, -61.604171]
    },
    {
      name: "Micronesia",
      pop2022: 114.164,
      pop2021: 113.131,
      Location: [7.425554, 150.550812]
    },
    {
      name: "Seychelles",
      pop2022: 107.118,
      pop2021: 106.471,
      Location: [-4.679574, 55.491977]
    },
    {
      name: "Tonga",
      pop2022: 106.858,
      pop2021: 106.017,
      Location: [-21.178986, -175.19824]
    },
    {
      name: "Saint Vincent and the Grenadines",
      pop2022: 103.948,
      pop2021: 104.332,
      Location: [12.984305, -61.287228]
    },
    {
      name: "Antigua and Barbuda",
      pop2022: 93.763,
      pop2021: 93.219,
      Location: [17.060816, -61.796428]
    },
    {
     name: "Andorra",
      pop2022: 79.824,
      pop2021: 79.034,
      Location: [42.546245, 1.601554]
    },
    {
      name: "Dominica",
      pop2022: 72.737,
      pop2021: 72.412,
      Location: [15.414999, -61.370976]
    },
    {
      name: "Greenland",
      pop2022: 56.466,
      pop2021: 56.243,
      Location: [71.706936, -42.604303]
    },
    {
      name: "Saint Kitts and Nevis",
      pop2022: 47.657,
      pop2021: 47.606,
      Location: [17.357822, -62.782998]
    },
    {
      name: "Marshall Islands",
      pop2022: 41.569,
      pop2021: 42.05,
      Location: [7.131474, 171.184478]
    },
    {
      name: "Liechtenstein",
      pop2022: 39.327,
      pop2021: 39.039,
      Location: [47.166, 9.555373]
    },
    {
      name: "Monaco",
      pop2022: 36.469,
      pop2021: 36.686,
      Location: "[43.750298, 7.412841]"
    },
    {
      name: "San Marino",
      pop2022: 33.66,
      pop2021: 33.745,
      Location: [43.94236, 12.457777]
    },
    {
      name: "Palau",
      pop2022: 18.055,
      pop2021: 18.024,
      Location: [7.51498, 134.58252]
    },
    {
      name: "Nauru",
      pop2022: 12.668,
      pop2021: 12.511,
      Location: [-0.522778, 166.931503]
    },
    {
      name: "Tuvalu",
      pop2022: 11.312,
      pop2021: 11.204,
      Location: [-7.109535, 177.64933]
    },
    {
      name: "Vatican City",
      pop2022: 0.51,
      pop2021: 0.511,
      Location: [41.902916, 12.453389]
    }
   ]
   
//   // An array containing each city's name, location, and population
//   d3.json("/static/world_population.json").then((data) => {
//     var countries = data;

//     console.log(countries);

    // Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
  for (var i = 0; i < countries.length; i++) {
    
   // Conditionals for country gdp_pc
   var color = "";
   if (countries[i].pop2022 > 1000000) {
     color = "yellow";
   }
   else if (countries[i].pop2022 > 100000) {
     color = "blue";
   }
   else if (countries[i].pop2022 > 10000) {
     color = "green";
   }
   else if (countries[i].pop2022 > 1000) {
    color = "orange";
  }
   else {
     color = "violet";
   }

   // Add circles to the map.
  L.circle(countries[i].Location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust the radius.
    radius: Math.sqrt(countries[i].pop2022) * 500
  }).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>2022 Population('000): ${countries[i].pop2022}</h3> `).addTo(myMap);
}
  
//   });
  
  
  
 