{"type":"Language","header":{"type":"Preblock","declarations":{},"script":0,"location":"0-0|1:1-1:1"},"body":[{"type":"Functional_atom","supertype":"Generative","formula":"registers{$1}","name":{"type":"Function_name_by_word","id":"registers","aliased":null,"script":9,"location":"0-9|1:1-1:10"},"parameters":{"type":"Function_call_appendix_for_list_parameter","list":[{"type":"Functional_molecule","supertype":"Generative","formula":"day{$1}with{$2}","atoms":[{"type":"Functional_atom","name":{"type":"Function_name_by_word","id":"day","aliased":null,"script":3,"location":"13-16|2:3-2:6"},"parameters":{"type":"Function_call_appendix_for_text_parameter","text":"26/11/2024","script":14,"location":"16-30|2:6-2:20"},"script":17,"location":"13-30|2:3-2:20","formula":"day{$1}"},{"type":"Functional_atom","name":{"type":"Function_name_by_word","id":"with","aliased":null,"script":4,"location":"30-34|2:20-2:24"},"parameters":{"type":"Function_call_appendix_for_list_parameter","list":[{"type":"Functional_molecule","supertype":"Generative","formula":"hour{$1}with{$2}","atoms":[{"type":"Functional_atom","name":{"type":"Function_name_by_word","id":"hour","aliased":null,"script":4,"location":"40-44|3:5-3:9"},"parameters":{"type":"Function_call_appendix_for_text_parameter","text":"08:00","script":9,"location":"44-53|3:9-3:18"},"script":13,"location":"40-53|3:5-3:18","formula":"hour{$1}"},{"type":"Functional_atom","name":{"type":"Function_name_by_word","id":"with","aliased":null,"script":4,"location":"53-57|3:18-3:22"},"parameters":{"type":"Function_call_appendix_for_list_parameter","list":[{"type":"Functional_atom","supertype":"Generative","formula":"event{$1}","name":{"type":"Function_name_by_word","id":"event","aliased":null,"script":5,"location":"65-70|4:7-4:12"},"parameters":{"type":"Function_call_appendix_for_text_parameter","text":"Desayunar","script":13,"location":"70-83|4:12-4:25"},"script":18,"location":"65-83|4:7-4:25"},{"type":"Functional_atom","supertype":"Generative","formula":"duration{$1}","name":{"type":"Function_name_by_word","id":"duration","aliased":null,"script":8,"location":"90-98|5:7-5:15"},"parameters":{"type":"Function_call_appendix_for_text_parameter","text":"1h","script":6,"location":"98-104|5:15-5:21"},"script":14,"location":"90-104|5:7-5:21"},{"type":"Functional_atom","supertype":"Generative","formula":"details{$1}","name":{"type":"Function_name_by_word","id":"details","aliased":null,"script":7,"location":"111-118|6:7-6:14"},"parameters":{"type":"Function_call_appendix_for_text_parameter","text":"Wherever","script":12,"location":"118-130|6:14-6:26"},"script":19,"location":"111-130|6:7-6:26"}],"script":79,"location":"57-136|3:22-7:6"},"script":83,"location":"53-136|3:18-7:6","formula":"with{$1}"}]}],"script":106,"location":"34-140|2:24-8:4"},"script":110,"location":"30-140|2:20-8:4","formula":"with{$1}"}]}],"script":133,"location":"9-142|1:10-9:2"},"script":142,"location":"0-142|1:1-9:2"}],"footer":{"mentions":{"molecules":{"hour{$1}with{$2}":"pos=1 times=1","day{$1}with{$2}":"pos=2 times=1"},"atoms":{"with":"pos=1 times=2","registers":"pos=2 times=1","day":"pos=3 times=1","hour":"pos=4 times=1","event":"pos=5 times=1","duration":"pos=6 times=1","details":"pos=7 times=1"}}},"seed":"registers{\n  day{{26/11/2024}}with{\n    hour{{08:00}}with{\n      event{{Desayunar}}\n      duration{{1h}}\n      details{{Wherever}}\n    }\n  }\n}\n\n"}