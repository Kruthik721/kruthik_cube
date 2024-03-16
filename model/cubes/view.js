view('ActivePatients', {

  includes: [
    shipment.active_patients_count,
    shipment.new_patients_count,
    shipment.restart_patients_count,
    shipment.dropoff_patients_count
  ],

});