import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  // Merging the content arrays and removing duplicates
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  // Enabling dark mode
  darkMode: "class", // Assuming you want to enable dark mode based on the class strategy
  theme: {
    // Merging container configuration from the second file
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Merging backgroundImage from the first file
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
		base1: 'linear-gradient(to right, #CCFBF1, #D9F99D)'
	  },
	  borderRadius: {
		lg: 'var(--radius)',
		md: 'calc(var(--radius) - 2px)',
		sm: 'calc(var(--radius) - 4px)'
	  },
      // Merging colors, borderRadius, keyframes, and animation from the second file
      colors: {
		border: "hsl(var(--border))",
		input: "hsl(var(--input))",
		ring: "hsl(var(--ring))",
		background: "hsl(var(--background))",
		foreground: "hsl(var(--foreground))",
		primary: {
		  DEFAULT: "hsl(var(--primary))",
		  foreground: "hsl(var(--primary-foreground))",
		},
		secondary: {
		  DEFAULT: "hsl(var(--secondary))",
		  foreground: "hsl(var(--secondary-foreground))",
		},
		destructive: {
		  DEFAULT: "hsl(var(--destructive))",
		  foreground: "hsl(var(--destructive-foreground))",
		},
		muted: {
		  DEFAULT: "hsl(var(--muted))",
		  foreground: "hsl(var(--muted-foreground))",
		},
		accent: {
		  DEFAULT: "hsl(var(--accent))",
		  foreground: "hsl(var(--accent-foreground))",
		},
		popover: {
		  DEFAULT: "hsl(var(--popover))",
		  foreground: "hsl(var(--popover-foreground))",
		},
		card: {
		  DEFAULT: "hsl(var(--card))",
		  foreground: "hsl(var(--card-foreground))",
		},
		chart: {
		  '1': 'hsl(var(--chart-1))',
		  '2': 'hsl(var(--chart-2))',
		  '3': 'hsl(var(--chart-3))',
		  '4': 'hsl(var(--chart-4))',
		  '5': 'hsl(var(--chart-5))'
		}
	  },	  
      keyframes: {
		'accordion-down': {
			from: {
				height: '0'
			},
			to: {
				height: 'var(--radix-accordion-content-height)'
			}
		},
		'accordion-up': {
			from: {
				height: 'var(--radix-accordion-content-height)'
			},
			to: {
				height: '0'
			}
		},
		'fade-in': {
			'0%': {
				opacity: '0%'
			},
			'75%': {
				opacity: '0%'
			},
			'100%': {
				opacity: '100%'
			}
		},
		'fade-in-3': {
			'0%': {
				opacity: '0%'
			},
			'75%': {
				opacity: '0%'
			},
			'100%': {
				opacity: '100%'
			}
		},
		title: {
			'0%': {
				'line-height': '0%',
				'letter-spacing': '0.25em',
				opacity: '0'
			},
			'25%': {
				'line-height': '0%',
				opacity: '0%'
			},
			'80%': {
				opacity: '100%'
			},
			'100%': {
				'line-height': '100%',
				opacity: '100%'
			}
		},
		'fade-bottom': {
			'0%': {
				transform: 'translateY(-100%)',
				opacity: '0%'
			},
			'30%': {
				transform: 'translateY(0%)',
				opacity: '100%'
			},
			'100%': {
				opacity: '100%'
			}
		},
	  scroll: {
	  '0%': { transform: 'translateX(0)' },
	  '100%': { transform: 'translateX(-100%)' }, // Moves left until the end of the image list
	  },
	  bubbleLeft: {
	  '0%, 100%': { transform: 'translateX(-200px)' },
	  '50%': { transform: 'translateX(200px)' },
	  },
	  bubbleRight: {
	  '0%, 100%': { transform: 'translateX(200px)' },
	  '50%': { transform: 'translateX(-200px)' },
	  },
	  glow: {
		  '0%': { backgroundPosition: '200% 0' },
		  '100%': { backgroundPosition: '-200% 0' },
	  },
	  buttonheartbeat: {
		  "0%": {
			  "box-shadow": '0 0 0 0 theme("colors.pink.500")',
			  transform: "scale(1)",
		  },
		  "50%": {
			  "box-shadow": '0 0 0 7px theme("colors.pink.500/0")',
			  transform: "scale(1.05)",
		  },
		  "100%": {
			  "box-shadow": '0 0 0 0 theme("colors.pink.500/0")',
			  transform: "scale(1)",
		  },
	  },
	  'background-shine': {
		  '0%': { backgroundPosition: '200% 0' },
		  '100%': { backgroundPosition: '-200% 0' },
	  },
	  beam: {
	  '0%': { backgroundPosition: '0% 50%' },
	  '100%': { backgroundPosition: '100% 50%' },
	  },
	  "border-spin": {
		  "100%": {
			  transform: "rotate(-360deg)"
		  }
	  },
	  orbit: {
	  "0%": {
		  transform:
		  "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
	  },
	  "100%": {
		  transform:
		  "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
	  },
	  },
	  "border-beam": {
		  "100%": {
			  "offset-distance": "100%",
		  },
	  },
	},
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in-3': 'fade-in 3s ease-in-out forwards',
  			'fade-in': 'fade-in 0.5s ease-in-out forwards',
  			title: 'title 3s ease-out forwards',
  			'fade-bottom': 'fade-bottom 3s ease-in-out forwards',
  			'fade-top': 'fade-top 3s ease-in-out forwards',
  			'accordion-downd': 'accordion-down 0.2s ease-out',
  			'accordion-upd': 'accordion-up 0.2s ease-out',
			scroll: 'scroll 30s linear infinite',
			'bubble-left': 'bubbleLeft 5s infinite',
        	'bubble-right': 'bubbleRight 5s infinite',
			glow: 'glow 2s infinite',
			glow2: 'glow 5s infinite',
			buttonheartbeat: "buttonheartbeat 2s infinite ease-in-out",
			"background-shine": "background-shine 4s linear infinite",
			beam: 'beam 3s linear infinite',
			"border-spin": "border-spin 9s linear infinite",
			orbit: "orbit calc(var(--duration)*1s) linear infinite", 
			"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
		
      },
	  blur: {
		sm: '2px',
	},
	transitionProperty: {
		'filter': 'filter',
	}
    },
  },
  // Merging plugins, adding any unique plugins from both files
  plugins: [
    require("tailwindcss-animate"), // Assuming require is resolved in your environment
    // Add other unique plugins here
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

export default config;
