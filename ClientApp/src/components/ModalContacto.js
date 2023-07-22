import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"
import { useState, useEffect } from "react";

const modeloContacto = {
    id: 0,
    nombre: '',
    correo: '',
    telefono: ''
}

const ModalContacto = ({ mostrarModal, setMostrarModal, guardarContacto, setEditar, editar, editarContacto }) => {

    const [contacto, setContacto] = useState(modeloContacto);

    const actualizaDato = (e) => {
        console.log(e.target.name + " : " + e.target.value);

        setContacto({
            ...contacto, [e.target.name]: e.target.value
        });
    }

    const enviarDatos = () => {
        if (contacto.id == 0) {
            guardarContacto(contacto);

        } else {
            editarContacto(contacto); //
        }
    }

    useEffect(() => {
        if (editar != null) {
            setContacto(editar);
        } else {
            setContacto(modeloContacto);
        }

        // setContacto(modeloContacto);
    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal);
        setEditar(null);
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {contacto.id == 0  ? "Nuevo contacto" : "Editar contacto"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizaDato(e)} value={contacto.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input name="correo" onChange={(e) => actualizaDato(e)} value={contacto.correo} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input name="telefono" onChange={(e) => actualizaDato(e)} value={contacto.telefono} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos} >Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal} >Cerrar</Button>
            </ModalFooter>

        </Modal>
    )
}

export default ModalContacto;


/*

<!--
                <Button color="danger" size="sm" onClick={() => setMostrarModal(!mostrarModal)} >Cerrar</Button>
                -->

*/