//Entblocks 1.0 기반 블록입니다
//모든 블럭은 자체 개발 하였습니다. 예전 스페셜블럭과는 다르죠.
alert("Loading...Start"),console.log("Loading...")
Entry.staticBlocks = [
{
category: 'start',
blocks: [
'when_run_button_click',
'when_some_key_pressed',
'mouse_clicked',
'mouse_click_cancled',
'when_object_click',
'when_object_click_canceled',
'when_message_cast',
'message_cast',
'message_cast_wait',
'when_scene_start',
'start_scene',
'start_neighbor_scene',
'check_object_property',
'check_block_execution',
'switch_scope',
'is_answer_submited',
'check_lecture_goal',
'check_variable_by_name',
'show_prompt',
'check_goal_success',
'positive_number',
'negative_number',
'wildcard_string',
'wildcard_boolean',
'register_score',
],
},
{
category: 'flow',
blocks: [
'wait_second',
'repeat_basic',
'repeat_inf',
'repeat_while_true',
'stop_repeat',
'_if',
'if_else',
'wait_until_true',
'stop_object',
'restart_project',
'when_clone_start',
'create_clone',
'delete_clone',
'remove_all_clones',
],
},
{
category: 'moving',
blocks: [
'move_direction',
'bounce_wall',
'move_x',
'move_y',
'move_xy_time',
'locate_x',
'locate_y',
'locate_xy',
'locate_xy_time',
'locate',
'locate_object_time',
'rotate_relative',
'direction_relative',
'rotate_by_time',
'direction_relative_duration',
'rotate_absolute',
'direction_absolute',
'see_angle_object',
'move_to_angle',
],
},
{
category: 'looks',
blocks: [
'show',
'hide',
'dialog_time',
'dialog',
'remove_dialog',
'change_to_some_shape',
'change_to_next_shape',
'add_effect_amount',
'change_effect_amount',
'erase_all_effects',
'change_scale_size',
'set_scale_size',
'flip_x',
'flip_y',
'change_object_index',
],
},
{
category: 'brush',
blocks: [
'brush_stamp',
'start_drawing',
'stop_drawing',
'set_color',
'set_random_color',
'change_thickness',
'set_thickness',
'change_brush_transparency',
'set_brush_tranparency',
'brush_erase_all',
],
},
{
category: 'text',
blocks: ['text_blue', 'text_orange', 'text_Yello', 'text_gray ', 'text_flush'],
},
{
category: 'sound',
blocks: [
'sound_something_with_block',
'sound_something_second_with_block',
'sound_from_to',
'sound_something_wait_with_block',
'sound_something_second_wait_with_block',
'sound_from_to_and_wait',
'sound_volume_change',
'sound_volume_set',
'sound_silent_all',
],
},
{
category: 'judgement',
blocks: [
'is_clicked',
'is_press_some_key',
'reach_something',
'boolean_basic_operator',
'boolean_and_or',
'boolean_not',
],
},
{
category: 'calc',
blocks: [
'calc_basic',
'calc_rand',
'coordinate_mouse',
'coordinate_object',
'get_sound_volume',
'quotient_and_mod',
'calc_operation',
'get_project_timer_value',
'choose_project_timer_action',
'set_visible_project_timer',
'get_date',
'distance_something',
'get_sound_duration',
'get_user_name',
'length_of_string',
'combine_something',
'char_at',
'substring',
'index_of_string',
'replace_string',
'change_string_case',
],
},
{
category: 'variable',
blocks: [
'variableAddButton',
'listAddButton',
'ask_and_wait',
'get_canvas_input_value',
'set_visible_answer',
'get_variable',
'change_variable',
'set_variable',
'show_variable',
'hide_variable',
'value_of_index_from_list',
'add_value_to_list',
'remove_value_from_list',
'insert_value_to_list',
'change_value_list_index',
'length_of_list',
'is_included_in_list',
'show_list',
'hide_list',
],
},
{
category: 'func',
blocks: ['functionAddButton'],
},
{
category: 'analysis',
blocks: [
'analizyDataAddButton',
'append_row_to_table',
'insert_row_to_table',
'delete_row_from_table',
'set_value_from_table',
'get_table_count',
'get_value_from_table',
'calc_values_from_table',
'open_table_chart',
'close_table_chart',
],
},
{
category: 'ai_utilize',
blocks: [
'aiUtilizeBlockAddButton',
'aiUtilizeModelTrainButton',
'audio_title',
'check_microphone',
'speech_to_text_convert',
'speech_to_text_get_value',
'get_microphone_volume',
'tts_title',
'read_text',
'read_text_wait_with_block',
'set_tts_property',
'translate_title',
'get_translated_string',
'check_language',
'video_title',
'video_draw_webcam',
'video_check_webcam',
'video_flip_camera',
'video_set_camera_opacity_option',
'video_motion_value',
'video_toggle_model',
'video_is_model_loaded',
'video_number_detect',
'video_toggle_ind',
'video_body_part_coord',
'video_face_part_coord',
'video_detected_face_info',
],
},
{
category: 'expansion',
blocks: [
'expansionBlockAddButton',
'weather_title',
'check_weather',
'check_finedust',
'get_weather_data',
'get_current_weather_data',
'get_today_temperature',
'check_city_weather',
'check_city_finedust',
'get_city_weather_data',
'get_current_city_weather_data',
'get_today_city_temperature',
'festival_title',
'count_festival',
'get_festival_info',
'behaviorConductDisaster_title',
'count_disaster_behavior',
'get_disaster_behavior',
'behaviorConductLifeSafety_title',
'count_lifeSafety_behavior',
'get_lifeSafety_behavior',
],
},
{
category: 'arduino',
blocks: [
'arduino_reconnect',
'arduino_open',
'arduino_cloud_pc_open',
'arduino_connect',
'arduino_download_connector',
'download_guide',
'arduino_download_source',
'arduino_noti',
].concat(EntryStatic.DynamicHardwareBlocks),
}
];
EntryStatic.getAllBlocks = () => {
return Entry.staticBlocks;
}
const updateCategory = (category, options) => {
Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
{ category: 'start', visible: true },
{ category: 'flow', visible: true },
{ category: 'moving', visible: true },
{ category: 'looks', visible: true },
{ category: 'brush', visible: true },
{ category: 'text', visible: true },
{ category: 'sound', visible: true },
{ category: 'judgement', visible: true },
{ category: 'calc', visible: true },
{ category: 'variable', visible: true },
{ category: 'func', visible: true },
{ category: 'analysis', visible: true },
{ category: 'ai_utilize', visible: true },
{ category: 'expansion', visible: true },
{ category: 'arduino', visible: false }, { category: category, visible: true }
]);
for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == 'entryCategorytext')) {
$($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
}
}
Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
Entry.playground.blockMenu._generateCategoryCode(category);
if (options) {
if (options.background) {
$(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
$(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
if (options.backgroundSize) {
$(`#entryCategory${category}`).css('background-size', options.backgroundSize + 'px');
}
}
if (options.name) {
$(`#entryCategory${category}`)[0].innerText = options.name
}
}
}
const addBlock = (blockname, template, color, params, _class, func, skeleton = 'basic') => {
Entry.block[blockname] = {
color: color.color,
outerLine: color.outerline,
skeleton: skeleton,
statement: [],
params: params.params,
events: {},
def: {
params: params.def,
type: blockname
},
paramsKeyMap: params.map,
class: _class ? _class : 'default',
func: func,
template: template
}
} 
console.log("Loading...")
if (typeof useWebGL === 'undefined') {
console.log("Loading....") }
else {
alert("Entry for Developers__작품실행용 beta0.1(모든 블럭은 자체 개발하였습니다.)");console.log("Loading...finish");document.title = "Entry_Developers";}
// 블록 추가 시작

//////////////
addBlock('asdf', '%1내용의 prompt창을 띄우고 창에 입력한 값', {
color: '#0000ff',
outerline: '#0000ff',
}, {
params: [
{
type: 'Block',
accept: 'string'
}
],
def: [
{
type: "text",
params: ['entry']
}
],
_class: 'box_',
map: {
VALUE: 0
},
}, 'text', (sprite, script) => { const value = script.getValue('VALUE', script);
return prompt(value)
}, 'basic_string_field');
//////////////
addBlock('dark', '엔트리에 다크모드 적용시키기', {
color: '#0000ff',
outerline: '#0000ff',
}, {
params: [
{
type: 'Block',
accept: 'string'
}
],
def: [
{
type: "text",
params: []
}
],
_class: 'box_',
map: {
VALUE: 0
},
}, 'text', (sprite, script) => { const value = script.getValue('VALUE', script);
$("div, p, pre").css({"background-color" : "black", "color" : "black"}),console.log("entry_dark_mode_Start")
},);
//////////////
addBlock('open', '%1유저의 마이페이지를 열거나 링크의 페이지를 열기', {
color: '#0000ff',
outerline: '#0000ff',
}, {
params: [
{
type: 'Block',
accept: 'string'
}
],
def: [
{
type: "text",
params: ['https://playentry.org/']
}
],
_class: 'box_',
map: {
VALUE: 0
},
}, 'text', (sprite, script) => { const value = script.getValue('VALUE', script);
m1 = confirm('이작품에서 '+value+' 유저또는 이링크의 페이지를 열려고합니다. 허락하시나요?')
if(m1) {
open(value),console.log(value+'의 유저또는 이 링크의 페이지를 열었습니다.')
} else {
alert("작업이 취소되었습니다."),console.log("작업취소") }
},);
//////////////
addBlock('print', '본 페이지를 인쇄하기', {
color: '#0000ff',
outerline: '#0000ff',
}, {
params: [
{
type: 'Block',
accept: 'string'
}
],
def: [
{
type: "text",
params: ['']
}
],
_class: 'box_',
map: {
VALUE: 0
},
}, 'text', (sprite, script) => { const value = script.getValue('VALUE', script);
m1 = confirm('이 작품에서 본 페이지를 인쇄할려합니다. 동의하시나요?')
if(m1) {
window.print(),console.log('인쇄작업을 완료했습니다.')
} else {
alert("작업이 취소되었습니다."),console.log("작업취소") }
},);
//////////////
addBlock('code', '%1코드를 실행하기', {
color: '#0000ff',
outerline: '#0000ff',
}, {
params: [
{
type: 'Block',
accept: 'string'
}
],
def: [
{
type: "text",
params: ['alert("entry")']
}
],
_class: 'box_',
map: {
VALUE: 0
},
}, 'text', (sprite, script) => { const value = script.getValue('VALUE', script);
m1 = confirm('본작품에서 '+value+' 코드를 실행하여합니다. 동의하시나요?')
if(m1) {eval(value)}
else{alert("작업취소")}
                               })
//////////////
addBlock('code_look', '코드보기인가?', {
color: '#0000ff',
outerline: '#0000ff',
}, {
params: [
{
type: 'Block',
accept: 'string'
}
],
def: [
{
type: "text",
params: ['entry']
}
],
_class: 'box_',
map: {
VALUE: 0
},
}, 'text', (sprite, script) => { const value = script.getValue('VALUE', script);
if (typeof useWebGL === 'undefined') {
return true; }
else {
return false;}
},'basic_boolean_field')
//////////////
addBlock('user_role', '사용자의 role정보', {
color: '#0000ff',
outerline: '#0000ff',
}, {
params: [
{
type: 'Block',
accept: 'string'
}
],
def: [
{
type: "text",
params: ['']
}
],
_class: 'box_',
map: {
VALUE: 0
},
}, 'text', (sprite, script) => { const value = script.getValue('VALUE', script);
return global.user.role;
}, 'basic_string_field')
//////////////////


////////////////////
addBlock('finish', '오류 발생시키기%1', {
color: '#0000ff',
outerLine: '#0000ff'
}, {
params: [
{
type: 'Block',
}
],
def: [
null
],
map: {}
}, 'text', (sprite, script) => {
finish()
return script.callReturn()
})
///////////////블록 추가 끝////////////



Entry.staticBlocks.push({
category: 'API', blocks: [
'asdf',
'dark',
'open',
'print',
'code',
'code_look',
'user_role',
'finish'
]
});


updateCategory('API')

$('head').append(`
<style>
#entryCategoryAPI {
    background-repeat: no-repeat;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    margin-bottom: 1px;
}
.entrySelectedCategory#entryCategoryAPI {
    background-color: #0000ff;
    border-color: #0000ff;
    color: #ffff;
}
</style>
`)

$('#entryCategoryAPI').append('Developers'),alert("Entry for Developers__코드보기용 beta0.1(모든 블럭은 자체 개발하였습니다.)");console.log("Loading...finish");document.title = "Entry_Developers";
