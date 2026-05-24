import AnimatedBackground from './components/AnimatedBackground'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <div style={{ position: 'relative', zIndex: 0, minHeight: '100vh' }}>
      <AnimatedBackground />
      <AppRouter />
    </div>
  )
}

export default App
