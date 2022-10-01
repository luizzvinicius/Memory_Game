import { StyleSheet, View } from 'react-native'
import { useState } from 'react'
import Carta from './Carta'

export default function Tabuleiro() {
    const [cartas, setCartas] = useState([
        { id: 1, color: '#FFF7AE', status: 0 },
        { id: 2, color: '#FFF7AE', status: 0 },
        { id: 3, color: '#8B5FBF', status: 0 },
        { id: 4, color: '#8B5FBF', status: 0 },
        { id: 5, color: '#E3879E', status: 0 },
        { id: 6, color: '#E3879E', status: 0 },
        { id: 7, color: '#FEC0CE', status: 0 },
        { id: 8, color: '#FEC0CE', status: 0 }
    ])

    const [pressionada, setPressionada] = useState(0)
    const [clicadas, setClicadas] = useState([])


    const compara = (clicadas) => {
        if (clicadas.length == 2) {
            const copiaCartas = [...cartas]


            setTimeout(() => {


                if (clicadas[0].color == clicadas[1].color) {

                    copiaCartas.forEach(carta => {
                        carta.color == clicadas[0].color ? carta.status = 2 : ''
                    })

                } else {
                    clicadas.forEach((carta) => {
                        carta.status = 0
                    })
                }

                setCartas(copiaCartas)
            }, 450);

            
            setClicadas([])
        }
        console.table(clicadas)
    }

    return (
        <View style={styles.tabuleiro_container}>
            {
                cartas.map(carta =>
                    <Carta key={carta.id} carta={carta} id={carta.id} color={carta.color} pressionada={pressionada} setPressionada={setPressionada} clicadas={clicadas} status={carta.status} />
                )
            }

            {compara(clicadas)}
        </View>
    )
}

const styles = StyleSheet.create({
    tabuleiro_container: {
        width: '75%',
        height: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 15,
        borderColor: '#F46197',
        borderWidth: 3,
    }
})