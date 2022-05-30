import React from 'react'
import { CardGroup } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Footer } from 'react-bootstrap'

function index() {
  return (
    <CardGroup >
  <Card>
  <Card.Footer>
  Jogos para jogar com amigos:
  </Card.Footer>
    <Card.Img variant="top" src="https://jeonline.com.br/site/uploads/posts/10418_12032017153922.jpg" />
    <Card.Body>
      <Card.Title>Horizon zero down</Card.Title>
      <Card.Text>
        Jogo de mundo aberto com incríveis qualidades graficas
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
  <Card.Footer>
  Jogos em tendencia:
  </Card.Footer>
    <Card.Img variant="top" src="https://www.geeksunited.com.br/wp-content/uploads/2019/02/sekiro-min.png" />
    <Card.Body>
      <Card.Title>Sekiro</Card.Title>
      <Card.Text>
        Jogo velho que o Antonio gosta
      </Card.Text>
    </Card.Body>
    
      
    
  </Card>
  <Card>
  <Card.Footer>
  Jogos nostalgicos:
  </Card.Footer>
    <Card.Img variant="top" src="https://s3-sa-east-1.amazonaws.com/youportal/fotos/noticias/15804/gd/servidores-de-dark-souls-sao-desligados_2bht.jpg" />
    <Card.Body>
      <Card.Title>Dark Souls</Card.Title>
      <Card.Text>
       Jogo de quem gosta de ser altamente ridicularizado,pois caso voçe zere esse Jogo
       saberemos que voçe não tem vida social
      </Card.Text>
    </Card.Body>
    
      
   
  </Card>
</CardGroup>
  ) 
}

export default index