// ============================================
// PSEUDOLINGO - Enhanced Language Generator
// ============================================

// Get DOM elements
const menuToggle = document.querySelector(".menu-toggle")
const sidebar = document.getElementById("sidebar")
const mobileOverlay = document.querySelector(".mobile-overlay")
const navLinks = document.querySelectorAll(".nav-link")

// Toggle mobile menu
menuToggle?.addEventListener("click", () => {
  sidebar.classList.toggle("active")
  mobileOverlay.classList.toggle("active")

  const icon = menuToggle.querySelector("i")
  if (sidebar.classList.contains("active")) {
    icon.className = "fa-solid fa-times"
    menuToggle.style.left = "260px"
  } else {
    icon.className = "fa-solid fa-bars"
    menuToggle.style.left = "1rem"
  }
})

// Close mobile menu when overlay is clicked
mobileOverlay?.addEventListener("click", () => {
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
  sidebar?.classList.remove("active")
  mobileOverlay?.classList.remove("active")
  const icon = menuToggle?.querySelector("i")
  if (icon) icon.className = "fa-solid fa-bars"
}

// Close mobile menu on window resize if screen becomes larger
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMobileMenu()
  }
})

// ============================================
// STYLE-SPECIFIC PHONEME SETS
// ============================================

const phonemeSets = {
  elvish: {
    consonants: {
      initial: ["l", "m", "n", "r", "s", "th", "v", "w", "y", "f", "ph", "c", "g"],
      medial: ["l", "m", "n", "r", "s", "th", "v", "w", "y", "f", "ph", "nd", "rn", "lm", "nn"],
      final: ["l", "n", "r", "s", "th", "f", "m", "w"]
    },
    vowels: ["a", "e", "i", "o", "u", "ae", "ea", "ia", "ue", "ei", "au"],
    syllablePatterns: ["CV", "CVV", "CVC", "VC", "V"],
    wordEndings: ["a", "e", "i", "o", "ia", "iel", "ara", "eth", "on"],
    capitalization: "title"
  },
  
  dwarven: {
    consonants: {
      initial: ["b", "d", "g", "k", "m", "n", "r", "t", "th", "z", "gr", "dr", "kr", "br", "tr"],
      medial: ["b", "d", "g", "k", "m", "n", "r", "t", "z", "rg", "rk", "rm", "rn", "rd"],
      final: ["k", "g", "r", "m", "n", "t", "d", "z", "rk", "ng"]
    },
    vowels: ["a", "e", "i", "o", "u", "au", "ou", "ei"],
    syllablePatterns: ["CVC", "CCVC", "CVCC", "CVC"],
    wordEndings: ["ak", "ek", "ik", "ok", "uk", "ar", "or", "ur", "im", "um"],
    capitalization: "upper"
  },
  
  alien: {
    consonants: {
      initial: ["x", "z", "q", "k", "v", "j", "g", "kl", "kr", "xr", "zx", "qv", "kx"],
      medial: ["x", "z", "q", "k", "v", "j", "g", "rx", "zx", "kx", "vx", "qx"],
      final: ["x", "z", "q", "k", "v", "j", "g", "rx", "zx", "kx"]
    },
    vowels: ["a", "e", "i", "o", "u", "aa", "ee", "ii", "oo", "uu", "ae", "ei"],
    syllablePatterns: ["CV", "CVC", "CCV", "CCVC", "VCC"],
    wordEndings: ["x", "z", "q", "kx", "zx", "rx", "ix", "ax"],
    capitalization: "lower"
  },
  
  mystical: {
    consonants: {
      initial: ["m", "n", "r", "s", "sh", "th", "ph", "ch", "kh", "rh", "zh", "mn", "mr"],
      medial: ["m", "n", "r", "s", "sh", "th", "ph", "ch", "kh", "lm", "ln", "rn", "rm"],
      final: ["m", "n", "r", "s", "sh", "th", "ph", "ch", "h", "n"]
    },
    vowels: ["a", "e", "i", "o", "u", "ae", "ea", "oo", "uu", "io", "ei", "ou"],
    syllablePatterns: ["CV", "CVC", "VC", "CVV", "VCC"],
    wordEndings: ["a", "e", "i", "o", "ah", "eh", "oh", "eth", "oth", "ith"],
    capitalization: "title"
  },
  
  robotic: {
    consonants: {
      initial: ["b", "d", "f", "g", "k", "p", "t", "v", "z", "bl", "br", "dr", "fr", "gr", "kr", "pr", "tr"],
      medial: ["b", "d", "f", "g", "k", "p", "t", "v", "z", "rb", "rd", "rk", "rt", "rv"],
      final: ["k", "t", "p", "d", "b", "g", "x", "z", "v", "ck", "pt", "kt"]
    },
    vowels: ["a", "e", "i", "o", "u", "0", "1", "-"],
    syllablePatterns: ["CVC", "CV", "CCV", "CVC"],
    wordEndings: ["-0", "-1", "-X", "-9", "-bot", "-tron", "-oid"],
    capitalization: "upper"
  },
  
  korean: {
    consonants: {
      initial: ["g", "n", "d", "r", "m", "b", "s", "j", "ch", "k", "t", "p", "h", "kk", "tt", "pp", "ss", "jj"],
      medial: ["g", "n", "d", "r", "m", "b", "s", "j", "k", "t", "p", "ng", "n", "m"],
      final: ["k", "n", "t", "l", "m", "p", "ng", "n", "m"]
    },
    vowels: ["a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "wo", "we", "wi", "yu", "eu", "ui", "i"],
    syllablePatterns: ["CVC", "CV", "VC"],
    wordEndings: ["a", "o", "u", "i", "da", "yo", "mnida", "imnida"],
    capitalization: "lower"
  },
  
  chinese: {
    consonants: {
      initial: ["b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h", "j", "q", "x", "zh", "ch", "sh", "r", "z", "c", "s"],
      medial: ["ng", "n", "r", "i", "u"],
      final: ["ng", "n", "r"]
    },
    vowels: ["a", "o", "e", "i", "u", "ü", "ai", "ei", "ao", "ou", "an", "en", "ang", "eng", "er", "yi", "wu", "yu"],
    syllablePatterns: ["CV", "CVC", "CVV", "V"],
    wordEndings: ["", "zi", "zhi", "shi", "chi", "er"],
    capitalization: "lower"
  },
  
  japanese: {
    consonants: {
      initial: ["k", "s", "t", "n", "h", "m", "y", "r", "w", "g", "z", "d", "b", "p", "ky", "sh", "ch", "ny", "hy", "my", "ry", "gy", "j", "by", "py"],
      medial: ["k", "s", "t", "n", "h", "m", "y", "r", "g", "z", "d", "b", "p", "n", "m"],
      final: ["n", "u", "i", "o", "a"]
    },
    vowels: ["a", "i", "u", "e", "o", "ou", "ei", "ai", "ui", "oi"],
    syllablePatterns: ["CV", "CVV", "V", "CVC"],
    wordEndings: ["u", "i", "o", "a", "e", "desu", "masu", "ru", "su"],
    capitalization: "lower"
  },
  
  ancient: {
    consonants: {
      initial: ["th", "ph", "kh", "ch", "gh", "bh", "dh", "k", "t", "p", "s", "m", "n", "r", "l"],
      medial: ["th", "ph", "kh", "k", "t", "p", "s", "m", "n", "r", "l", "rr", "ll", "nn", "mm"],
      final: ["s", "r", "n", "m", "x", "th", "ph", "k", "t", "p"]
    },
    vowels: ["a", "e", "i", "o", "u", "ae", "oe", "au", "eu", "ei"],
    syllablePatterns: ["CVC", "CV", "CCVC", "CVC"],
    wordEndings: ["us", "os", "is", "as", "es", "um", "on", "an", "en", "ax"],
    capitalization: "title"
  }
}

// ============================================
// VOCABULARY MANAGEMENT
// ============================================

const VOCABULARY_KEY = 'pseudolingo_vocabulary'

function getVocabulary() {
  const stored = localStorage.getItem(VOCABULARY_KEY)
  return stored ? JSON.parse(stored) : {}
}

function saveVocabulary(vocab) {
  localStorage.setItem(VOCABULARY_KEY, JSON.stringify(vocab))
}

function addToVocabulary(original, pseudo, style) {
  const vocab = getVocabulary()
  const key = `${original.toLowerCase()}_${style}`
  vocab[key] = {
    original: original,
    pseudo: pseudo,
    style: style,
    timestamp: Date.now()
  }
  saveVocabulary(vocab)
  updateDictionaryDisplay()
}

function getStoredTranslation(word, style) {
  const vocab = getVocabulary()
  const key = `${word.toLowerCase()}_${style}`
  return vocab[key]?.pseudo || null
}

// ============================================
// HASH FUNCTION FOR CONSISTENT MAPPING
// ============================================

function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// ============================================
// SYLLABLE GENERATION
// ============================================

function generateSyllable(pattern, phonemes, seed) {
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  
  let syllable = ""
  
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]
    if (char === "C") {
      // Consonant
      if (i === 0) {
        syllable += phonemes.consonants.initial[Math.floor(rand() * phonemes.consonants.initial.length)]
      } else if (i === pattern.length - 1) {
        syllable += phonemes.consonants.final[Math.floor(rand() * phonemes.consonants.final.length)]
      } else {
        syllable += phonemes.consonants.medial[Math.floor(rand() * phonemes.consonants.medial.length)]
      }
    } else if (char === "V") {
      // Vowel
      syllable += phonemes.vowels[Math.floor(rand() * phonemes.vowels.length)]
    }
  }
  
  return syllable
}

// ============================================
// MAIN TRANSLATION FUNCTION
// ============================================

function generatePseudoText(sentence, style, structure) {
  const words = sentence.trim().split(/\s+/)
  const phonemes = phonemeSets[style] || phonemeSets.elvish
  const results = []
  
  for (const word of words) {
    // Check if we already have a translation for this word
    const stored = getStoredTranslation(word, style)
    if (stored) {
      results.push(stored)
      continue
    }
    
    // Generate new translation
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '')
    if (cleanWord.length === 0) {
      results.push(word)
      continue
    }
    
    // Create a seed based on the word and style for consistency
    const seed = hashString(cleanWord + style + structure)
    let pseudoWord = ""
    
    // Determine number of syllables based on original word length
    const syllableCount = Math.max(1, Math.ceil(cleanWord.length / 2.5))
    
    // Generate syllables
    for (let s = 0; s < syllableCount; s++) {
      let pattern
      
      if (structure === "cv") {
        pattern = "CV"
      } else if (structure === "cvc") {
        pattern = s === syllableCount - 1 ? "CVC" : "CV"
      } else if (structure === "vc") {
        pattern = s === 0 ? "VC" : "CVC"
      } else if (structure === "cvvc") {
        pattern = "CVV"
      } else {
        // Random - pick from style's patterns
        const patterns = phonemes.syllablePatterns
        pattern = patterns[Math.floor(seededRandom(seed + s) * patterns.length)]
      }
      
      pseudoWord += generateSyllable(pattern, phonemes, seed + s * 1000)
    }
    
    // Add word ending occasionally for flavor
    if (seededRandom(seed + 999) > 0.7 && phonemes.wordEndings.length > 0) {
      const ending = phonemes.wordEndings[Math.floor(seededRandom(seed + 1000) * phonemes.wordEndings.length)]
      pseudoWord += ending
    }
    
    // Apply capitalization based on style
    if (phonemes.capitalization === "upper") {
      pseudoWord = pseudoWord.toUpperCase()
    } else if (phonemes.capitalization === "title") {
      pseudoWord = pseudoWord.charAt(0).toUpperCase() + pseudoWord.slice(1)
    } else {
      pseudoWord = pseudoWord.toLowerCase()
    }
    
    // Preserve original capitalization
    if (word[0] === word[0]?.toUpperCase()) {
      pseudoWord = pseudoWord.charAt(0).toUpperCase() + pseudoWord.slice(1)
    }
    
    // Store in vocabulary
    addToVocabulary(word, pseudoWord, style)
    
    results.push(pseudoWord)
  }
  
  return results.join(" ")
}

// ============================================
// DICTIONARY DISPLAY
// ============================================

function updateDictionaryDisplay() {
  const dictSection = document.getElementById('dictionary-section')
  if (!dictSection) return
  
  const vocab = getVocabulary()
  const entries = Object.values(vocab)
  
  // Find or create the dictionary grid
  let grid = dictSection.querySelector('.dictionary-grid')
  if (!grid) {
    grid = document.createElement('div')
    grid.className = 'dictionary-grid'
    dictSection.querySelector('.container1')?.appendChild(grid)
  }
  
  // Clear existing content except header
  grid.innerHTML = `
    <div class="dict-header">Original</div>
    <div class="dict-header">Pseudo</div>
    <div class="dict-header">Style</div>
  `
  
  // Add entries (sorted by most recent)
  entries
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 50) // Show last 50 entries
    .forEach(entry => {
      const origDiv = document.createElement('div')
      origDiv.className = 'dict-item'
      origDiv.textContent = entry.original
      
      const pseudoDiv = document.createElement('div')
      pseudoDiv.className = 'dict-item'
      pseudoDiv.textContent = entry.pseudo
      
      const styleDiv = document.createElement('div')
      styleDiv.className = 'dict-item'
      styleDiv.textContent = entry.style.charAt(0).toUpperCase() + entry.style.slice(1)
      
      grid.appendChild(origDiv)
      grid.appendChild(pseudoDiv)
      grid.appendChild(styleDiv)
    })
}

// ============================================
// EVENT LISTENERS
// ============================================

document.getElementById("generate")?.addEventListener("click", () => {
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

  const output = document.getElementById("output")
  output.value = generatePseudoText(sentence, style, structure)
})

// Copy to clipboard
document.getElementById("copyBtn")?.addEventListener("click", () => {
  const output = document.getElementById("output")
  if (output.value) {
    navigator.clipboard.writeText(output.value).then(() => {
      const btn = document.getElementById("copyBtn")
      const originalText = btn.textContent
      btn.textContent = "COPIED!"
      setTimeout(() => {
        btn.textContent = originalText
      }, 2000)
    })
  }
})

// Initialize dictionary on page load
document.addEventListener('DOMContentLoaded', () => {
  updateDictionaryDisplay()
})
