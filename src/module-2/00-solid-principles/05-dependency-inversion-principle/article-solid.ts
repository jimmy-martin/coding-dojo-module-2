interface Article {
}

interface ArticleRepositoryInterface {
    getArticles(): Promise<Article[]>
}

class ArticleRepository implements ArticleRepositoryInterface {
    constructor() {
    }

    getArticles(): Promise<Article[]> {
        return null
    }
}
class OtherDBArticleRepository implements ArticleRepositoryInterface {
    getArticles(): Promise<Article[]> {
        return Promise.resolve([]);
    }

}

class ArticleController {
    private articleRepository: ArticleRepositoryInterface;

    constructor(articleRepository: ArticleRepositoryInterface) {
        this.articleRepository = articleRepository
    }

    async handleGetArticles(res, req): Promise<void> {
        const articles = await this.articleRepository.getArticles()
        return res.status(200).json({articles})
    }
}

// Usage
const articleRepo = new ArticleRepository() // ou mock
const otherDBArticleRepository = new OtherDBArticleRepository()
const articleController = new ArticleController(otherDBArticleRepository)

