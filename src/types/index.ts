// Service type
export interface Service {
    id: number;
    title: string;
}
// Artwork type
export interface Artwork {
    id: string;
    title: string;
    subtitle?: string;
    image: string;
    link: string;
}
// Contact form type
export interface ContactForm {
    name: string;
    email: string;
    project: string;
    budget: string;
    date: string;
    comment?: string;
}
// Menu link type
export interface MenuLink {
    label: string;
    href: string;
}