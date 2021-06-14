export default class ApartamentService {
  getApartaments() {
    return fetch('https://apartments-7bdc6-default-rtdb.firebaseio.com/response.json')
      .then((response) => response.json())
      .then((data) => data.map((item) => ApartamentService.adaptToClient(item)));
  };

  static adaptToClient(data) {
    const { relationships } = data;

    const adaptedRelationships = {
      ...relationships, attributes: {
        firstName: relationships.attributes.first_name,
        lastName: relationships.attributes.last_name,
        middleName: relationships.attributes.middle_name
      }
    };

    delete data.relationships.attributes.first_name;
    delete data.relationships.attributes.last_name;
    delete data.relationships.attributes.middle_name;

    const adaptedData = { ...data, relationships: adaptedRelationships };

    return adaptedData;
  }
}