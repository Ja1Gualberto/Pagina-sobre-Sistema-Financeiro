import { useState } from 'react';
import { TextField, Box, Typography, Stack, Paper } from '@mui/material';
import WhatsappButton from './WhatsappButton';

const Form = () => {
  // Estado para armazenar os dados preenchidos no formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  // Estado para controle de erros de validação (ex: e-mail inválido)
  const [errors, setErrors] = useState({
    email: false
  });

  // Função responsável por atualizar o estado 'formData' conforme o usuário digita nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Remove o erro assim que o usuário começa a digitar no campo de e-mail novamente
    if (name === 'email') {
      setErrors((prev) => ({ ...prev, email: false }));
    }
  };

  // Função que valida o formato do e-mail usando uma expressão regular (Regex)
  const validateEmail = (email) => {
    // Regex simples para validação de e-mail
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Verifica se o formulário inteiro é válido (se tem nome, e-mail correto e mensagem)
  const isFormValid = formData.nome.trim() !== '' && 
                      validateEmail(formData.email) && 
                      formData.mensagem.trim() !== '';

  // Função acionada quando o campo de e-mail perde o foco (onBlur), ativando o aviso de erro visual se for inválido
  const handleValidation = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: true }));
    }
  };

  return (
    <Paper 
      elevation={12}
      component="form" 
      sx={{
        width: '100%',
        maxWidth: 900, 
        p: { xs: 3, sm: 3 }, 
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(55, 45, 77, 0.8)', 
        backdropFilter: 'blur(10px)',
    
      }}
    >
      <Stack spacing={2}>
        <Typography 
          variant="h5" 
          component="h2" 
          align="center" 
          sx={{ 
            fontWeight: 'bold',  
          }}
        >
          Envie-nos uma Mensagem
        </Typography>
        
        <TextField
          label="Nome Completo"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        
        
        <TextField
          label="E-mail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleValidation}
          error={errors.email}
          helperText={errors.email ? "Por favor, insira um e-mail válido." : ""}
          required
          variant="outlined"
          fullWidth
          placeholder="seu.email@exemplo.com"
        />
        
        <TextField
          label="Sua Mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
          variant="outlined"
          multiline
          rows={5}
          fullWidth
          placeholder="Como podemos te ajudar?"
        />
        
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', width: '100%' }}>
          <WhatsappButton formData={formData} disabled={!isFormValid} />
        </Box>
      </Stack>
    </Paper>
  );
};

export default Form;
