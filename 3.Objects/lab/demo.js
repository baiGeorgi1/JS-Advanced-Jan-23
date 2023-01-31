function factory(library, orders) {

    const result = [];
    for (const order of orders) {
      const curent = Object.assign({}, order.template);
      for (const part of order.parts) {
        curent[part] = library[part];      
      }
      result.push(curent);
    }
    return result;
  }