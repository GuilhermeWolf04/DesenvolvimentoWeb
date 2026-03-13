import React from 'react';
import { useState } from 'react';
import {
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const AVATARS = [
  'https://i.pravatar.cc/200?img=11',
  'https://i.pravatar.cc/200?img=47',
];

export default function App() {
  const [nome, setNome] = useState('');
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  function abrirAlerta(title: string, message: string) {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertVisible(true);
  }

  function handleSalvar() {
    const nomeFinal = nome.trim();
    if (!nomeFinal) {
      abrirAlerta('Atenção', 'Por favor insira um nome antes de salvar.');
      return;
    }
    abrirAlerta('Perfil salvo!', `Olá, ${nomeFinal}!`);
  }

  function handleTrocarFoto() {
    setAvatarIndex((prev) => (prev === 0 ? 1 : 0));
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 24 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          bounces={false}
        >
          <Text style={styles.titulo}>Perfil Rápido</Text>

          <Image
            source={{ uri: AVATARS[avatarIndex] }}
            style={styles.avatar}
            resizeMode="cover"
          />

          <TouchableOpacity style={styles.botaoTrocar} onPress={handleTrocarFoto}>
            <Text style={styles.botaoTrocarTexto}>🔄 Trocar foto</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome..."
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
            returnKeyType="done"
          />

          <View style={styles.botaoWrapper}>
            <Button title="Salvar Perfil" onPress={handleSalvar} color="#6C63FF" />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>

      <Modal
        visible={alertVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setAlertVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>{alertTitle}</Text>
            <Text style={styles.modalMessage}>{alertMessage}</Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setAlertVisible(false)}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: '#F4F4F8',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#6C63FF',
  },
  botaoTrocar: {
    marginTop: 12,
    marginBottom: 30,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#e0deff',
    borderRadius: 20,
  },
  botaoTrocarTexto: {
    color: '#6C63FF',
    fontWeight: '600',
    fontSize: 14,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1.5,
    borderColor: '#6C63FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
    marginBottom: 24,
  },
  botaoWrapper: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#4f46cc',
    borderRadius: 12,
    overflow: 'hidden',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalCard: {
    width: '100%',
    maxWidth: 360,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#4f46cc',
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: '#6C63FF',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 16,
    color: '#f2f2ff',
    marginBottom: 14,
  },
  modalButton: {
    alignSelf: 'flex-end',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  modalButtonText: {
    color: '#4f46cc',
    fontWeight: '700',
  },
});
