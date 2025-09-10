
// Three.js background — mouse-following, multi-color 'glitchy' particles
let scene, camera, renderer, points, positions, colors, velocities, geometry, material
const bg = document.getElementById('bg')

function init() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 22

  renderer = new THREE.WebGLRenderer({ canvas: bg, antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  geometry = new THREE.BufferGeometry()
  const num = 1000
  positions = new Float32Array(num * 3)
  colors = new Float32Array(num * 3)
  velocities = new Float32Array(num * 3)

  const spreadX = 60, spreadY = 40, spreadZ = 40
  for (let i = 0; i < num; i++) {
    const ix = i*3
    positions[ix + 0] = (Math.random() - 0.5) * spreadX
    positions[ix + 1] = (Math.random() - 0.5) * spreadY
    positions[ix + 2] = (Math.random() - 0.5) * spreadZ
    velocities[ix + 0] = 0
    velocities[ix + 1] = 0
    velocities[ix + 2] = 0
    // initial color
    const hue = (i / num)
    const c = new THREE.Color().setHSL(hue, 0.9, 0.6)
    colors[ix + 0] = c.r
    colors[ix + 1] = c.g
    colors[ix + 2] = c.b
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  material = new THREE.PointsMaterial({ size: 0.07, vertexColors: true, transparent: true, opacity: 0.95 })
  points = new THREE.Points(geometry, material)
  scene.add(points)

  window.addEventListener('resize', onResize)
  window.addEventListener('mousemove', onMouseMove)
  animate()
}

let mouseX = 0, mouseY = 0, pmx = 0, pmy = 0, vdx = 0, vdy = 0
let t = 0

function onMouseMove(e){
  const nx = e.clientX / window.innerWidth
  const ny = e.clientY / window.innerHeight
  mouseX = nx
  mouseY = ny
  // mouse delta
  const dx = nx - pmx
  const dy = ny - pmy
  pmx = nx
  pmy = ny
  // target velocity influenced by mouse direction (scaled)
  vdx += dx * 0.6
  vdy += -dy * 0.6
}

function onResize(){
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  requestAnimationFrame(animate)
  t += 0.016

  // smooth the global drift
  vdx *= 0.94
  vdy *= 0.94

  const num = positions.length / 3
  for (let i = 0; i < num; i++) {
    const ix = i*3
    // add slight per-particle noise so the field 'wobbles'
    const wobble = Math.sin(t*2 + i*0.17) * 0.02
    velocities[ix + 0] += (vdx * 0.02 + wobble) * 0.2
    velocities[ix + 1] += (vdy * 0.02 + wobble) * 0.2
    velocities[ix + 2] += Math.sin(t + i*0.11) * 0.001

    // damping
    velocities[ix + 0] *= 0.96
    velocities[ix + 1] *= 0.96
    velocities[ix + 2] *= 0.98

    positions[ix + 0] += velocities[ix + 0]
    positions[ix + 1] += velocities[ix + 1]
    positions[ix + 2] += velocities[ix + 2]

    // bounds wrap
    if (positions[ix + 0] > 32) positions[ix + 0] = -32
    if (positions[ix + 0] < -32) positions[ix + 0] = 32
    if (positions[ix + 1] > 22) positions[ix + 1] = -22
    if (positions[ix + 1] < -22) positions[ix + 1] = 22
    if (positions[ix + 2] > 22) positions[ix + 2] = -22
    if (positions[ix + 2] < -22) positions[ix + 2] = 22

    // "glitchy" color cycling per particle
    const hue = (i * 0.003 + t * (0.6 + Math.sin(i*0.13)*0.4)) % 1
    const c = new THREE.Color().setHSL(hue, 0.9, 0.55 + Math.sin(t*3 + i)*0.08)
    // occasional hard glitch pops
    if ((i + Math.floor(t*60)) % 97 === 0) {
      c.offsetHSL(0.2, 0.2, 0.2)
    }
    colors[ix + 0] = c.r
    colors[ix + 1] = c.g
    colors[ix + 2] = c.b
  }

  geometry.attributes.position.needsUpdate = true
  geometry.attributes.color.needsUpdate = true

  // gentle parallax to reinforce direction
  points.rotation.x = (mouseY - 0.5) * 0.1
  points.rotation.y = (mouseX - 0.5) * 0.1

  renderer.render(scene, camera)
}

// Enhanced tilt effect still applies
function applyTilt(){
  const nodes = document.querySelectorAll('.tilt')
  nodes.forEach(node => {
    node.addEventListener('pointermove', e => {
      const rect = node.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rx = ((y / rect.height) - 0.5) * -8
      const ry = ((x / rect.width) - 0.5) * 8
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
