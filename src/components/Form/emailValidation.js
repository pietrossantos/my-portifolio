const commonDomainTypos = {
  "gail.com": "gmail.com",
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmail.con": "gmail.com",
  "hotnail.com": "hotmail.com",
  "hotmai.com": "hotmail.com",
  "outlok.com": "outlook.com",
  "outlook.con": "outlook.com",
  "yaho.com": "yahoo.com",
};

// Valida formato, não a existência da caixa postal.
export function validateContactEmail(value) {
  if (!value || !value.trim()) return "Informe seu e-mail";
  const email = value.trim();
  if (email.length > 254 || /\s/.test(email)) return "Informe um e-mail válido";
  const parts = email.split("@");
  if (parts.length !== 2) return "Informe um e-mail válido";
  const [local, domain] = parts;
  if (!local || local.length > 64 || local.startsWith(".") || local.endsWith(".") || local.includes("..") ||
      !/^[a-zA-Z0-9!#$%&'*+/=?^`{|}~._-]+$/.test(local)) {
    return "Informe um e-mail válido";
  }
  if (!domain || domain.length > 253 || !domain.includes(".")) {
    return "Informe um domínio completo, como exemplo.com";
  }
  const labels = domain.split(".");
  if (labels.some(label => !label || label.length > 63 || !/^[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(label)) ||
      !/^[a-zA-Z]{2,63}$/.test(labels[labels.length - 1])) {
    return "Informe um domínio completo, como exemplo.com";
  }
  const suggestion = commonDomainTypos[domain.toLowerCase()];
  if (suggestion) return `Você quis dizer @${suggestion}?`;
  return null;
}
