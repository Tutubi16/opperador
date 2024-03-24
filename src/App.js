import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<div className="cabecalho">
			Central de Opperações
		</div>
		<div className="logo"></div>
	  </header>
      <main className="App-main">
		<div className="Content"> 
			<iframe width="560" height="315" src="https://www.youtube.com/embed/eMdwIhB-XSk?si=TskhdBDC_81P0TAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			<span>
				Eis que o <a href="https://twitch.tv/opperador">Opper</a> toma um pau pro <a href="https://twitch.tv/tutubi16">Tutu!</a>

			</span>
		</div>
	  </main>
	  <footer className="App-footer"> 
		<span>Produzido com ódio por <a href="https://github.com/Tutubi16"> @tutubi16 </a> e com amor por <a href="https://github.com/malkavianson">@Malkavianson</a> para o corno do Opper.</span>
	  </footer>
    </div>
  );
}

export default App;
