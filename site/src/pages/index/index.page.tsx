import { style } from '@macaron-css/core';
import React from 'react';
import { Button } from '../../components/button';
import { Pre } from '../../components/pre';
import { screens } from '../../theme';
import fs from 'fs';
import path from 'path';
import { highlight } from '../../components/code-block';

const code = `import { shaili, roop, rangContract } from '@rangroop/core';

// Button banao with Hindi terms
const Button = shaili('button', {
  base: {
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '500',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s ease',
  },
  variants: {
    color: {
      primary: { background: 'blue', color: 'white' },
      danger: { background: 'red', color: 'white' },
      success: { background: 'green', color: 'white' },
    },
    size: {
      small: { padding: '6px 12px', fontSize: '14px' },
      medium: { padding: '12px 24px', fontSize: '16px' },
      large: { padding: '18px 36px', fontSize: '18px' },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium',
  }
});

// Usage
<Button color="success" size="large">
  Click Karo!
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
            {/* RangRoop Logo */}
            <img
              className={style({ width: '80%' })}
              src="/rangroop-logo.svg"
              alt="RangRoop"
            />
            <p
              className={style({
                fontSize: '1.3rem',
                lineHeight: 1.5,
                '@media': {
                  [screens.md]: { fontSize: '1.2rem' },
                  [screens.lg]: { textAlign: 'center' },
                },
              })}
            >
              Typesafe CSS-in-JS with zero runtime, colocation, maximum safety
              and productivity. RangRoop is a new compile time CSS-in-JS library
              with type safety and Hindi terms.
            </p>
            <div
              className={style({
                borderRadius: '15px',
                backdropFilter: 'brightness(80%) saturate(120%)',
                padding: '23px 25px',
                width: '100%',
              })}
            >
              <span
                className={style({
                  fontWeight: '500',
                  fontSize: '1.4rem',
                  color: 'white',
                  display: 'block',
                })}
              >
                Install RangRoop
              </span>
              <div
                className={style({
                  margin: '15px 0',
                  fontFamily: "'JetBrains Mono', monospace",
                  padding: '15px 20px',
                  fontWeight: 300,
                  border: '2px solid #7977af',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  lineHeight: 1.3,
                  '@media': {
                    [screens.lg]: { fontSize: '0.9rem' },
                  },
                })}
              >
                <span
                  className={style({
                    padding: '0 10px 0 0',
                    color: '#bcbcd2',
                    userSelect: 'none',
                  })}
                >
                  $
                </span>
                npm install @rangroop/core
              </div>
              <a
                className={style({
                  display: 'block',
                  color: '#bcbcd2',
                  fontWeight: '300',
                })}
                href="/docs/installation"
              >
                View installation docs
              </a>
            </div>
            <div className={style({ display: 'flex', gap: '10px' })}>
              <Button as="a" href="/docs/installation">
                Documentation
              </Button>
              <Button color="secondary" as="a" href="/playground">
                Playground
              </Button>
              <a href="https://github.com/rangroop/rangroop">
                <svg
                  width="45"
                  height="45"
                  fill="white"
                  viewBox="3 3 18 18"
                  aria-hidden="true"
                >
                  <title>GitHub</title>
                  <path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className={style({ flex: 1, width: '100%' })}>
            <Pre
              className={style({
                boxShadow: '0px 10px 50px -10px #1e213c',
              })}
            >
              <code
                className={`language-jsx ${style({ display: 'block' })}`}
                dangerouslySetInnerHTML={{ __html: highlight(code) }}
              />
            </Pre>
          </div>
        </div>
      </div>
    </main>
  );
}
