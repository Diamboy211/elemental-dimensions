var hydrogenNuclei = 10
var firstHydrogenDimension = 0
var oxygenNuclei = 10
var firstOxygenDimension = 0
var waterMolecules = 0
function gameLoop() {
hydrogenNuclei += firstHydrogenDimension/50
hydrogenNuclei = Math.round( hydrogenNuclei * 50) / 50
oxygenNuclei += firstOxygenDimension/50
oxygenNuclei = Math.round( oxygenNuclei * 50) / 50
document.getElementById("hydrogenDisplay").innerHTML = "You have " + hydrogenNuclei + " hydrogen nuclei."
  document.getElementById("oxygenDisplay").innerHTML = "You have " + oxygenNuclei + " oxygen nuclei."
}

function buyFirstHydrogenDimension() {
  if (hydrogenNuclei >= 10) {
    hydrogenNuclei -= 10
    firstHydrogenDimension += 1
    document.getElementById("hydrogenDimensionDisplay").innerHTML = "You have " + firstHydrogenDimension + " hydrogen dimension 1."
  }
}
function buyFirstOxygenDimension() {
  if (oxygenNuclei >= 10) {
    oxygenNuclei -= 10
    firstOxygenDimension += 1
    document.getElementById("oxygenDimensionDisplay").innerHTML = "You have " + firstOxygenDimension + " oxygen dimension 1."
  }
}
function buyWaterMolecule() {
  if (firstHydrogenDimension >= 1) {
      if (firstOxygenDimension >= 1) {
          if (hydrogenNuclei >= 2) {
            if (oxygenNuclei >= 1) {
              hydrogenNuclei -= 2
              oxygenNuclei -= 1
              waterMolecules++
              if (waterMolecules == 1) {
       document.getElementById("waterDisplay").innerHTML = "You have " + waterMolecules + " water molecule."
            } else {        document.getElementById("waterDisplay").innerHTML = "You have " + waterMolecules + " water molecules."
                   }
            }
          }
          }
      }
}
setInterval(gameLoop, 20)
