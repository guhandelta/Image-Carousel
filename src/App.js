import { ImageSlider, CarouselImages } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <ImageSlider CarouselImages={CarouselImages} />
    </div>
  );
}

export default App;
