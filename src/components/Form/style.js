import styled from "styled-components";
export const FormContainer = styled.section`
  display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;width:100%;margin:22px 0;
  >div{min-width:0;display:flex;flex-direction:column;gap:7px}
  label{color:#d9f8df;font-size:14px;font-weight:600}
  label span{color:#7df39d}
  label small{font-weight:400;color:#9fb5a4}
  >div:last-child{grid-column:1/-1}
  @media(max-width:620px){grid-template-columns:1fr;>div:last-child{grid-column:auto}}
`;
export const Span=styled.span`display:block;color:#ff9a9a;margin-top:7px;font-size:13px;`;
export const FormDeddy=styled.form`
  position:relative;isolation:isolate;width:100%;min-height:520px;display:flex;flex-direction:column;
  justify-content:center;align-items:center;padding:clamp(24px,4vw,38px);
  background:linear-gradient(145deg,#0c2115,#07140d);border:1px solid rgba(83,222,114,.42);
  border-radius:22px;box-shadow:0 0 35px rgba(21,124,47,.08),inset 0 0 28px rgba(20,99,38,.09);
  transition:box-shadow .4s ease,border-color .4s ease;
  &:focus-within{border-color:rgba(94,255,139,.75);box-shadow:0 0 34px rgba(42,210,88,.13)}
  .form-heading{width:100%;text-align:left}
  .form-heading h2{font-family:"Oxanium","Space Grotesk",sans-serif;font-size:clamp(25px,3vw,32px);margin:8px 0;color:#ecfff0}
  .form-heading p,.form-note{color:#a9c1ae;line-height:1.65;font-size:14px}
  .form-eyebrow{font-size:11px;letter-spacing:.18em;color:#73e996;font-weight:700}
  .form-note{text-align:center;margin:20px 0 0}
  .form-note a{color:#8bf6a8}
  .send-status{align-self:stretch;color:#b9f1c6;font-size:13px;line-height:1.5;min-height:1.5em;margin:0 0 12px;text-align:center}
  [aria-invalid="true"]{border-color:#f18c8c;box-shadow:0 0 0 1px rgba(241,140,140,.16)}
  h2{color:#ecfff0;text-align:left}
  @media(max-width:680px){min-height:0;padding:26px 18px}
`;
const field=`
  width:100%;min-height:48px;padding:13px 15px;border-radius:10px;
  border:1px solid #2c6140;background:#0a1a11;color:#effff0;
  outline:none;font:inherit;transition:border-color .2s,box-shadow .2s;
  &::placeholder{color:#91b49a;opacity:1}
  &:focus-visible{border-color:#68ed91;box-shadow:0 0 0 3px rgba(65,218,102,.14)}
`;
export const Input=styled.input`${field}`;
export const Area=styled.textarea`${field}min-height:125px;resize:vertical;`;
