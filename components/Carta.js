import { StyleSheet, TouchableOpacity } from 'react-native'

export default function Carta({ id, color, carta, pressionada, setPressionada, desabilitada, clicadas, status }) {

    const verificaStatus = () => {
        switch(status) {
            case 0: return { background: '#6C809A' }
            case 1: return { background: color }
            case 2: return { background: color, opacity: 0.5 }
        }
    }
  

    return (
        <TouchableOpacity disabled={status == 2 ? true : false}
            style={[
                styles.carta_container,
                verificaStatus(),
                
            ]}

            onPress={() => {carta.status = 1 ,setPressionada(id), clicadas.push(carta) }}>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    carta_container: {
        width: 80,
        height: 120,
        borderRadius: 5,
    }
})