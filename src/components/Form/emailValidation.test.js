import test from "node:test";
import assert from "node:assert/strict";
import { validateContactEmail } from "./emailValidation.js";

test("rejeita e-mails incompletos ou malformados", () => {
  for (const value of ["contato@gil", "contato@gmail", "contato@", "@gmail.com", "contato@gmail.", "contato@.com", "contato@gmail..com", "contato@@gmail.com", "contato gmail@gmail.com", ".contato@gmail.com", "contato..teste@gmail.com", "contato@-empresa.com", "contato@empresa.c"]) {
    assert.ok(validateContactEmail(value), `Deveria rejeitar: ${value}`);
  }
});

test("aceita domínios válidos, inclusive profissionais", () => {
  for (const value of ["contato@gmail.com", "contato@empresa.com.br", "nome.sobrenome@outlook.com", "dev+site@meudominio.dev", "contato@gil.com"]) {
    assert.equal(validateContactEmail(value), null, `Deveria aceitar: ${value}`);
  }
});

test("sugere correções para erros conhecidos", () => {
  assert.match(validateContactEmail("contato@gail.com"), /gmail.com/);
  assert.match(validateContactEmail("contato@outlok.com"), /outlook.com/);
});
