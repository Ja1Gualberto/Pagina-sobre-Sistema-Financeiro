import React from 'react';
import Form from '../components/Form';
import { Box, Typography, Container } from '@mui/material';

// Componente da página de Contato ("Fale Conosco")
const Contato = () => {
  return (
    // Box principal (Wrapper) que ocupa grande parte da tela, centraliza o conteúdo e 
    // configura a imagem de fundo com um efeito escurecido (overlay)
    <Box
      sx={{
    	minHeight: '89vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        width: '100%',
        py: 6, // equivalent to py-12
        // Adicionando imagem de fundo com overlay escuro usando as cores do seu tema
        backgroundImage: 'linear-gradient(rgba(25, 20, 38, 0.73), rgba(25, 20, 38, 0.89)), url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
      }}
    >
      {/* Seção de textos de cabeçalho agrupando o título e as instruções para o usuário */}
      <Container maxWidth="md" sx={{ mb: 4, textAlign: 'center', px: 2 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{
            fontWeight: 800,
            mb: 2
          }}
        >
          Fale Conosco
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            maxWidth: '52rem',
            mx: 'auto',
            fontSize: '1.2rem' 
          }}
        >
          Tem alguma dúvida, sugestão ou precisa de ajuda com o sistema? Preencha o formulário abaixo e entraremos em contato com você o mais rápido possível através do WhatsApp.
        </Typography>
      </Container>
      
      {/* Renderiza o componente "Form" com os campos de entrada e envio para o WhatsApp */}
      <Form />
    </Box>
  );
};

export default Contato;
