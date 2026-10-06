const { test } = require('node:test');
const assert = require('node:assert');
const app = require('../src/app');

test('GET /health returns status ok and uptime', async () => {
  const server = await new Promise((resolve) => {
    const s = app.listen(0, () => resolve(s));
  });

  try {
    const { port } = server.address();
    const res = await fetch(`http://127.0.0.1:${port}/health`);
    const data = await res.json();

    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.status, 'ok');
    assert.strictEqual(typeof data.uptime, 'number');
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

test('GET /api/info returns version and hostname', async () => {
  const server = await new Promise((resolve) => {
    const s = app.listen(0, () => resolve(s));
  });

  try {
    const { port } = server.address();
    const res = await fetch(`http://127.0.0.1:${port}/api/info`);
    const data = await res.json();

    assert.strictEqual(res.status, 200);
    assert.strictEqual(typeof data.version, 'string');
    assert.strictEqual(typeof data.hostname, 'string');
    assert.ok(data.version.length > 0);
    assert.ok(data.hostname.length > 0);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
