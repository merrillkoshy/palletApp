import React, { useState, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Box } from "../components/Box";
import Pallet from "../components/Pallet";
import { Container, Row, Form, Col } from "react-bootstrap";

function App() {
  const [boxX, setBoxX] = useState(-3);
  const [boxY, setBoxY] = useState(1);
  const [boxZ, setBoxZ] = useState(3);

  const [palletLength, setPalletLength] = useState([5]);
  const [palletWidth, setPalletWidth] = useState([5]);

  return (
    <>
      <Canvas camera={{ position: [-10, 10, 10], fov: 35 }}>
        <ambientLight />
        <pointLight position={[-10, -10, -10]} castShadow />
        <Box size={[1, 1, 1]} position={[boxX, boxY, boxZ]} color={"green"} />
        <Suspense fallback={null}>
          <Pallet palletSize={[palletLength, 0, palletWidth]} />
          {/* {[boxX, boxY, boxZ].map(x =>
          [boxX, boxY, boxZ].map(z => <Box position={[x, 0, z]} />)
        )} */}
        </Suspense>
      </Canvas>
      <Container className="inputContainer">
        <Row>
          <h1>Inputs</h1>
          <Col>
            <Form>
              <Form.Label>
                <h2>Pallet Size</h2>
              </Form.Label>
              <Form.Group controlId="palletLength">
                <Form.Label>Length</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={5}
                  onChange={e => setPalletLength(parseInt(e.target.value))}
                />
              </Form.Group>
              <Form.Group controlId="palletWidth">
                <Form.Label>Width</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={5}
                  onChange={e => setPalletWidth(parseInt(e.target.value))}
                />
              </Form.Group>
              <Form.Label>
                <h2>Box Position</h2>
              </Form.Label>
              <Form.Group controlId="x">
                <Form.Label>X-Axis</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={-3}
                  onChange={e => setBoxX(parseInt(e.target.value))}
                />
              </Form.Group>
              <Form.Group controlId="y">
                <Form.Label>Y-Axis</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={1}
                  min={1}
                  onChange={e => setBoxY(parseInt(e.target.value))}
                />
              </Form.Group>
              <Form.Group controlId="z">
                <Form.Label>Z-Axis</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={-3}
                  onChange={e => setBoxZ(parseInt(e.target.value))}
                />
              </Form.Group>

              {/* <Button variant="primary" type="submit">
    Submit
  </Button> */}
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
