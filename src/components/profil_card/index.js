import Card from 'react-bootstrap/Card'

const styleCard = {
    width: '400px',
    height: '300px',
}


const ProfilCard = () => {
  return (
    <Card border="ligth" style={styleCard}>
        <Card.Header>Inscrit depuis le : XX/XX/XXXX</Card.Header>
        <Card.Body>
            <Card.Title>Pseudo</Card.Title>
            <Card.Text>
                Votre solde est de : 10 000 betcoin
            </Card.Text>
            
        </Card.Body>
    </Card>
  )
}
export default ProfilCard