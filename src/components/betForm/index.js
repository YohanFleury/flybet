import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'


const BetForm = () => {

const [competition, setCompetition] = useState('')
const handleCompetition = e => {
    setCompetition(e.target.value)
}
const [date, setDate] = useState('')
const handleDate = e => {
    setDate(e.target.value)
}
const [firstTeam, setFirstTeam] = useState('')
const handleFirstTeam = e => {
    setFirstTeam(e.target.value)
}
const [secondTeam, setSecondTeam] = useState('')
const handleSecondTeam = e => {
    setSecondTeam(e.target.value)
}
const [pronostic, setPronostic] = useState('')
const handlePronostic = e => {
    setPronostic(e.target.value)
}
const [odd, setOdd] = useState('')
const handleOdd = e => {
    setOdd(e.target.value)
}
const [analyse, setAnalyse] = useState('')
const handleAnalyse = e => {
    setAnalyse(e.target.value)
}
  return (
      <div>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" value={date} onChange={handleDate} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Compétition</Form.Label>
                <Form.Control type="text" value={competition} onChange={handleCompetition} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Equipe 1</Form.Label>
                <Form.Control type="text" value={firstTeam} onChange={handleFirstTeam} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Equipe 2</Form.Label>
                <Form.Control type="text" value={secondTeam} onChange={handleSecondTeam} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Pronostic</Form.Label>
                <Form.Control type="text" value={pronostic} onChange={handlePronostic} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Côte</Form.Label>
                <Form.Control type="text" value={odd} onChange={handleOdd} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Analyse</Form.Label>
                <Form.Control type="textarea" value={analyse} onChange={handleAnalyse} />
            </Form.Group>
            <Button variant="warning"> Publier </Button>
        </Form>
      </div>
  )
}
export default BetForm