"use client";
import React from 'react';
import { motion } from 'motion/react';

const CategoryContent = ({ categoryContent, categoryName }) => {
  if (!categoryContent || typeof categoryContent !== 'string' || categoryContent.trim() === '') {
    return null;
  }

  const parseMarkdown = (markdown) => {
    const lines = markdown.split('\n');
    const elements = [];
    let currentElement = null;
    let listItems = [];
    let isInList = false;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      // Skip empty lines
      if (!trimmedLine) {
        if (isInList && listItems.length > 0) {
          elements.push({ type: 'list', items: listItems, key: `list-${elements.length}` });
          listItems = [];
          isInList = false;
        }
        return;
      }

      // Handle horizontal rules
      if (trimmedLine === '---') {
        if (isInList && listItems.length > 0) {
          elements.push({ type: 'list', items: listItems, key: `list-${elements.length}` });
          listItems = [];
          isInList = false;
        }
        elements.push({ type: 'hr', key: `hr-${elements.length}` });
        return;
      }

      // Handle headings
      if (trimmedLine.startsWith('#')) {
        if (isInList && listItems.length > 0) {
          elements.push({ type: 'list', items: listItems, key: `list-${elements.length}` });
          listItems = [];
          isInList = false;
        }
        
        const level = trimmedLine.match(/^#+/)[0].length;
        const text = trimmedLine.replace(/^#+\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1');
        elements.push({ type: 'heading', level, text, key: `heading-${elements.length}` });
        return;
      }

      // Handle list items
      if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
        isInList = true;
        const text = trimmedLine.replace(/^[*-]\s*/, '');
        listItems.push(text);
        return;
      }

      // Handle regular paragraphs
      if (isInList && listItems.length > 0) {
        elements.push({ type: 'list', items: listItems, key: `list-${elements.length}` });
        listItems = [];
        isInList = false;
      }

      if (trimmedLine) {
        elements.push({ type: 'paragraph', text: trimmedLine, key: `paragraph-${elements.length}` });
      }
    });

    // Handle any remaining list items
    if (isInList && listItems.length > 0) {
      elements.push({ type: 'list', items: listItems, key: `list-${elements.length}` });
    }

    return elements;
  };

  const renderTextWithFormatting = (text) => {
    // Handle bold text (**text**)
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Handle links [text](url)
    formattedText = formattedText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-green hover:underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">$1</a>');
    
    return { __html: formattedText };
  };

  const renderContent = (elements) => {
    return elements.map((element, index) => {
      switch (element.type) {
        case 'heading':
          const HeadingTag = `h${element.level}`;
          return (
            <motion.div
              key={element.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.01 }}
            >
              <HeadingTag 
                className={`font-bold text-neutral-dark-gray mb-4 ${
                  element.level === 1 
                    ? 'text-3xl lg:text-4xl' 
                    : element.level === 2 
                    ? 'text-2xl lg:text-3xl mt-8' 
                    : element.level === 3
                    ? 'text-xl lg:text-2xl mt-6'
                    : 'text-lg lg:text-xl mt-4'
                }`}
                dangerouslySetInnerHTML={renderTextWithFormatting(element.text)}
              />
            </motion.div>
          );

        case 'paragraph':
          return (
            <motion.p
              key={element.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.01 }}
              className="text-neutral-gray leading-relaxed mb-4 text-base lg:text-lg"
              dangerouslySetInnerHTML={renderTextWithFormatting(element.text)}
            />
          );

        case 'list':
          return (
            <motion.ul
              key={element.key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.01 }}
              className="list-disc list-inside text-neutral-gray ml-4 space-y-2 mb-4"
            >
              {element.items.map((item, itemIndex) => (
                <li 
                  key={`${element.key}-item-${itemIndex}`} 
                  className="text-base lg:text-lg leading-relaxed"
                  dangerouslySetInnerHTML={renderTextWithFormatting(item)}
                />
              ))}
            </motion.ul>
          );

        case 'hr':
          return (
            <motion.hr
              key={element.key}
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.01 }}
              className="border-t border-gray-300 my-8"
            />
          );

        default:
          return null;
      }
    });
  };

  const elements = parseMarkdown(categoryContent);

  return (
    <motion.section 
      className="xl:mx-[90px] lg:mx-[40px] mx-5 2xl:max-w-[1440px] 2xl:mx-auto mt-16 mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="xl:px-20 lg:px-10 sm:px-5 px-2.5">
        <motion.div 
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {renderContent(elements)}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CategoryContent;