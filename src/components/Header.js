import Button from "./Button"


function Header () {
    return (
    <div>
       <Button><span class="material-symbols-outlined">
home
</span> Главная</Button> 
       <Button><span class="material-symbols-outlined">
shopping_cart
</span>Товары</Button> 
       <Button> <span class="material-symbols-outlined">
arrow_downward_alt
</span>Акции</Button> 
       <Button> <span class="material-symbols-outlined">
contact_support
</span> Контакты</Button> 
    </div>
    )
}

export default Header