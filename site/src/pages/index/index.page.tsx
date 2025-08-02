import { style } from '@macaron-css/core';
import React from 'react';
import { Button } from '../../components/button';
import { Pre } from '../../components/pre';
import { screens } from '../../theme';
import fs from 'fs';
import path from 'path';
import { highlight } from '../../components/code-block';

const code = `import { shaili, roop, rangAnubandh } from '@rangroop/core';

// Button component with Hindi API
const Button = shaili('button', {
  aadhar: {
    padding: rangAnubandh.sthan.md,
    borderRadius: rangAnubandh.akar.sm,
    fontWeight: '500',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s ease',
  },
  vikalp: {
    rang: {
      mukhya: { 
        backgroundColor: rangAnubandh.rang.mukhya[500],
        color: 'white',
        ':hover': { 
          backgroundColor: rangAnubandh.rang.mukhya[600] 
        }
      },
      dwitiyak: { 
        backgroundColor: rangAnubandh.rang.dwitiyak[500],
        color: 'white',
        ':hover': { 
          backgroundColor: rangAnubandh.rang.dwitiyak[600] 
        }
      },
    },
    akar: {
      sm: { fontSize: '14px', padding: '6px 12px' },
      md: { fontSize: '16px', padding: '8px 16px' },
      lg: { fontSize: '18px', padding: '12px 24px' },
    },
  },
  mukhyaVikalp: {
    rang: 'mukhya',
    akar: 'md',
  }
});

// Usage
<Button rang="dwitiyak" akar="lg">
  क्लिक करें (Click me!)
</Button>`;

export function Page() {
  return (
    <main
      className={style({
        maxWidth: '1200px',
        padding: '0 3vw',
        margin: 'auto',
        '@media': {
          [screens.lg]: {
            maxWidth: '700px',
            padding: '6vh 10px',
          },
        },
      })}
    >
      <div
        className={style({
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        })}
      >
        <div
          className={style({
            display: 'flex',
            alignItems: 'center',
            gap: '5vw',
            flexWrap: 'wrap',
            '@media': {
              [screens.lg]: {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
              },
            },
          })}
        >
          <div
            className={style({
              color: 'white',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
              '@media': {
                [screens.lg]: { alignItems: 'center' },
              },
            })}
          >
            {/* New RangRoop Logo */}
            <div
              className={style({
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '20px',
              })}
            >
              <div
                className={style({
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: 'white',
                  boxShadow: '0 10px 30px rgba(255, 107, 107, 0.3)',
                  transform: 'rotate(-5deg)',
                })}
              >
                रं
              </div>
              <h1
                className={style({
                  fontSize: '4rem',
                  fontWeight: '800',
                  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0,
                  '@media': {
                    [screens.md]: { fontSize: '3rem' },
                    [screens.lg]: { fontSize: '2.5rem' },
                  },
                })}
              >
                रंगरूप
              </h1>
            </div>

            <p
              className={style({
                fontSize: '1.3rem',
                lineHeight: 1.6,
                color: '#e2e8f0',
                '@media': {
                  [screens.md]: { fontSize: '1.2rem' },
                  [screens.lg]: { textAlign: 'center' },
                },
              })}
            >
              <strong>Hindi CSS-in-JS</strong> with zero runtime, complete type safety, and beautiful simplicity. 
              रंगरूप makes styling intuitive with Hindi terminology - write CSS that feels natural!
            </p>

            <div
              className={style({
                borderRadius: '20px',
                background: 'rgba(26, 32, 44, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '25px',
                width: '100%',
              })}
            >
              <span
                className={style({
                  fontWeight: '600',
                  fontSize: '1.4rem',
                  color: '#ff6b6b',
                  display: 'block',
                  marginBottom: '15px',
                })}
              >
                📦 Install रंगरूप
              </span>
              <div
                className={style({
                  fontFamily: "'JetBrains Mono', monospace",
                  padding: '15px 20px',
                  fontWeight: 400,
                  background: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  lineHeight: 1.4,
                  color: '#f0f6fc',
                  '@media': {
                    [screens.lg]: { fontSize: '0.9rem' },
                  },
                })}
              >
                <span
                  className={style({
                    color: '#7c3aed',
                    userSelect: 'none',
                    marginRight: '10px',
                  })}
                >
                  $
                </span>
                npm install @rangroop/core
              </div>
              <a
                className={style({
                  display: 'inline-block',
                  color: '#4ecdc4',
                  fontWeight: '500',
                  marginTop: '15px',
                  textDecoration: 'none',
                  ':hover': {
                    textDecoration: 'underline',
                  },
                })}
                href="/docs/installation"
              >
                📖 View installation guide
              </a>
            </div>

            <div className={roop({ display: 'flex', gap: '15px', flexWrap: 'wrap' })}>
              <Button 
                className={style({
                  background: 'linear-gradient(45deg, #ff6b6b, #ff8e53)',
                  border: 'none',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 25px rgba(255, 107, 107, 0.4)',
                  },
                })}
                as="a" 
                href="/docs/installation"
              >
                📚 Documentation
              </Button>
              <Button 
                className={style({
                  background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
                  border: 'none',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 25px rgba(78, 205, 196, 0.4)',
                  },
                })}
                as="a" 
                href="/playground"
              >
                🎮 Playground
              </Button>
              <a 
                href="https://github.com/rangroop/rangroop"
                className={style({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  background: 'transparent',
                  border: '2px solid #30363d',
                  borderRadius: '12px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    borderColor: '#ff6b6b',
                    transform: 'translateY(-2px)',
                  },
                })}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div className={roop({ flex: 1, width: '100%' })}>
            <Pre
              className={style({
                boxShadow: '0px 20px 60px rgba(0,0,0,0.3)',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#0d1117',
                border: '1px solid #30363d',
              })}
            >
              <code
                className={`language-jsx ${roop({ 
                  display: 'block',
                  fontSize: '14px',
                  lineHeight: 1.5,
                })}`}
                dangerouslySetInnerHTML={{ __html: highlight(code) }}
              />
            </Pre>
          </div>
        </div>

        {/* Features Section */}
        <div
          className={style({
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          })}
        >
          {[
            {
              icon: '🚀',
              title: 'Zero Runtime',
              description: 'All styles are extracted at build time. No runtime overhead!'
            },
            {
              icon: '🔒',
              title: 'Type Safe',
              description: 'Full TypeScript support with intelligent autocomplete.'
            },
            {
              icon: '🌏',
              title: 'Hindi API',
              description: 'Natural Hindi terminology makes CSS-in-JS feel intuitive.'
            },
            {
              icon: '🎨',
              title: 'Modern Design',
              description: 'Built-in design tokens and beautiful default themes.'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={style({
                padding: '30px',
                borderRadius: '20px',
                background: 'rgba(26, 32, 44, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                },
              })}
            >
              <div
                className={style({
                  fontSize: '2.5rem',
                  marginBottom: '15px',
                })}
              >
                {feature.icon}
              </div>
              <h3
                className={style({
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '10px',
                  margin: 0,
                })}
              >
                {feature.title}
              </h3>
              <p
                className={style({
                  color: '#cbd5e1',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  margin: 0,
                })}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
