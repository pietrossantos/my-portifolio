# Checklist de qualidade — Portfólio

## Formulário de contato

- [ ] Campo vazio: clicar em enviar mostra erro e foca o primeiro campo inválido.
- [ ] Nome com 1 caractere, e-mail inválido, telefone com DDD inválido, assunto curto e mensagem com menos de 15 caracteres: mensagens de validação.
- [ ] Corrigir cada campo: o erro desaparece durante a digitação; campo válido ganha borda verde após interação.
- [ ] Telefone opcional vazio: envio permitido.
- [ ] Envio válido: botão desabilitado enquanto aguarda; EmailJS confirma; aviso de sucesso; dados limpos.
- [ ] Envio com falha: aviso de erro; campos permanecem preenchidos para tentar novamente.
- [ ] Testar sem conexão: DevTools > Network > Offline; aviso visível, botão desabilitado, dados preservados; reconectar e reenviar.
- [ ] Simular erro do serviço no painel EmailJS ou bloqueio de rede; confirmar que não aparece falso sucesso.
- [ ] Confirmar no Gmail: assunto, nome, e-mail, telefone e mensagem no template; conferir Spam.
- [ ] Testar em Chrome, Edge e Firefox; teclado (Tab, Shift+Tab), leitores de tela se disponíveis.
- [ ] Testar em largura 360px, 390px, 768px e desktop; sem rolagem horizontal e com erros legíveis.
- [ ] Executar `npm run build` e `npm run lint` antes de publicar.

## Proteção contra spam — configuração externa obrigatória

No painel do EmailJS, verifique:
1. **Allowed origins / domínios permitidos**: autorize somente o domínio de produção e o localhost necessário para desenvolvimento, se a opção estiver disponível no plano.
2. **Rate limits / limites de envio**: ative limites adequados à conta e monitore o uso e eventuais bloqueios.
3. **CAPTCHA**, se suportado pela configuração do EmailJS: habilite e integre seguindo a documentação oficial; não adicionar somente no front-end sem validação do provedor.
4. Revise os destinatários, `Reply-To`, templates e logs; não exponha credenciais privadas no repositório.

**Nota:** a chave pública do EmailJS usada no navegador não é um segredo de servidor. Restrições de origem, limites e CAPTCHA precisam ser impostos pelo provedor; o navegador sozinho não garante proteção contra abuso.

## Critério de publicação

Publicar após validar o checklist em dispositivos reais e confirmar entrega de e-mails. Os itens acima são testes **a executar**, não resultados já aprovados.
