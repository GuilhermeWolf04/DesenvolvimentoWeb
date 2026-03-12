import { Switch, ScrollView, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

const newsData = [
    { id: 1, title: 'Novo elevador instalado no 5º andar', content: 'A instalação foi concluída com sucesso' },
    { id: 2, title: 'Manutenção preventiva agendada', content: 'Será realizada na próxima semana' },
    { id: 3, title: 'Modernização do sistema', content: 'Elevadores agora possuem tecnologia IoT' },
    { id: 4, title: 'Redução no consumo de energia', content: 'Nova tecnologia economiza 30% de energia' },
    { id: 5, title: 'Elevador A1 voltou ao funcionamento', content: 'Reparo concluído após 3 dias' },
];

const News = () => {
    const [darkMode, setDarkMode] = useState(false);
    
    const theme = {
        background: darkMode ? '#1a1a1a' : '#ffffff',
        text: darkMode ? '#ffffff' : '#000000',
        card: darkMode ? '#2a2a2a' : '#f0f0f0',
        border: darkMode ? '#444' : '#ddd',
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Notícias de Elevadores</Text>
                <View style={styles.themeToggle}>
                    <Text style={[styles.themeLabel, { color: theme.text }]}>
                        {darkMode ? '🌙 Escuro' : '☀️ Claro'}
                    </Text>
                    <Switch value={darkMode} onValueChange={setDarkMode} />
                </View>
            </View>
            
            <ScrollView style={styles.scrollView}>
                {newsData.map((news) => (
                    <View key={news.id} style={[styles.newsCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
                        <Text style={[styles.newsTitle, { color: theme.text }]}>{news.title}</Text>
                        <Text style={[styles.newsContent, { color: theme.text }]}>{news.content}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    themeToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    themeLabel: {
        fontSize: 16,
    },
    scrollView: {
        flex: 1,
        padding: 20,
    },
    newsCard: {
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
        borderWidth: 1,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    newsContent: {
        fontSize: 14,
        lineHeight: 20,
    },
});

export default News;