import React from 'react'
import Filtro from '../../Filtro'
import insta from '../../img/insta.png'
import pre from '../../img/pre.png'
import revista from '../../img/revista.png'
import redacao from '../../img/redacao.png'
import poema from '../../img/poema.png'
import maquete from '../../img/maquete.png'
import redacao2 from '../../img/redacao2.png'
import crianca from '../../img/crianca.png'
import tropicalia from '../../img/tropicalia.png'
import modernismo from '../../img/modernismo.png'

const Materia3 = () => {
  const trabalhos = {
    'primeiro-trimestre': [
      { id: 'T1-1', titulo:'Freedon Rider. Nesta atividade, criamos uma simulação de postagem no Instagram abordando a língua inglesa. Achei extremamente criativa e divertida, pois exigiu pesquisa e consulta em inglês, o que contribuiu para o aprendizado. Desenvolvi as habilidades H11, H25, H10 e H24.', imagem: insta, link: null },
      { id: 'T1-2', titulo:'Pré Modernismo. Realizei uma apresentação sobre o Pré-Modernismo, abordando a análise da obra e a elaboração de uma biografia do autor. A pesquisa aprofundada proporcionou um entendimento mais sólido sobre o período e seus aspectos literários. Desenvolvi as habilidades H15 e H16.', imagem: pre, link: 'https://www.canva.com/design/DAF-EkmY-c4/OW1eq109kQYn2kBYeSLZlg/edit?utm_content=DAF-EkmY-c4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
      { id: 'T1-3', titulo:'Revista literaria, Para esta atividade, foi solicitada a leitura dos livros *Torto Arado* e *Velhos*. Em seguida, tivemos que criar uma revista literária baseada nas obras. Desenvolvi as habilidades H11, H25, H10 e H24.', imagem: revista, link: null },
      
  ],
  'segundo-trimestre': [
    { id: 'T2-1', titulo:'Redação Online. Competência 1; = 120pts, Competência 2; 160pts, Competência 3; 120pts, Competência 4; 160pts, Competência 5; 120pts, total: 680pts', imagem: redacao, link: '' },
    { id: 'T2-1', titulo:'Poema. criamos um poe em sala de aula, abordando conhecimentos linguisticos junto a criatividade para combinar a rima.', imagem: poema, link: 'https://docs.google.com/document/d/11335skz9Fpz_1RTFaR2gLgFKDnA5u5dwrq-cP5971j4/edit?usp=sharing' },
    { id: 'T2-1', titulo:'Maquete. Em grupo, criamos uma maquete da cena descrita no livro.', imagem: maquete, link: null },
   
  ],
  'terceiro-trimestre': [
    { id: 'T3-1', titulo:'Redação 3º Trimestre. Escrevi a última redação do ano.', imagem: redacao2, link: 'https://www.canva.com/design/DAGXiLFjG5s/yjZBfIJ1cowT9tOCQVWJkA/view?utm_content=DAGXiLFjG5s&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
    { id: 'T3-2', titulo:'Atividade Pré-Modernismo. Levantamos dados sobre Euclides da Cunha e sua influência no movimento pré-modernista.', imagem: modernismo, link: 'https://www.canva.com/design/DAF-EkmY-c4/85LWSLLVjbdYGHM-0XBTGg/view?utm_content=DAF-EkmY-c4&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
    { id: 'T3-3', titulo:'Tropicalismo. Estudamos o álbum Tropicália, a fim de entender mais sobre a cultura musical no período ditadorial.', imagem: tropicalia, link: 'https://sites.google.com/estudante.sesisenai.org.br/revistaliteraria?usp=sharing' },
    { id: 'T3-4', titulo:'Foto Criança 😊' , imagem: crianca, link: 'https://www.canva.com/design/DAGXiLviDo4/mAlZuEhLwHuEPJWXR7_D8Q/view?utm_content=DAGXiLviDo4&utm_campaign=designshare&utm_medium=link&utm_source=editor' },

    ],
  };
  
 
  return (
    <>


    <div className='linguagenstudo'>
      <Filtro 
        tituloPagina="Trabalhos de Linguagens"
        opcoesTrimestre={[
          { value: 'primeiro-trimestre', label: 'Primeiro Trimestre' },
          { value: 'segundo-trimestre', label: 'Segundo Trimestre' },
          { value: 'terceiro-trimestre', label: 'Terceiro Trimestre' },
        ]}
        trabalhos={trabalhos}
       
      />
    </div>


    </>
  );
};

export default Materia3;
