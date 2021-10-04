interface Article {
    title: string,
    text: string
}

class ArticleRepository {
    constructor() {
    }
    getArticles(): Promise<Article[]> {
        // Chercher les données dans une base MongoDB
        return null
    }
}

class ArticleController {
    private articleRepository: ArticleRepository;

    constructor() {
        this.articleRepository = new ArticleRepository()
    }

    async handleGetArticles(res, req): Promise<void> {
        const articles = await this.articleRepository.getArticles()
        return res.status(200).json({articles})
    }
}

// Usage

const articleController = new ArticleRepository()
