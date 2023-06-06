import { AES, enc } from 'crypto-js';

const ENCRYPTION_KEY = '<(8npcn{a$5,u,`*m~(3_?3f$%@%[.:}@34,j/8m%5a76k&z<`y|$(3:2|!3f)';

export function encryptData(data) {
  return AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
}

export function decryptData(encryptedData) {
  const bytes = AES.decrypt(encryptedData, ENCRYPTION_KEY);
  const decryptedData = JSON.parse(bytes.toString(enc.Utf8));
  return decryptedData;
}
