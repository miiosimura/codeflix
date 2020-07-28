import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background:'#141414'}}>
      <Menu/>

      <BannerMain videoTitle="O que é um desenvolvedor Fullstack?"
                  videoDescription="O que é e o que faz um desenvolvedor Fullstack"
                  url="https://www.youtube.com/watch?v=98UWCwWul2I"/>

      <Carousel ignoreFirstVideo=""
                category={{titulo: "Back-end",
                            cor: "#123456",
                            link_extra: "https://www.youtube.com/watch?v=Qjk-cSW-jk4",
                            videos: [{
                              titulo: "Entendendo Back-End para Iniciantes em Programação",
                              url: "https://www.youtube.com/watch?v=Qjk-cSW-jk4"
                            }]
                          }}
      />

      <Carousel ignoreFirstVideo=""
                category={{titulo: "Front-end",
                            cor: "#661100",
                            link_extra: "https://www.youtube.com/watch?v=TWy2rxyZLrE",
                            videos: [{
                              titulo: "As Skills de um Desenvolvedor Front-End",
                              url: "https://www.youtube.com/watch?v=TWy2rxyZLrE"
                            }]
                          }}
      />

      <Carousel ignoreFirstVideo=""
                category={{titulo: "Devops",
                            cor: "#005500",
                            link_extra: "https://www.youtube.com/watch?v=bwO8EZf0gLI",
                            videos: [{
                              titulo: "Entendendo 'Devops' para Iniciantes em Programação",
                              url: "https://www.youtube.com/watch?v=bwO8EZf0gLI"
                            }]
                          }}
      />

      <Footer />
    </div>
  );
}

export default App;
