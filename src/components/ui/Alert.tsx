import type { ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
}

function nodeToText(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join('');
  return '';
}

export function Alert({ children }: AlertProps) {
  const text = nodeToText(children);
  const looksLikeHtml = /<!doctype|<html|<head|<body/i.test(text);
  return (
    <div className="alert">
      {looksLikeHtml
        ? 'Il sito online non può salvare i file JSON. Programma e progressi restano sul telefono.'
        : children}
    </div>
  );
}
