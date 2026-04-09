# 🦇 Desafio do Bat Sinal

> Projeto desenvolvido como parte do **#DesafioDoFelipao** da [DIO](https://www.dio.me/).

---

## 📋 Sobre o Projeto

O **Bat Sinal** é um aplicativo mobile desenvolvido em **React Native** que simula uma tela de acionamento do sinal do Batman. O app conta com duas telas principais: uma tela inicial com o logo e um botão de ativação, e uma tela de formulário para coleta de dados do solicitante.

---

## 🚀 Funcionalidades

### Tela 1 — Activate Bat Signal
- Exibe o **logo do Batman** centralizado na tela
- Possui um botão **"Activate Bat Signal"**
- Ao clicar no botão, o logo e o botão são **ocultados** e o formulário é exibido
- A tela pode ser **personalizada livremente**

### Tela 2 — Formulário de Chamado
- Formulário com os seguintes campos:
  - **Nome** — identificação do solicitante
  - **Telefone** — número para contato
  - **Localização atual** — endereço ou coordenadas do solicitante
  - **Observação** — informações adicionais sobre a ocorrência
- Botão **"Enviar"** para submeter os dados

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia     | Descrição                              |
|----------------|----------------------------------------|
| React Native   | Framework principal para mobile        |
| Expo           | Plataforma de desenvolvimento          |
| TypeScript/TSX | Linguagem de desenvolvimento           |
| useState Hook  | Gerenciamento do estado das telas      |

---

## 📁 Estrutura do Projeto

```
bat-sinal/
├── src/
│   └── Components/
│       └── BatButton/
│           ├── SignalButton.tsx   # Botão "Active Bat Signal"
│           ├── FormButton.tsx     # Botão "Send" do formulário
│           └── styles.ts          # Estilos dos botões
├── assets/
│   └── Batlogo.png                # Imagem do logo do Batman
├── App.tsx                        # Entrada da aplicação (lógica principal)
├── styles.ts                      # Estilos globais da aplicação
├── package.json
└── README.md
```

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [React Native CLI](https://reactnative.dev/docs/environment-setup) ou **Expo CLI** configurado
- Emulador Android/iOS ou dispositivo físico

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/bat-sinal.git

# Acesse a pasta do projeto
cd bat-sinal

# Instale as dependências
npm install
```

### Executando

```bash
# Com Expo
npx expo start

# Com React Native CLI — Android
npx react-native run-android

# Com React Native CLI — iOS
npx react-native run-ios
```

---

## 🧩 Componentes

### `SignalButton`
Botão da tela inicial que aciona a transição para o formulário.

```tsx
// src/Components/BatButton/SignalButton.tsx
type Props = {
  onPress: () => void;
};

export const SignalButton = ({ onPress }: Props) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.text}>Active Bat Signal</Text>
  </Pressable>
);
```

| Prop      | Tipo         | Descrição                          |
|-----------|--------------|------------------------------------|
| `onPress` | `() => void` | Função chamada ao pressionar o botão |

---

### `FormButton`
Botão de envio do formulário.

```tsx
// src/Components/BatButton/FormButton.tsx
type Props = {
  onPress: () => void;
};

export const FormButton = ({ onPress }: Props) => (
  <Pressable style={styles.FormButton} onPress={onPress}>
    <Text style={styles.text}>Send</Text>
  </Pressable>
);
```

| Prop      | Tipo         | Descrição                          |
|-----------|--------------|------------------------------------|
| `onPress` | `() => void` | Função chamada ao pressionar o botão |

---

## 🧠 Lógica Principal

Toda a lógica da aplicação está centralizada no `App.tsx`. A alternância entre a tela inicial e o formulário é controlada pelo estado `ShowForm`, e cada campo do formulário possui seu próprio estado:

```tsx
const [ShowForm, SetShowForm] = useState(false);
const [Name, SetName] = useState("");
const [PhoneNumber, SetPhoneNumber] = useState("");
const [Location, SetLocation] = useState("");
const [Description, SetDescription] = useState("");
```

Quando o botão `SignalButton` é pressionado, `ShowForm` passa a `true` e o formulário é exibido no lugar do logo e do botão:

```tsx
{!ShowForm ? (
  <>
    <Image source={require("./assets/Batlogo.png")} />
    <SignalButton onPress={() => SetShowForm(true)} />
  </>
) : (
  <View>
    <TextInput onChangeText={SetName} value={Name} />
    <TextInput onChangeText={SetPhoneNumber} value={PhoneNumber} />
    <TextInput onChangeText={SetLocation} value={Location} />
    <TextInput onChangeText={SetDescription} value={Description} multiline />
    <FormButton onPress={() => console.log({ Name, PhoneNumber, Location, Description })} />
  </View>
)}
```

---

## 📱 Telas

| Tela   | Descrição                                                                 |
|--------|---------------------------------------------------------------------------|
| Tela 1 | Exibe o logo do Batman e o botão de ativação                              |
| Tela 2 | Exibe o formulário com campos de nome, telefone, localização e observação |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

---

<p align="center">
  Feito com 🦇 para o <strong>#DesafioDoFelipao</strong> · <a href="https://www.dio.me/">DIO</a>
</p>
