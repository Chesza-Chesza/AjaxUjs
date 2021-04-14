// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// $.ajax({
//         url: '/todos',
//         type: 'post',
//         dataType: 'json',
//         headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
//         data: { "todo": { "content": "Este es un todo creado desde ajax_Js" } },
//     })
//     .done(function(data) {
//         console.log(data);
//     })
//     .fail(function() {
//         console.log("error");
//     })
//     .always(function() {
//         console.log("complete");
//     });