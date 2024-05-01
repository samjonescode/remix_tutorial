import styles from '~/about.css?url';
export default function About() {
    return (
        <main className="content">
            This is the about page!
        </main>
    )
}
export function links() {
    return [
        { rel: 'stylesheet', href: styles}
    ]
}