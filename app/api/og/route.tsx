import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

// Définir la taille de l'image
export const runtime = 'edge';

// Utilisation des polices Google hébergées par Vercel
const interFont = fetch(
    new URL('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap', import.meta.url)
).then((res) => res.text());

export async function GET(request: NextRequest) {
    try {
        // Récupérer les paramètres de l'URL (pour personnaliser l'image)
        const { searchParams } = new URL(request.url);

        // Paramètres personnalisables avec valeurs par défaut
        const title = searchParams.get('title') || 'Développement Web Moderne & Abordable';
        const description = searchParams.get('description') || 'Création de sites web professionnels, rapides et optimisés pour votre entreprise';
        const mode = searchParams.get('mode') || 'default'; // default, project, blog, etc.

        // Couleurs respectant l'identité visuelle noir/blanc/gris
        let bgColor = '#000000'; // Noir pour le fond
        let textColor = '#ffffff'; // Blanc pour le texte
        let secondaryTextColor = '#a1a1aa'; // Gris pour le texte secondaire

        // Variations subtiles selon le mode (tout en restant en noir/blanc/gris)
        if (mode === 'project') {
            bgColor = '#0a0a0a'; // Noir légèrement différent
            secondaryTextColor = '#d4d4d8';
        } else if (mode === 'blog') {
            bgColor = '#171717'; // Noir un peu plus clair
            secondaryTextColor = '#e4e4e7';
        }

        return new ImageResponse(
            (
                <div
                    style={{
                        display: 'flex',
                        fontSize: 32,
                        color: textColor,
                        background: bgColor,
                        width: '100%',
                        height: '100%',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 48,
                        border: `1px solid #333333`,
                        fontFamily: '"Inter", sans-serif',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 36,
                        }}
                    >
                        {/* Logo SVG - Le vrai logo WebWizardry avec dimensionnement amélioré */}
                        <div style={{ display: 'flex', marginRight: 20 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 512 512" fill={textColor} stroke="none">
                                <path d="M 231.500 0.709 C 169.828 6.454, 107.681 37.130, 67.451 81.683 C 57.623 92.567, 45.888 107.754, 45.957 109.500 C 45.982 110.126, 55.589 110.687, 71.654 111 C 97.311 111.500, 97.311 111.500, 99.059 116.500 C 100.021 119.250, 105.611 135, 111.482 151.500 C 125.934 192.116, 141.398 236.714, 154.997 277 C 165.888 309.266, 167.335 312.998, 168.499 311.834 C 168.792 311.541, 175.334 293.571, 183.036 271.901 C 197.949 229.944, 212.360 189.709, 229.462 142.274 C 235.258 126.200, 240 112.588, 240 112.024 C 240 110.426, 270.951 110.648, 271.459 112.250 C 274.161 120.783, 314.343 232.239, 328.510 270.500 C 333.805 284.800, 339.351 299.801, 340.835 303.835 C 344.474 313.730, 344.478 313.726, 350.756 295.500 C 355.887 280.601, 366.103 251.455, 387.560 190.500 C 418.208 103.433, 412.716 111.530, 441.322 111.233 C 455.445 111.086, 467 110.707, 467 110.390 C 467 108.694, 451.158 89.119, 442.500 80.117 C 386.814 22.222, 310.176 -6.620, 231.500 0.709 M 127.592 114.194 C 156.757 170.888, 181.396 216.986, 182.104 216.184 C 182.437 215.808, 186.802 203.800, 191.804 189.500 C 196.807 175.200, 202.452 159.216, 204.348 153.981 C 209.382 140.087, 201.525 120.568, 188 113.364 C 180.516 109.378, 125.503 110.134, 127.592 114.194 M 327.267 112.114 C 319.868 114.252, 305.709 136.122, 305.651 145.500 C 305.629 149.180, 330.181 216.219, 331.184 215.216 C 332.376 214.024, 367.559 147.776, 377.105 128.750 C 385.409 112.200, 358.296 103.150, 327.267 112.114 M 470.716 137.750 C 468.195 144.762, 462.477 160.850, 458.010 173.500 C 453.543 186.150, 444.705 210.675, 438.371 228 C 432.037 245.325, 421.402 274.575, 414.738 293 C 366.879 425.334, 374.366 412.520, 345.026 412.326 C 318.640 412.151, 318.640 412.151, 303.446 371.826 C 273.395 292.068, 256.706 249.029, 255.822 249.013 C 255.449 249.006, 254.181 251.588, 253.005 254.750 C 250.248 262.163, 222.555 334.543, 210.823 365 C 205.844 377.925, 199.971 393.450, 197.771 399.500 C 195.571 405.550, 193.485 410.809, 193.135 411.186 C 190.011 414.557, 139.485 412.010, 137.968 408.405 C 137.065 406.257, 130.797 388.750, 124.040 369.500 C 96.125 289.974, 74.806 230.187, 63.423 199.500 C 31.605 113.725, 36.504 121.263, 26.186 142.203 C -75.239 348.027, 124.060 572.245, 342 497.506 C 432.648 466.419, 511 365.388, 511 279.589 C 511 277.065, 511.450 275, 512 275 C 512.638 275, 512.964 267.316, 512.900 253.750 C 512.843 241.543, 512.460 233.564, 512 235 C 511.381 236.933, 511.177 236.247, 511.100 231.975 C 510.653 207.189, 497.217 162.493, 481.723 134.250 C 475.432 122.782, 476.182 122.544, 470.716 137.750" stroke="none" fill-rule="evenodd" />
                            </svg>
                        </div>
                        <span style={{ fontFamily: 'Inter', fontWeight: 'bolder', fontSize: 48 }}>WebWizardry</span>
                    </div>
                    <div
                        style={{
                            fontSize: 36,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: 16,
                            maxWidth: '90%',
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontSize: 24,
                            textAlign: 'center',
                            maxWidth: 800,
                            color: secondaryTextColor,
                        }}
                    >
                        {description}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            marginTop: 40,
                            padding: '12px 24px',
                            border: `1px solid #333333`,
                            borderRadius: 6,
                            fontSize: 20,
                        }}
                    >
                        webwizardry.fr
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
} 