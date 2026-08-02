(function () {
  "use strict";

  // RSA-OAEP-SHA256 public key (SPKI, base64-encoded DER). Safe to ship in
  // public JS -- a public key can only encrypt. Only the matching private
  // key (submission_decrypt_private_key.pem, private source repo only)
  // can decrypt anything encrypted with it. See PRIVATE_KEY_README.md.
  const PUBLIC_KEY_B64 =
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyovqA6DKDyEts0nIiD0G" +
    "FYWSOSPRLjFRSbxw8n5FsFnK7SksbUhy3SnIx0kKzGlK3eqW9IWNys7OUCoVG2p1" +
    "ovccOsce0xwxpd7hDMJP/vC93wq8Ic4f/lsdMmwQU2Q3O5cwCGzxes+wioY7jA9K" +
    "+WHYxNwPFRrhSbNZoPCDzvJfgxH3nwpIjlwz0+biBkqGFRRSATYp3evfOhFo6IJO" +
    "WjmpEjuaCcZNzfazpaVKPnK7ImLPrY8xPJHBpzRccFYbnckDv2+uoRTV8t+hKPJ9" +
    "Puams6s00ybzii5Uew93LoNTs6721iv4ThlI15yE7iSrKCuG3EKhLMjhbYDy2zpX" +
    "owIDAQAB";

  let cachedKeyPromise = null;

  function importPublicKey() {
    if (!cachedKeyPromise) {
      const der = Uint8Array.from(atob(PUBLIC_KEY_B64), (c) => c.charCodeAt(0));
      cachedKeyPromise = crypto.subtle.importKey(
        "spki",
        der.buffer,
        { name: "RSA-OAEP", hash: "SHA-256" },
        false,
        ["encrypt"]
      );
    }
    return cachedKeyPromise;
  }

  // Encrypts a short string (e.g. an email address) with the embedded
  // public key. RSA-OAEP with a 2048-bit key tops out around 190 bytes of
  // plaintext -- plenty for an email address, not meant for longer text.
  // Returns a base64 string safe to embed in a GitHub Issue body.
  async function encryptText(text) {
    const key = await importPublicKey();
    const encoded = new TextEncoder().encode(text);
    const ciphertext = await crypto.subtle.encrypt({ name: "RSA-OAEP" }, key, encoded);
    let binary = "";
    new Uint8Array(ciphertext).forEach((b) => (binary += String.fromCharCode(b)));
    return btoa(binary);
  }

  window.SUBMISSION_ENCRYPTION = { encryptText };
})();
