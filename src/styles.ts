import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50,
  },
  daysContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  dayButton: {
    backgroundColor: '#F4F4DD',
    borderRadius: 50,
    padding: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  selectedDayButton: {
    backgroundColor: '#90CF44',
  },
  selectedDayButtonText: {
    fontWeight: 'bold',
  },
  dayButtonText: {
    textAlign: 'center',
    fontSize: 18,
  },
  form: {
    backgroundColor: '#8A3E73',
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F4F4DD',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 32,
  },
  label: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#F4F4DD',
  },
  renderedText: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#F4F4DD',
  },
  input: {
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F4F4DD',
  },
  logo: {
    width: 180,
    height: 70,
    position: 'absolute',
    top: -40,
  },
  spinnerTextStyle: {
    color: '#F4F4DD',
  },
  error: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 26,
    color: '#F4F4DD',
  },
  appButtonsContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#71a697',
    borderRadius: 10,
    padding: 10,
    width: 150,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#F4F4DD',
  },
});

export default styles;
