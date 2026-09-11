import fs from 'node:fs';
import path from 'node:path';
import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin } from 'vite';

const dataDir = path.resolve(process.cwd(), 'data');

const files = {
  progress: path.join(dataDir, 'progress.json'),
  program: path.join(dataDir, 'program.json'),
} as const;

type Resource = keyof typeof files;

function readJson(filePath: string): unknown {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, '[]', 'utf8');
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath: string, data: unknown) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function sendJson(res: ServerResponse, status: number, payload: unknown) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

/**
 * Plugin Vite: GET/PUT su /api/progress e /api/program
 * Scrive i dati nei file data/*.json
 */
export function jsonFileApi(): Plugin {
  return {
    name: 'json-file-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0] ?? '';
        const match = url.match(/^\/api\/(progress|program)\/?$/);
        if (!match) {
          next();
          return;
        }

        const resource = match[1] as Resource;
        const filePath = files[resource];

        try {
          if (req.method === 'GET') {
            sendJson(res, 200, readJson(filePath));
            return;
          }

          if (req.method === 'PUT') {
            const raw = await readBody(req);
            const data = JSON.parse(raw || '[]');
            writeJson(filePath, data);
            sendJson(res, 200, data);
            return;
          }

          sendJson(res, 405, { error: 'Metodo non consentito' });
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Errore server';
          sendJson(res, 500, { error: message });
        }
      });
    },
  };
}
