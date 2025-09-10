
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

  const material = new THREE.PointsMaterial({ size: 0.06, color: 0x7cf7d4 })
  points = new THREE.Points(geometry, material)
  scene.add(points)

  window.addEventListener('resize', onResize)
  window.addEventListener('mousemove', onMouseMove)
  animate()
}

let mouseX = 0, mouseY = 0
function onMouseMove(e){
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2
}
function onResize(){
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  requestAnimationFrame(animate)
  points.rotation.y += 0.0007
  points.rotation.x = mouseY * 0.05
  points.rotation.y += mouseX * 0.0005
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
