import './Header.css'

export default function Header() {
    return (
        <header>
            <table>
                <tr>
                    <td className="color1"></td>
                    <td className="color2"></td>
                    <td className="color3"></td>
                    <td className="color4"></td>
                </tr>
            </table>
            <div className="container-header">
                <h1>tweet length checker</h1>
                <a href="https://kedar-basutkar.netlify.app/">by kedar basutkar</a>
            </div>
        </header>
    )
}