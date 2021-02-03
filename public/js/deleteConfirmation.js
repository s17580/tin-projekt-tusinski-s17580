function confirmDelete(formId) {
  swal({
    title: "Czy jesteś pewny?",
    text: "Jeśli klikniesz usuń rekord zostanie stale usunięty.",
    icon: "warning",
    buttons: ["Anuluj", "Usuń"],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      document.getElementById(formId).submit();
    }
  });
}
