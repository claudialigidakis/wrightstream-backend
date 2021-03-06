exports.seed = function(knex, Promise) {
  return knex('items_supplies').del()
    .then(function () {
      return knex('items_supplies').insert([
        {supply_qty: 1, measure_unit: 'cup', item_id: 1, supplies_id: 1},
        {supply_qty: 1.33, measure_unit: 'cup', item_id: 1, supplies_id: 2},
        {supply_qty: .75, measure_unit: 'tsp', item_id: 1, supplies_id: 3},
        {supply_qty: .5, measure_unit: 'tsp', item_id: 1, supplies_id: 4},
        {supply_qty: 1, measure_unit: 'unit', item_id: 1, supplies_id: 7},
        {supply_qty: 2, measure_unit: 'unit', item_id: 1, supplies_id: 8},
        {supply_qty: 3, measure_unit: 'Tbs', item_id: 1, supplies_id: 10},
        {supply_qty: 12.5, measure_unit: 'tsp', item_id: 1, supplies_id: 11},
        {supply_qty: .75, measure_unit: 'cup', item_id: 1, supplies_id: 12},
        {supply_qty: 2, measure_unit: 'tsp', item_id: 1, supplies_id: 13},
        {supply_qty: .25, measure_unit: 'tsp', item_id: 1, supplies_id: 14},

        {supply_qty: .66, measure_unit: 'cup', item_id: 2, supplies_id: 1},
        {supply_qty: 1.25, measure_unit: 'cup', item_id: 2, supplies_id: 2},
        {supply_qty: 1, measure_unit: 'tsp', item_id: 2, supplies_id: 3},
        {supply_qty: .5, measure_unit: 'tsp', item_id: 2, supplies_id: 4},
        {supply_qty: 1, measure_unit: 'unit', item_id: 2, supplies_id: 7},
        {supply_qty: 2, measure_unit: 'unit', item_id: 2, supplies_id: 8},
        {supply_qty: 1, measure_unit: 'cup', item_id: 2, supplies_id: 9},
        {supply_qty: 5, measure_unit: 'Tbs', item_id: 2, supplies_id: 10},
        {supply_qty: 1, measure_unit: 'tsp', item_id: 2, supplies_id: 11},
        {supply_qty: .75, measure_unit: 'tsp', item_id: 2, supplies_id: 14},

        {supply_qty: 18, measure_unit: 'oz', item_id: 3, supplies_id: 15},
        {supply_qty: 3, measure_unit: 'oz', item_id: 3, supplies_id: 16},
        {supply_qty: 1, measure_unit: 'cup', item_id: 3, supplies_id: 17},
        {supply_qty: 1, measure_unit: 'cup', item_id: 3, supplies_id: 18},
        {supply_qty: .5, measure_unit: 'cup', item_id: 3, supplies_id: 1},
        {supply_qty: 4, measure_unit: 'unit', item_id: 3, supplies_id: 8},

        {supply_qty: 6, measure_unit: 'Tbs', item_id: 4, supplies_id: 10},
        {supply_qty: 3, measure_unit: 'cup', item_id: 4, supplies_id: 2},
        {supply_qty: 1, measure_unit: 'Tbs', item_id: 4, supplies_id: 13},
        {supply_qty: .5, measure_unit: 'tsp', item_id: 4, supplies_id: 11},
        {supply_qty: 1.25, measure_unit: 'cup', item_id: 4, supplies_id: 9},
        {supply_qty: 4, measure_unit: 'unit', item_id: 4, supplies_id: 8},
        {supply_qty: 1, measure_unit: 'Tbs', item_id: 4, supplies_id: 3},
        {supply_qty: 1.25, measure_unit: 'cup', item_id: 4, supplies_id: 1},

        {supply_qty: 2, measure_unit: 'cup', item_id: 5, supplies_id: 9},
        {supply_qty: 1.75, measure_unit: 'cup', item_id: 5, supplies_id: 2},
        {supply_qty: .75, measure_unit: 'cup', item_id: 5, supplies_id: 12},
        {supply_qty: 1.5, measure_unit: 'tsp', item_id: 5, supplies_id: 13},
        {supply_qty: 1.5, measure_unit: 'tsp', item_id: 5, supplies_id: 14},
        {supply_qty: 1, measure_unit: 'tsp', item_id: 5, supplies_id: 11},
        {supply_qty: 2, measure_unit: 'unit', item_id: 5, supplies_id: 8},
        {supply_qty: 1, measure_unit: 'cup', item_id: 5, supplies_id: 1},
        {supply_qty: .5, measure_unit: 'cup', item_id: 5, supplies_id: 18},
        {supply_qty: 2, measure_unit: 'tsp', item_id: 5, supplies_id: 19},
        {supply_qty: 2, measure_unit: 'tsp', item_id: 5, supplies_id: 3},

        {supply_qty: 1.25, measure_unit: 'cup', item_id: 6, supplies_id: 10},
        {supply_qty: 2, measure_unit: 'cup', item_id: 6, supplies_id: 9},
        {supply_qty: 2, measure_unit: 'unit', item_id: 6, supplies_id: 8},
        {supply_qty: 2, measure_unit: 'tsp', item_id: 6, supplies_id: 3},
        {supply_qty: 2, measure_unit: 'cup', item_id: 6, supplies_id: 2},
        {supply_qty: .75, measure_unit: 'cup', item_id: 6, supplies_id: 12},
        {supply_qty: 1, measure_unit: 'tsp', item_id: 6, supplies_id: 14},
        {supply_qty: .5, measure_unit: 'tsp', item_id: 6, supplies_id: 11},
        {supply_qty: 2, measure_unit: 'cup', item_id: 6, supplies_id: 22},

        {supply_qty: .5, measure_unit: 'cup', item_id: 7, supplies_id: 10},
        {supply_qty: .75, measure_unit: 'cup', item_id: 7, supplies_id: 9},
        {supply_qty: 1, measure_unit: 'unit', item_id: 7, supplies_id: 8},
        {supply_qty: 1, measure_unit: 'Tbs', item_id: 7, supplies_id: 1},
        {supply_qty: .5, measure_unit: 'tsp', item_id: 7, supplies_id: 3},
        {supply_qty: 1.5, measure_unit: 'cup', item_id: 7, supplies_id: 2},
        {supply_qty: .75, measure_unit: 'tsp', item_id: 7, supplies_id: 13},
        {supply_qty: .25, measure_unit: 'tsp', item_id: 7, supplies_id: 11},
        {supply_qty: 1, measure_unit: 'Tbs', item_id: 7, supplies_id: 19},

        {supply_qty: 2.75, measure_unit: 'cup', item_id: 8, supplies_id: 2},
        {supply_qty: 1, measure_unit: 'tsp', item_id: 8, supplies_id: 14},
        {supply_qty: .5, measure_unit: 'tsp', item_id: 8, supplies_id: 13},
        {supply_qty: 1, measure_unit: 'cup', item_id: 8, supplies_id: 10},
        {supply_qty: 1.5, measure_unit: 'cup', item_id: 8, supplies_id: 9},
        {supply_qty: 1, measure_unit: 'unit', item_id: 8, supplies_id: 8},
        {supply_qty: 1, measure_unit: 'tsp', item_id: 8, supplies_id: 3},

        {supply_qty: 10, measure_unit: 'Tbs', item_id: 9, supplies_id: 10},
        {supply_qty: 1.25, measure_unit: 'cup', item_id: 9, supplies_id: 9},
        {supply_qty: .75, measure_unit: 'cup', item_id: 9, supplies_id: 12},
        {supply_qty: .25, measure_unit: 'tsp', item_id: 9, supplies_id: 11},
        {supply_qty: .5, measure_unit: 'tsp', item_id: 9, supplies_id: 3},
        {supply_qty: 1, measure_unit: 'tsp', item_id: 9, supplies_id: 3},
        {supply_qty: 2, measure_unit: 'unit', item_id: 9, supplies_id: 8},
        {supply_qty: .5, measure_unit: 'cup', item_id: 9, supplies_id: 2},

        {supply_qty: 1, measure_unit: 'unit', item_id: 10, supplies_id: 20},

        {supply_qty: 5, measure_unit: 'cup', item_id: 11, supplies_id: 18},
        {supply_qty: 1, measure_unit: 'cup', item_id: 11, supplies_id: 1},
        {supply_qty: 1, measure_unit: 'unit', item_id: 11, supplies_id: 8},
        {supply_qty: 2, measure_unit: 'cup', item_id: 11, supplies_id: 2},
        {supply_qty: 2, measure_unit: 'Tbs', item_id: 11, supplies_id: 9},
        {supply_qty: 4.5, measure_unit: 'tsp', item_id: 11, supplies_id: 13},
        {supply_qty: .5, measure_unit: 'tsp', item_id: 11, supplies_id: 11},
        {supply_qty: .25, measure_unit: 'cup', item_id: 11, supplies_id: 10},
        {supply_qty: 1, measure_unit: 'cup', item_id: 11, supplies_id: 23},

        {supply_qty: 2.5, measure_unit: 'cup', item_id: 12, supplies_id: 2},
        {supply_qty: 1, measure_unit: 'cup', item_id: 12, supplies_id: 12},
        {supply_qty: 2, measure_unit: 'tsp', item_id: 12, supplies_id: 13},
        {supply_qty: .5, measure_unit: 'tsp', item_id: 12, supplies_id: 14},
        {supply_qty: .25, measure_unit: 'tsp', item_id: 12, supplies_id: 11},
        {supply_qty: 1, measure_unit: 'cup', item_id: 12, supplies_id: 9},
        {supply_qty: .75, measure_unit: 'cup', item_id: 12, supplies_id: 1},
        {supply_qty: 2, measure_unit: 'unit', item_id: 12, supplies_id: 8},
        {supply_qty: .25, measure_unit: 'cup', item_id: 12, supplies_id: 10},
        {supply_qty: 2, measure_unit: 'tsp', item_id: 12, supplies_id: 3},
        {supply_qty: 1, measure_unit: 'cup', item_id: 12, supplies_id: 23},

        {supply_qty: 1, measure_unit: 'unit', item_id: 16, supplies_id: 21}

      ])
    })
};
