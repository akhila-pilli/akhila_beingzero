$.getJSON('/log',function(d)
{
    alert(JSON.stringify(d));
    $("#P").text(d.name);
})