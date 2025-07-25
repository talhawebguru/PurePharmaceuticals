"use client";
import React from 'react';
import { motion } from 'motion/react';

const CategoryContent = ({ categoryContent, categoryName }) => {
  if (!categoryContent || categoryContent.length === 0) {
    return null;
  }

  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'heading':
          const HeadingTag = `h${block.level}`;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.01 }}
            >
              <HeadingTag 
                className={`font-bold text-neutral-dark-gray mb-4 ${
                  block.level === 1 
                    ? 'text-3xl lg:text-4xl' 
                    : block.level === 2 
                    ? 'text-2xl lg:text-3xl mt-8' 
                    : 'text-xl lg:text-2xl mt-6'
                }`}
              >
                {block.children.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </HeadingTag>
            </motion.div>
          );

        case 'paragraph':
          const hasText = block.children.some(child => child.text && child.text.trim() !== '');
          if (!hasText) return null;

          return (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.01 }}
              className="text-neutral-gray leading-relaxed mb-4 text-base lg:text-lg"
            >
              {block.children.map((child, childIndex) => (
                <span 
                  key={childIndex}
                  className={`${child.bold ? 'font-bold' : ''} ${child.italic ? 'italic' : ''}`}
                >
                  {child.text}
                </span>
              ))}
            </motion.p>
          );

        case 'list':
          const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.01 }}
              className="mb-4"
            >
              <ListTag className={`${
                block.format === 'ordered' 
                  ? 'list-decimal list-inside' 
                  : 'list-disc list-inside'
              } text-neutral-gray ml-4 space-y-2`}>
                {block.children.map((listItem, listIndex) => (
                  <li key={listIndex} className="text-base lg:text-lg leading-relaxed">
                    {listItem.children.map((child, childIndex) => (
                      <span key={childIndex}>{child.text}</span>
                    ))}
                  </li>
                ))}
              </ListTag>
            </motion.div>
          );

        default:
          return null;
      }
    });
  };

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
          {renderContent(categoryContent)}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CategoryContent;