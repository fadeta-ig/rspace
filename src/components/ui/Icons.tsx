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
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.756 0 5.293-0.927 7.333-2.483L8.647 10.32c-0.124-0.165-0.192-0.366-0.192-0.573 0-0.524 0.424-0.948 0.948-0.948 0.198 0 0.389 0.062 0.548 0.177l11.458 8.3c1.624-2.022 2.591-4.604 2.591-7.416C24 5.373 18.627 0 12 0z M12.948 12h-1.896v8.448h1.896V12z" />
            </svg>
        ),
        wordpress: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-1.396 0-2.733-.28-3.953-.787l3.053-8.86 1.874 5.43c.04.113.14.187.25.187.11 0 .21-.074.25-.187L15.654 12c1.724 2.373 2.76 5.28 2.76 8.448 0 .193-.006.385-.018.575-1.93 1.05-4.14 1.477-6.396 1.477zm-9.39-10.5c0-1.28.243-2.503.684-3.623l5.06 13.84c-3.11-2.043-5.32-5.337-5.744-10.217zm13.116-2.625c-.244 0-.46-.113-.59-.29l-1.92-2.7c-.12-.17-.183-.375-.183-.585 0-.525.424-.948.948-.948s.948.424.948.948c0 .21-.064.414-.184.584l1.373 1.93 1.344-1.893c-.12-.17-.183-.374-.183-.584 0-.525.423-.948.948-.948s.948.423.948.948c0 .21-.064.414-.184.584l-1.92 2.7c-.13.177-.346.29-.59.29zM12 1.5c1.82 0 3.535.495 5.01 1.36L12.42 10.4 7.8 1.5c1.332-.317 2.72-.492 4.147-.5l.053.5z" />
            </svg>
        ),
        laravel: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.25 18h-4.5v-1.125h4.5V18zm0-3.375h-4.5V13.5h4.5v1.125zm0-3.375h-4.5V10.125h4.5V11.25zM12 7.875H7.5V6.75h9v1.125H12z" />
            </svg>
        ),
        vuejs: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M24,1.6L12,22.4L0,1.6h5.3L12,13.2l6.7-11.6H24z M18.1,1.6L12,12.2L5.9,1.6h-4L12,20.4l10.1-18.8H18.1z" />
            </svg>
        ),
        tailwind: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 6.018c-3.333 0-5.333 1.667-6 5 1.5-2.5 3.333-3.084 5.5-1.75 1.236.746 2.12 1.277 3.097 1.867C16.19 12.071 18.064 13.2 21 13.2c3.333 0 5.333-1.667 6-5-1.5 2.5-3.333 3.084-5.5 1.75-1.236-.746-2.12-1.277-3.097-1.867C16.81 7.214 14.936 6.018 12 6.018zM6 13.2c-3.333 0-5.333 1.667-6 5 1.5-2.5 3.333-3.084 5.5-1.75 1.236.746 2.12 1.277 3.097 1.867 1.593.937 3.467 2.042 6.403 2.042 3.333 0 5.333-1.667 6-5-1.5 2.5-3.333 3.084-5.5 1.75-1.236-.746-2.12-1.277-3.097-1.867-1.594-.937-3.467-2.042-6.403-2.042z" />
            </svg>
        ),
        gsap: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 2h20v20H2V2zm18 18V4H4v16h16zm-6-5h2v2h-2v-2zm-4 0h2v2h-2v-2zm-4 0h2v2H6v-2zm12-4h2v2h-2v-2zm-4 0h2v2h-2v-2zm-4 0h2v2H6v-2zm12-4h2v2h-2V7zm-4 0h2v2h-2V7zm-4 0h2v2H6V7z" />
            </svg>
        ),
        directus: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm8.5 16.5l-8.5 4.8-8.5-4.8V7.5l8.5-4.8 8.5 4.8v9z M12 6.5l-6 3.4v4.2l6 3.4 6-3.4V9.9l-6-3.4z" />
            </svg>
        ),
        digitalocean: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.223 0C5.485 0 0 5.485 0 12.223C0 18.96 5.485 24.445 12.223 24.445C18.96 24.445 24.445 18.96 24.445 12.223C24.445 5.485 18.96 0 12.223 0ZM12.223 19.344V15.011H16.556V19.344H12.223ZM16.556 12.223H12.223V7.889H16.556V12.223ZM19.344 19.344H18.011V18.111H19.344V19.344ZM19.344 16.556H18.011V15.322H19.344V16.556ZM22.245 19.899H20.245V17.899H22.245V19.899Z" />
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
