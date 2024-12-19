import Button from "./Button/button"

export default function TabsSection({ active, izmenenie }) {
    return (
        <section style={{ marginBottom: '1rem' }}>
            <Button isActive={active === 'main'} klicker={() => izmenenie('main')}>Главная</Button>
            <Button isActive={active === 'feedback'} klicker={() => izmenenie('feedback') }>Обратная связь</Button>

        </section>

    )

}