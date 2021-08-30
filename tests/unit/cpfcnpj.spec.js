/*
* Testes unitários do componente
*/
import CpfCnpj from '../../src/components/cpfcnpj/index.vue'

describe('Componente CpfCnpj', () => {
  it('Cabeçalho da tabela', () => {
    const defaultData = CpfCnpj.data()
    expect(defaultData.headers[0].text).toBe('CPF CNPJ')
    expect(defaultData.headers[0].value).toBe('value')
    expect(defaultData.headers[1].text).toBe('Blacklist')
    expect(defaultData.headers[1].value).toBe('blacklist')
    expect(defaultData.headers[2].text).toBe('')
    expect(defaultData.headers[2].value).toBe('actions')
  })

  it('Contém o método save', () => {
    expect(typeof CpfCnpj.methods.save).toBe('function')
  })

  it('Contém o método deleteItemConfirm', () => {
    expect(typeof CpfCnpj.methods.deleteItemConfirm).toBe('function')
  })

  it('Contém o método filterSearch', () => {
    expect(typeof CpfCnpj.methods.filterSearch).toBe('function')
  })
})
