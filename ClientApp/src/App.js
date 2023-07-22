import { useState, useEffect } from 'react';
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaContacto from "./components/TablaContacto";
import ModalContacto from './components/ModalContacto';


const App = () => {

  const [contactos, setContactos] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [editar, setEditar] = useState(null);

  const mostrarContactos = async () => {
    const response = await fetch("api/contactos/Lista");

    if (response.ok) {
      const data = await response.json();

      setContactos(data);

    } else {
      console.log("Error en los datos de la lista");
    }
  }

  useEffect(() => {
    mostrarContactos();
  }, [])


  const guardarContacto = async (contacto) => {
    const response = await fetch("api/contactos/Guardar", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(contacto)
    })

    if (response.ok) {
      setMostrarModal(!mostrarModal);
      mostrarContactos();
    }
  }

  const editarContacto = async (contacto) => {
    const response = await fetch("api/contactos/Editar", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(contacto)
    })

    if (response.ok) {
      setMostrarModal(!mostrarModal);
      mostrarContactos();
    }
  }

  const eliminarContacto = async (id) => {

    var respuesta = window.confirm("¿Estás seguro de eliminar el elemento?");


    if (!respuesta) {
      return;
    }

    const response = await fetch("api/contactos/Eliminar/" + id, {
      method: 'DELETE',

    });
    /**  
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(contacto)
      */


    if (response.ok) {
      mostrarContactos();
    }
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Lista de contactos</h5>
            </CardHeader>
            <CardBody>
              <Button size="sm" color="success" onClick={() => setMostrarModal(!mostrarModal)}>Nuevo Contacto</Button>
              <hr></hr>
              <TablaContacto data={contactos}
                setEditar={setEditar}
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                eliminarContacto={eliminarContacto}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <ModalContacto mostrarModal={mostrarModal}
        setMostrarModal={setMostrarModal}
        guardarContacto={guardarContacto}
        editar={editar}
        setEditar={setEditar}
        editarContacto={editarContacto}
      />
    </Container>
  );

}

export default App;