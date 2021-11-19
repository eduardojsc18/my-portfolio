module.exports = {
    purge: {
        enabled: true,
        content: ['./resources/view/*.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {

        screens: {
            'sm': '480px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },

        container: {
            center: true,
        },

        fontFamily: {
            'roboto': ['"Roboto"', 'sans-serif'],
        },

        extend: {

            colors:{
                social: {
                    'github': '#6e5494',
                    'twitter': '#1DA1F2',
                    'linkedin': '#3B5998',
                }
            },

            width: {
                '300px': '300px',
                '400px': '400px',
                '200%': '200%'
            },

            scale: {
                '5': '.05',
                '25': '.25',
            },

            height: {
                '300px': '300px'
            },

            boxShadow: {
                'inner-y': 'inset 0px 8px 20px -20px rgba(0, 0, 0, 0.5), inset 0px -11px 8px -10px rgba(0, 0, 0, 0.05)',
            },

            borderRadius: {
                'shapes-perfil': '39% 53% 22% 28% / 28% 45% 46% 55%',
            },

            animation: {
                'gradient-xy': 'gradient-xy 2s ease-in-out infinite',
                'shape-perfil': 'shape-perfil 30s ease alternate infinite ',
                'shape-background-perfil': 'shape-background-perfil 20s ease infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'shake': 'wiggle 5s ease-in-out infinite',
                'animate-wave': 'animate-wave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards'
            },

            keyframes: {

                'gradient-xy': {
                    '0%, 100%': {
                        'background-size': '400% 400%',
                        'background-position': 'left top'
                    },
                    '50%': {
                        'background-size': '100% 100%',
                        'background-position': 'right bottom'
                    }
                },

                'shape-perfil': {
                    '0%': {borderRadius: '39% 53% 22% 28% / 28% 45% 46% 55%'},
                    '25%': {borderRadius: '65% 35% 41% 59% / 73% 37% 63% 27%'},
                    '50%': {borderRadius: '52% 48% 51% 49% / 29% 46% 54% 71% '},
                    '75%': {borderRadius: '45% 55% 13% 87% / 39% 75% 25% 61%'},
                    '100%': {borderRadius: '39% 53% 22% 28% / 28% 45% 46% 55%'},
                },

                'shape-background-perfil': {
                    '0%': {borderRadius: '45% 55% 13% 87% / 83% 75% 25% 17%'},
                    '25%': {borderRadius: '30% 70% 70% 30% / 30% 27% 73% 70%'},
                    '50%': {borderRadius: '57% 43% 70% 30% / 67% 27% 73% 33%'},
                    '75%': {borderRadius: '41% 59% 51% 49% / 43% 51% 49% 57%'},
                    '100%': {borderRadius: '45% 55% 13% 87% / 83% 75% 25% 17%'},
                },

                'wiggle': {
                    '0%, 100%': {
                        transform: 'rotate(-2deg)'
                    },
                    '50%': {
                        transform: 'rotate(2deg)'
                    },
                },

            }

        },

    },
    variants: {
        extend: {

            width: ['focus'],
            scale: ['group-hover'],
            display: ['group-hover'],
            position: ['group-hover'],
            animation: ['group-hover', 'hover'],
            translate: ['group-hover'],
            overflow: ['hover'],

            focus: ['responsive']

        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
