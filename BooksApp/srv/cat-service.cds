using my.bookauthor as my from '../db/data-model';

service CatalogService {
    @readonly entity BookAuth as projection on my.BookAuth;
    entity Authors as projection on my.Authors;
}