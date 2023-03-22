// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    generatePostHtml() {

        const {
            name,
            age,
            avatar,
            bio,
            hasBeenSwiped,
            hasBeenLiked
        } = this

        return `
        <section class="post">
        <img class="post__img" src="${avatar}" alt="dog-rex image">
        <div class="post__info">
            <h1 class="post__name">${name}, ${age}</h1>
            <p class="post__bio">${bio}</p>
        </div>
        <img class="post__img-action" src="" alt="">
        <ul class="post__icon-list">
            <li class="post__icon-item post__icon-item--cross" ><img data-icon="cross" src="/images/icon-cross.png" alt=""></li>
            <li class="post__icon-item post__icon-item--heart" ><img data-icon="heart" src="/images/icon-heart.png" alt=""></li>
        </ul>
    </section>
        `
    }
}

export default Dog