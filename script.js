
// Three.js background — floating particles grid with gentle parallax
let scene, camera, renderer, points
const bg = document.getElementById('bg')

function init() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 22

  renderer = new THREE.WebGLRenderer({ canvas: bg, antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const geometry = new THREE.BufferGeometry()
  const num = 800
  const positions = new Float32Array(num * 3)
  for (let i = 0; i < num; i++) {
    positions[i*3 + 0] = (Math.random() - 0.5) * 60
    positions[i*3 + 1] = (Math.random() - 0.5) * 40
    positions[i*3 + 2] = (Math.random() - 0.5) * 40
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  // Create randomized colors for particles
  const colors = new Float32Array(num * 3)
  for (let i = 0; i < num; i++) {
    // Generate random colors with some variation
    const hue = Math.random() * 0.3 + 0.5 // Blue to cyan range
    const saturation = 0.6 + Math.random() * 0.4 // 60-100% saturation
    const lightness = 0.4 + Math.random() * 0.3 // 40-70% lightness
    
    // Convert HSL to RGB
    const c = (1 - Math.abs(2 * lightness - 1)) * saturation
    const x = c * (1 - Math.abs((hue * 6) % 2 - 1))
    const m = lightness - c / 2
    
    let r, g, b
    if (hue < 1/6) { r = c; g = x; b = 0 }
    else if (hue < 2/6) { r = x; g = c; b = 0 }
    else if (hue < 3/6) { r = 0; g = c; b = x }
    else if (hue < 4/6) { r = 0; g = x; b = c }
    else if (hue < 5/6) { r = x; g = 0; b = c }
    else { r = c; g = 0; b = x }
    
    colors[i*3 + 0] = r + m
    colors[i*3 + 1] = g + m
    colors[i*3 + 2] = b + m
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.PointsMaterial({ 
    size: 0.06, 
    vertexColors: true,
    transparent: true,
    opacity: 0.8
  })
  points = new THREE.Points(geometry, material)
  scene.add(points)

  window.addEventListener('resize', onResize)
  window.addEventListener('mousemove', onMouseMove)
  animate()
}

let mouseX = 0, mouseY = 0
let targetRotationX = 0, targetRotationY = 0
function onMouseMove(e){
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2
  
  // Parallax effect on cards
  const cards = document.querySelectorAll('.card, .hero-content')
  cards.forEach(card => {
    const rect = card.getBoundingClientRect()
    const cardCenterX = rect.left + rect.width / 2
    const cardCenterY = rect.top + rect.height / 2
    
    const distX = (e.clientX - cardCenterX) / window.innerWidth * 20
    const distY = (e.clientY - cardCenterY) / window.innerHeight * 20
    
    card.style.transform = `translate(${distX}px, ${distY}px)`
  })
}
function onResize(){
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  requestAnimationFrame(animate)
  
  // Smooth rotation with easing
  targetRotationX = mouseY * 0.05
  targetRotationY = mouseX * 0.0005
  
  points.rotation.y += 0.0007 + targetRotationY
  points.rotation.x += (targetRotationX - points.rotation.x) * 0.05
  
  renderer.render(scene, camera)
}

// Simple tilt hover effect for cards
function applyTilt(){
  const nodes = document.querySelectorAll('.tilt')
  nodes.forEach(node => {
    node.addEventListener('pointermove', e => {
      const rect = node.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rx = ((y / rect.height) - 0.5) * -6
      const ry = ((x / rect.width) - 0.5) * 6
      node.style.transform = `translateY(-2px) rotateX(${rx}deg) rotateY(${ry}deg)`
    })
    node.addEventListener('pointerleave', () => {
      node.style.transform = ''
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  init()
  applyTilt()
})
