
export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
            <h2>&copy; Next JS is great!</h2>
        </div>
    )
}

