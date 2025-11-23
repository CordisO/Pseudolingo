// Get DOM elements
const menuToggle = document.querySelector(".menu-toggle")
const sidebar = document.getElementById("sidebar")
const mobileOverlay = document.querySelector(".mobile-overlay")
const navLinks = document.querySelectorAll(".nav-link")

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active")
  mobileOverlay.classList.toggle("active")

  // Update icon and position
  const icon = menuToggle.querySelector("i")
  if (sidebar.classList.contains("active")) {
    icon.className = "fa-solid fa-times"
    // ✅ ADDED: Move button to the right when sidebar is open
    menuToggle.style.left = "260px"
  } else {
    icon.className = "fa-solid fa-bars"
    // ✅ ADDED: Reset button position when sidebar is closed
    menuToggle.style.left = "1rem"
  }
})

// Close mobile menu when overlay is clicked
mobileOverlay.addEventListener("click", () => {
  closeMobileMenu()
})

// Close mobile menu when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu()
  })
})

// Function to close mobile menu
function closeMobileMenu() {
  sidebar.classList.remove("active")
  mobileOverlay.classList.remove("active")
  const icon = menuToggle.querySelector("i")
  icon.className = "fa-solid fa-bars"
}

// Close mobile menu on window resize if screen becomes larger
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMobileMenu()
  }
})

// Language generation functionality (placeholder)
document.getElementById("generate").addEventListener("click", () => {
  const sentence = document.getElementById("sentence").value
  const style = document.getElementById("style").value
  const structure = document.getElementById("structure").value

  if (!sentence.trim()) {
    alert("Please enter a sentence to translate!")
    return
  }

  if (!style || !structure) {
    alert("Please select both a language style and syllable structure!")
    return
  }

  // Placeholder generation logic
  const output = document.getElementById("output")
  output.value = `Generated ${style} text with ${structure} structure: ${generatePseudoText(sentence, style, structure)}`
})

// Simple pseudo text generation function
function generatePseudoText(sentence, style, structure) {
  const words = sentence.split(" ")
  const consonants = "bcdfghjklmnpqrstvwxyz"
  const vowels = "aeiou"

  return words
    .map((word) => {
      let pseudoWord = ""
      const wordLength = Math.max(2, Math.floor(word.length * 0.8))

      for (let i = 0; i < wordLength; i++) {
        if (structure === "cv") {
          pseudoWord += consonants[Math.floor(Math.random() * consonants.length)]
          pseudoWord += vowels[Math.floor(Math.random() * vowels.length)]
        } else if (structure === "cvc") {
          pseudoWord += consonants[Math.floor(Math.random() * consonants.length)]
          pseudoWord += vowels[Math.floor(Math.random() * vowels.length)]
          pseudoWord += consonants[Math.floor(Math.random() * consonants.length)]
        } else {
          // Random structure
          const isConsonant = Math.random() > 0.5
          if (isConsonant) {
            pseudoWord += consonants[Math.floor(Math.random() * consonants.length)]
          } else {
            pseudoWord += vowels[Math.floor(Math.random() * vowels.length)]
          }
        }
      }

      return pseudoWord
    })
    .join(" ")
}
