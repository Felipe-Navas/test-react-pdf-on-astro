import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    flexDirection: 'column',
    padding: '0.5in',
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

export const TestPDF = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <PDFViewer style={{ display: 'flex', flexGrow: 1 }} showToolbar={true}>
        <Document title="Test PDF">
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  )
}
