using app.interactions from '../db/data-model';
@requires: 'authenticated-user'
service CapService {

 entity Interactions_Header
    as projection on interactions.Interactions_Header;

 entity Interactions_Items
    as projection on  interactions.Interactions_Items;

}