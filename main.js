document.addEventListener("DOMContentLoaded", function() {
	let butSkills = document.querySelector(".butSkills")
	let butEQ = document.querySelector(".butEQ")
	let butExp = document.querySelector(".butExp")
	let butLangues = document.querySelector(".butLangues")
	let butRef = document.querySelector(".butRef")
	let butMisc = document.querySelector(".butMisc")
	let a = document.querySelector("#a")
	let body = document.querySelector("body")


	setTimeout(function(){
		butSkills.classList.add("butSkillsAnim")
		butSkills.innerHTML += "Technical Skills"
		spanUn = document.createElement("span")
		butSkills.appendChild(spanUn)
		spanDeux = document.createElement("span")
		butSkills.appendChild(spanDeux)
		spanTrois = document.createElement("span")
		butSkills.appendChild(spanTrois)
		spanQuatre = document.createElement("span")
		butSkills.appendChild(spanQuatre)

		butEQ.classList.add("butEQAnim")
		butEQ.innerHTML += "Education / Qualifications"
		spanUn = document.createElement("span")
		butEQ.appendChild(spanUn)
		spanDeux = document.createElement("span")
		butEQ.appendChild(spanDeux)
		spanTrois = document.createElement("span")
		butEQ.appendChild(spanTrois)
		spanQuatre = document.createElement("span")
		butEQ.appendChild(spanQuatre)
		
	}, 2000)


	setTimeout(function(){
		butRef.classList.add("butRefAnim")
		butRef.innerHTML += "References"
		spanUn = document.createElement("span")
		butRef.appendChild(spanUn)
		spanDeux = document.createElement("span")
		butRef.appendChild(spanDeux)
		spanTrois = document.createElement("span")
		butRef.appendChild(spanTrois)
		spanQuatre = document.createElement("span")
		butRef.appendChild(spanQuatre)

		butMisc.classList.add("butMiscAnim")
		butMisc.innerHTML += "Miscellaneous"
		spanUn = document.createElement("span")
		butMisc.appendChild(spanUn)
		spanDeux = document.createElement("span")
		butMisc.appendChild(spanDeux)
		spanTrois = document.createElement("span")
		butMisc.appendChild(spanTrois)
		spanQuatre = document.createElement("span")
		butMisc.appendChild(spanQuatre)
	}, 4000)

})