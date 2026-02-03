import { ReactNode } from "react";

interface IconProps {
    className?: string;
}

// Service Icons
export function ServiceIcon({ type }: { type: string }): ReactNode {
    const icons: Record<string, ReactNode> = {
        code: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        server: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
            </svg>
        ),
        cart: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        maintenance: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        // Deprecated/Legacy
        design: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        hosting: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
            </svg>
        ),
    };

    return icons[type] || null;
}

// Contact Icons
export function ContactIcon({ type }: { type: string }): ReactNode {
    const icons: Record<string, ReactNode> = {
        email: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        phone: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        location: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        whatsapp: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    };

    return icons[type] || null;
}

// Arrow Icon
export function ArrowIcon({ className = "w-4 h-4" }: IconProps) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    );
}

// Check Icon
export function CheckIcon({ className = "w-5 h-5" }: IconProps) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    );
}

// Tech Stack Icons
export function TechIcon({ type, className = "w-8 h-8" }: { type: string, className?: string }): ReactNode {
    const icons: Record<string, ReactNode> = {
        nextjs: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.663 21.199L7.247 6H5v12h2V9.164l10.528 14.037c.756-.554 1.436-1.196 2.035-1.902l.1-.1zM19 6h-2v12h2V6z" />
            </svg>
        ),
        wordpress: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.158 12.786l-2.698 7.84a8.112 8.112 0 01-3.953-.788l3.053-8.86 1.874 5.43c.04.113.14.187.25.187.11 0 .21-.074.25-.187L15.654 12c1.724 2.373 2.76 5.28 2.76 8.448 0 .193-.006.385-.018.575-1.93 1.05-4.14 1.477-6.396 1.477zm-9.39-1.5c0-1.28.243-2.503.684-3.623l5.06 13.84c-3.11-2.043-5.32-5.337-5.744-10.217zm13.116-2.625c-.244 0-.46-.113-.59-.29l-1.92-2.7c-.12-.17-.183-.375-.183-.585 0-.525.424-.948.948-.948s.948.424.948.948c0 .21-.064.414-.184.584l1.373 1.93 1.344-1.893c-.12-.17-.183-.374-.183-.584 0-.525.423-.948.948-.948s.948.423.948.948c0 .21-.064.414-.184.584l-1.92 2.7c-.13.177-.346.29-.59.29zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zM12 .5c1.82 0 3.535.495 5.01 1.36L12.42 10.4 7.8 1.5l4.2.053V.5z" />
            </svg>
        ),
        laravel: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.115 0a1.53 1.53 0 011.53 1.53v1.854L15.352 2.5a1.534 1.534 0 011.53.003L22.95 6a1.53 1.53 0 01.765 1.325v10.675a1.53 1.53 0 01-.765 1.325l-6.068 3.504a1.534 1.534 0 01-1.53 0L9.284 19.33a1.534 1.534 0 01-.765-1.325v-1.854L6.811 17.5a1.535 1.535 0 01-1.53-.003L1.05 14a1.53 1.53 0 01-.765-1.325V2a1.53 1.53 0 01.765-1.325L7.118.675v3.31a1.534 1.534 0 011.53.003l3.467 2.012V1.53A1.53 1.53 0 0113.645 0zM13.415 8.16l4.643 2.696V5.464L13.415 2.768zm-1.53 2.696L7.242 8.16v5.394l4.643 2.696zm4.643 8.084V13.546l-4.643-2.69v5.394zM10.743 14.84l4.643-2.693V6.756l-4.643 2.693zm-3.1-1.802L3.0 10.344v5.394l4.643 2.696zm4.643 11.23l4.643-2.696v-5.394l-4.643 2.696z" />
            </svg>
        ),
        vuejs: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l12 21h-6.815l-5.185-9.072-5.185 9.072h-6.815zM2.519 0h6.815l2.666 4.664 2.666-4.664h6.815l-9.481 16.592z" />
            </svg>
        ),
        tailwind: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .25 1.7.95 2.45 1.7 1.25 1.25 2.7 2.7 5.75 2.7 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.25-1.55-.95-2.3-1.7-.85-.85-1.9-1.9-3.9-1.9zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .25 1.7.95 2.45 1.7 1.25 1.25 2.7 2.7 5.75 2.7 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.25-1.55-.95-2.3-1.7-.85-.85-1.9-1.9-3.9-1.9z" />
            </svg>
        ),
        gsap: (
            <svg className={className} viewBox="0 0 100 100" fill="currentColor">
                <path d="M35.617 76.53v-29.35c.106-2.585 2.15-4.697 4.717-4.697h13.15c2.476 0 4.49 1.996 4.545 4.538l.019 1.503c.038 2.508-1.986 4.538-4.484 4.538h-8.52v4.545h8.52c2.5 0 4.522 2.03 4.522 4.545v9.832c0 2.515-2.022 4.545-4.522 4.545h-13.73c-2.47 0-4.49-1.996-4.517-4.545zM22.015 76.53v-29.35c.08-2.585 2.124-4.697 4.69-4.697h1.53c2.566 0 4.61 2.112 4.69 4.697v22.25c-.027 2.7.994 3.4 3.19 3.4 1.776 0 3.217.472 3.217 3.328 0 2.2-.821 3.822-3.217 3.822-6.524 0-9.43-3.692-9.5-8.5v-15.15zM2.5 76.53v-29.35c.08-2.585 2.124-4.697 4.69-4.697h13.73c2.51 0 4.545 2.03 4.545 4.545 0 2.515-2.034 4.545-4.545 4.545h-9.2v4.545l9.2.019c2.492.052 4.484 2.1 4.51 4.59v6.248c.03 2.541-1.99 4.545-4.51 4.545h-13.8c-2.473 0-4.531-2.03-4.62-4.545z" />
            </svg>
        )
    };

    return icons[type] || null;
}

// Star Icon
export function StarIcon({ className = "w-4 h-4" }: IconProps) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

// Close Icon
export function CloseIcon({ className = "w-6 h-6" }: IconProps) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}
