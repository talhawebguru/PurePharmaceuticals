import React from 'react';

const RichTextRenderer = ({ content }) => {
  if (!content || !Array.isArray(content)) {
    return null;
  }

  const renderNode = (node, index) => {
    switch (node.type) {
      case 'paragraph':
        return (
          <p key={index} className="mb-4">
            {node.children.map((child, childIndex) => renderTextNode(child, childIndex))}
          </p>
        );
      
      case 'list':
        const ListComponent = node.format === 'ordered' ? 'ol' : 'ul';
        return (
          <ListComponent key={index} className="mb-4 ml-6">
            {node.children.map((child, childIndex) => renderNode(child, childIndex))}
          </ListComponent>
        );
      
      case 'list-item':
        return (
          <li key={index} className="mb-2 list-disc ml-2">
            {node.children.map((child, childIndex) => renderTextNode(child, childIndex))}
          </li>
        );
      
      default:
        return null;
    }
  };

  const renderTextNode = (node, index) => {
    if (node.type !== 'text') return null;

    let className = '';
    let text = node.text;

    if (node.bold) {
      return <strong key={index} className={className}>{text}</strong>;
    }

    if (node.italic) {
      return <em key={index} className={className}>{text}</em>;
    }

    return <span key={index} className={className}>{text}</span>;
  };

  return (
    <div className="rich-text">
      {content.map((node, index) => renderNode(node, index))}
    </div>
  );
};

export default RichTextRenderer;