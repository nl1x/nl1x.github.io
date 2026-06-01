import TopBar from "./components/ui/topbar/topbar.tsx";
import Tag from "./components/ui/tag/tag.tsx";


function App() {
  return (
    <>
      <div>
        <TopBar
          left={<Tag>In progress...</Tag>}
          center={<h1>nL1x's portfolio</h1>}
        />
      </div>
    </>
  )
}

export default App
