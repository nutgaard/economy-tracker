import { Inter } from 'next/font/google'
import Button from "@/components/button";
import css from './page.module.css';
import Input from "@/components/input";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className={css.main}>
            <header className={css.header}>
                <h1 className={inter.className}>Designsystem</h1>
            </header>

            <h2>Button</h2>
            <Button>Contents</Button>

            <h2>Inputs</h2>
            <Input />
        </main>
    )
}
