export default function Header() {
    return (
        <main className="p-5 mt-5 border-t flex justify-between items-center">
            <h1>Power By Shamlul.com</h1>
            <div className="space-x-5">
                <span className="hover:drop-shadow hover:underline hover:underline-offset-8 cursor-pointer">Twassul</span>
                <span className="hover:drop-shadow hover:underline hover:underline-offset-8 cursor-pointer">Facebook</span>
                <span className="hover:drop-shadow hover:underline hover:underline-offset-8 cursor-pointer">Twitter</span>
                <span className="hover:drop-shadow hover:underline hover:underline-offset-8 cursor-pointer">Discord</span>
            </div>
        </main>
    )
}
