var set = new Set();
set.add(23);
set.add(33);
set.add(23);

const TAKE_SAMPLE = "SAMPLE";
set.forEach(function(val) {
    console.log(TAKE_SAMPLE);
});