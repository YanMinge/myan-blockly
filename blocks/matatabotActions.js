/**
 * @fileoverview Action blocks for MatataBot.
 * @requires Blockly.Blocks
 * @author Evgeniya
 */

'use strict';

goog.provide('Blockly.Blocks.matatabotActions');

goog.require('Blockly.Blocks');

Blockly.Blocks['matatabotActions_motion_forward_step'] = {
    /**
     * move [STEP] forward.
     * 
     * @constructs matatabotsAction_motion_forward_step
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            STEP: 1 step ~ 6 steps
     * @returns after execution
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_MOTION_MOVE_FORWARD,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "STEP",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_MOTION_STEP1,
                        '1 step'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_STEP2,
                        '2 steps'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_STEP3,
                        '3 steps'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_STEP4,
                        '4 steps'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_STEP5,
                        '5 steps'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_STEP6,
                        '6 steps'
                    ]
                ]
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_MOTION_MOVE_FORWARD_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_motion_backward_step'] = {
    /**
     * move [STEP] backward.
     * 
     * @constructs matatabotActions_motion_backward_step
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            STEP: 1 step ~ 6 steps
     * @returns after execution
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_MOTION_MOVE_BACKWARD,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "STEP",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_MOTION_STEP1,
                        '1 step'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_STEP2,
                        '2 steps'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_STEP3,
                        '3 steps'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_STEP4,
                        '4 steps'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_STEP5,
                        '5 steps'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_STEP6,
                        '6 steps'
                    ]
                ]
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_MOTION_MOVE_BACKWARD_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_motion_turn_left_angle'] = {
    /**
     * turn [ANGLE] left.
     * 
     * @constructs matatabotActions_motion_turn_left_angle
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            ANGLE: 30° ~ 180°
     * @returns after execution
     * @memberof Block
     */ 
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_MOTION_TURN_LEFT,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "ANGLE",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE30,
                        '30°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE36,
                        '36°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE45,
                        '45°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE60,
                        '60°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE72,
                        '72°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE90,
                        '90°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE108,
                        '108°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE120,
                        '120°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE135,
                        '135°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE144,
                        '144°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE150,
                        '150°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE180,
                        '180°'
                    ],
                ]
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_MOTION_TURN_LEFT_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_motion_turn_right_angle'] = {
    /**
     * turn [ANGLE] right.
     * 
     * @constructs matatabotActions_motion_turn_right_angle
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            ANGLE: 30° ~ 180°
     * @returns after execution
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_MOTION_TURN_RIGHT,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "ANGLE",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE30,
                        '30°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE36,
                        '36°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE45,
                        '45°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE60,
                        '60°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE72,
                        '72°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE90,
                        '90°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE108,
                        '108°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE120,
                        '120°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE135,
                        '135°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE144,
                        '144°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE150,
                        '150°'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_ANGLE180,
                        '180°'
                    ],
                ]
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_MOTION_TURN_RIGHT_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_motion_moving'] = {
    /**
     * move [POS] cm.
     * 
     * @constructs matatabotActions_motion_moving
     * @this.Blockly.Block
     * @param {Number}
     *            POS: -100.0cm ~ 100.0cm
     * @returns after execution
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_MOTION_MOVING,
            "args0" : [ {
                "type" : "input_value",
                "name": "POS",
                "check": "Number",
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_MOTION_MOVING_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_motion_whirl'] = {
    /**
     * rotate degrees [ANGLE].
     * 
     * @constructs matatabotActions_motion_whirl
     * @this.Blockly.Block
     * @param {Number}
     *            ANGLE: -360° ~ 360°
     * @returns after execution
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_MOTION_WHIRL,
            "args0" : [ {
                "type" : "input_value",
                "name": "ANGLE",
                "check": "Number",
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_MOTION_WHIRL_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_motion_wheel_power'] = {
    /**
     * left wheel [LEFT_DIR] speed [LEFT_GEAR], right wheel [RIGHT_DIR] speed [RIGHT_GEAR].
     * 
     * @constructs matatabotActions_motion_wheel_power
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            LEFT_DIR: forward or backward
     * @param {String/dropdown}
     *            LEFT_GEAR: gear 1 ~ gear 6 or stop or unchanged
     * @param {String/dropdown}
     *            RIGHT_DIR: forward or backward
     * @param {String/dropdown}
     *            RIGHT_GEAR: gear 1 ~ gear 6 or stop or unchanged
     * @returns immediately
     * @memberof Block
     */   
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_MOTION_WHEEL_POWER,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "LEFT_DIR",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_MOTION_FORWARD,
                        'forward'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_BACKWARD,
                        'backward'
                    ]
                ]
            },
            {
                "type" : "field_dropdown",
                "name": "LEFT_GEAR",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_GEAR1,
                        'gear 1'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_GEAR2,
                        'gear 2'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_GEAR3,
                        'gear 3'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_GEAR4,
                        'gear 4'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_GEAR5,
                        'gear 5'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_GEAR6,
                        'gear 6'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_STOP,
                        'stop'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_UNCHANGED,
                        'unchanged'
                    ],
                ]
            },
            {
                "type" : "input_dummy"
            },
            {
                "type" : "field_dropdown",
                "name": "RIGHT_DIR",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_MOTION_FORWARD,
                        'forward'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_BACKWARD,
                        'backward'
                    ]
                ]
            },
            {
                "type" : "field_dropdown",
                "name": "RIGHT_GEAR",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_GEAR1,
                        'gear 1'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_GEAR2,
                        'gear 2'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_GEAR3,
                        'gear 3'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_GEAR4,
                        'gear 4'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_GEAR5,
                        'gear 5'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_GEAR6,
                        'gear 6'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_STOP,
                        'stop'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_UNCHANGED,
                        'unchanged'
                    ],
                ]
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_MOTION_WHEEL_POWER_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_motion_wheel_speed'] = {
    /**
     * left motor speed [LEFT] cm/s, right motor speed [RIGHT] cm/s.
     * 
     * @constructs matatabotActions_motion_wheel_speed
     * @this.Blockly.Block
     * @param {Number}
     *            LEFT_SPEED: left motor speed
     * @param {Number}
     *            RIGHT_SPEED: right motor speed
     * @returns immediately
     * @memberof Block
     */    
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_MOTION_WHEEL_SPEED,
            "args0" : [ {
                "type" : "input_value",
                "name": "LEFT_SPEED",
                "check": "Number",
            },
            {
                "type" : "input_value",
                "name": "RIGHT_SPEED",
                "check": "Number",
            }],
            "inputsInline" : false,
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_MOTION_WHEEL_SPEED_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_motion_stop_moving'] = {
    /**
     * [WHEEL] stop moving.
     * 
     * @constructs matatabotActions_motion_stop_moving
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            WHEEL: both wheels or left wheel or right wheel
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_MOTION_STOP_MOVING,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "WHEEL",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_BOTH,
                        'both wheels'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_LEFT,
                        'left wheel'
                    ],
                    [
                        Blockly.Msg.MATATABOT_MOTION_WHEEL_RIGHT,
                        'right wheel'
                    ]
                ]
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_MOTION_STOP_MOVING_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_do_dance'] = {
    /**
     * perform [DANCE_INDEX] dance.
     * 
     * @constructs matatabotActions_do_dance
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            DANCE_INDEX: the 1st ~ the 6th
     * @returns after execution
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_DO_DANCE,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "DANCE_INDEX",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_DANCE_NUM1,
                        'the 1st'
                    ],
                    [
                        Blockly.Msg.MATATABOT_DANCE_NUM2,
                        'the 2nd'
                    ],
                    [
                        Blockly.Msg.MATATABOT_DANCE_NUM3,
                        'the 3rd'
                    ],
                    [
                        Blockly.Msg.MATATABOT_DANCE_NUM4,
                        'the 4th'
                    ],
                    [
                        Blockly.Msg.MATATABOT_DANCE_NUM5,
                        'the 5th'
                    ],
                    [
                        Blockly.Msg.MATATABOT_DANCE_NUM6,
                        'the 6th'
                    ]
                ]
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_DO_DANCE_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_do_action'] = {
    /**
     * perform [ACTION_INDEX] action.
     * 
     * @constructs matatabotActions_do_action
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            ACTION_INDEX: the 1st ~ the 6th
     * @returns after execution
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_DO_ACTION,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "ACTION_INDEX",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_ACTION_NUM1,
                        'the 1st'
                    ],
                    [
                        Blockly.Msg.MATATABOT_ACTION_NUM2,
                        'the 2nd'
                    ],
                    [
                        Blockly.Msg.MATATABOT_ACTION_NUM3,
                        'the 3rd'
                    ],
                    [
                        Blockly.Msg.MATATABOT_ACTION_NUM4,
                        'the 4th'
                    ],
                    [
                        Blockly.Msg.MATATABOT_ACTION_NUM5,
                        'the 5th'
                    ],
                    [
                        Blockly.Msg.MATATABOT_ACTION_NUM6,
                        'the 6th'
                    ]
                ]
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_DO_ACTION_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_sound_alto'] = {
    /**
     * play alto [TONE] [BEAT] beats.
     * 
     * @constructs matatabotActions_sound_alto
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            TONE: do ~ ti
     * @param {String/dropdown}
     *            BEAT: 1/4 ~ 6/4
     * @returns after execution
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_SOUND_PLAY_ALTO,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "TONE",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_DO,
                        'do'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_RE,
                        're'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_MI,
                        'mi'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_FA,
                        'fa'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_SO,
                        'so'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_LA,
                        'la'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_TI,
                        'ti'
                    ]
                ]
            },
            {
                "type" : "field_dropdown",
                "name": "BEAT",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_SOUND_BEAT_ONE_FOURTH,
                        '1/4'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_BEAT_TWO_FOURTH,
                        '2/4'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_BEAT_THREE_FOURTH,
                        '3/4'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_BEAT_FOUR_FOURTH,
                        '4/4'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_BEAT_FIVE_FOURTH,
                        '5/4'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_BEAT_SIX_FOURTH,
                        '6/4'
                    ]
                ]
            } ],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_SOUND_ALTO_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_sound_treble'] = {
    /**
     * play treble [TONE] [BEAT] beats.
     * 
     * @constructs matatabotActions_sound_treble
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            TONE: do ~ ti
     * @param {String/dropdown}
     *            BEAT: 1/4 ~ 6/4
     * @returns after execution
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_SOUND_PLAY_TREBLE,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "TONE",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_DO,
                        'do'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_RE,
                        're'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_MI,
                        'mi'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_FA,
                        'fa'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_SO,
                        'so'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_LA,
                        'la'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_TONE_TI,
                        'ti'
                    ]
                ]
            },
            {
                "type" : "field_dropdown",
                "name": "BEAT",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_SOUND_BEAT_ONE_FOURTH,
                        '1/4'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_BEAT_TWO_FOURTH,
                        '2/4'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_BEAT_THREE_FOURTH,
                        '3/4'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_BEAT_FOUR_FOURTH,
                        '4/4'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_BEAT_FIVE_FOURTH,
                        '5/4'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_BEAT_SIX_FOURTH,
                        '6/4'
                    ]
                ]
            } ],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_SOUND_TREBLE_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_sound_melody'] = {
    /**
     * play [MELODY_INDEX] melody.
     * 
     * @constructs matatabotActions_sound_melody
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MELODY_INDEX: the 1st ~ the 10th
     * @returns after execution
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_SOUND_MELODY,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "MELODY_INDEX",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_SOUND_MELODY_NUM1,
                        'the 1st'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_MELODY_NUM2,
                        'the 2nd'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_MELODY_NUM3,
                        'the 3rd'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_MELODY_NUM4,
                        'the 4th'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_MELODY_NUM5,
                        'the 5th'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_MELODY_NUM6,
                        'the 6th'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_MELODY_NUM7,
                        'the 7th'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_MELODY_NUM8,
                        'the 8th'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_MELODY_NUM9,
                        'the 9th'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_MELODY_NUM10,
                        'the 10th'
                    ]
                ]
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_SOUND_MELODY_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_sound_song'] = {
    /**
     * play [SONG_INDEX] song.
     * 
     * @constructs matatabotActions_sound_song
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            SONG_INDEX: the 1st ~ the 6th
     * @returns after execution
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_SOUND_SONG,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "SONG_INDEX",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_SOUND_SONG_NUM1,
                        'the 1st'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_SONG_NUM2,
                        'the 2nd'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_SONG_NUM3,
                        'the 3rd'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_SONG_NUM4,
                        'the 4th'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_SONG_NUM5,
                        'the 5th'
                    ],
                    [
                        Blockly.Msg.MATATABOT_SOUND_SONG_NUM6,
                        'the 6th'
                    ]
                ]
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_SOUND_SONG_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_led_single_set1'] = {
    /**
     * set [SIDE] eye(s) to [COLOR_TYPE] and brightness is level [BRIGHTNESS_LEVEL].
     * 
     * @constructs matatabotActions_led_single_set1
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            SIDE: left or right or all
     * @param {String/dropdown}
     *            COLOR_TYPE: white or red or yellow or green or blue or purple or black
     * @param {String/dropdown}
     *            BRIGHTNESS_LEVEL: 1 ~ 6
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_EYELED_SINGLE_SET1,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "SIDE",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_LOOK_SIDE_LEFT,
                        'left'
                    ],
                    [
                        Blockly.Msg.MATATABOT_LOOK_SIDE_RIGHT,
                        'right'
                    ],
                    [
                        Blockly.Msg.MATATABOT_LOOK_SIDE_ALL,
                        'all'
                    ]
                ]
            },
            {
                "type" : "field_dropdown",
                "name": "COLOR_TYPE",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_COLOR_WHITE,
                        'white'
                    ],
                    [
                        Blockly.Msg.MATATABOT_COLOR_RED,
                        'red'
                    ],
                    [
                        Blockly.Msg.MATATABOT_COLOR_YELLOW,
                        'yellow'
                    ],
                    [
                        Blockly.Msg.MATATABOT_COLOR_GREEN,
                        'green'
                    ],
                    [
                        Blockly.Msg.MATATABOT_COLOR_BLUE,
                        'blue'
                    ],
                    [
                        Blockly.Msg.MATATABOT_COLOR_PURPLE,
                        'purple'
                    ],
                    [
                        Blockly.Msg.MATATABOT_COLOR_BLACK,
                        'black'
                    ],
                ]
            },
            {
                "type" : "field_dropdown",
                "name": "BRIGHTNESS_LEVEL",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_BRIGHTNESS_LEV1,
                        '1'
                    ],
                    [
                        Blockly.Msg.MATATABOT_BRIGHTNESS_LEV2,
                        '2'
                    ],
                    [
                        Blockly.Msg.MATATABOT_BRIGHTNESS_LEV3,
                        '3'
                    ],
                    [
                        Blockly.Msg.MATATABOT_BRIGHTNESS_LEV4,
                        '4'
                    ],
                    [
                        Blockly.Msg.MATATABOT_BRIGHTNESS_LEV5,
                        '5'
                    ],
                    [
                        Blockly.Msg.MATATABOT_BRIGHTNESS_LEV6,
                        '6'
                    ]
                ]
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_EYELED_SINGLE_SET1_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_led_single_set2'] = {
    /**
     * set [SIDE] eye(s) to color [COLOR].
     * 
     * @constructs matatabotActions_led_single_set2
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            SIDE: left or right or all
     * @param {Colour}
     *            COLOR: RGB colour
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_EYELED_SINGLE_SET2,
            "args0" : [ {
                "type" : "field_dropdown",
                "name": "SIDE",
                "options": [
                    [
                        Blockly.Msg.MATATABOT_LOOK_SIDE_LEFT,
                        'left'
                    ],
                    [
                        Blockly.Msg.MATATABOT_LOOK_SIDE_RIGHT,
                        'right'
                    ],
                    [
                        Blockly.Msg.MATATABOT_LOOK_SIDE_ALL,
                        'all'
                    ]
                ]
            },
            {
                "type": "input_value",
                "name": "COLOR",
                "check": "Colour"
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_EYELED_SINGLE_SET2_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_led_single_set3'] = {
    /**
     * set eye [LED_INDEX] red [RED_VALUE] green [GREEN_VALUE] blue [BLUE_VALUE].
     * 
     * @constructs matatabotActions_led_single_set3
     * @this.Blockly.Block
     * @param {Number}
     *            LED_INDEX: 0,1,2
     * @param {Number}
     *            RED_VALUE: 0 ~ 255
     * @param {Number}
     *            GREEN_VALUE: 0 ~ 255
     * @param {Number}
     *            BLUE_VALUE: 0 ~ 255
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_EYELED_SINGLE_SET3,
            "args0" : [ 
            {
                "type": "input_value",
                "name": "LED_INDEX",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "RED_VALUE",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "GREEN_VALUE",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "BLUE_VALUE",
                "check": "Number"
            }],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_EYELED_SINGLE_SET3_TOOLTIP,
        });
    }
};

Blockly.Blocks['matatabotActions_led_all_off'] = {
    /**
     * turn all eyes off.
     * 
     * @constructs matatabotActions_led_all_off
     * @this.Blockly.Block
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.MATATABOT_EYELED_ALL_OFF,
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_ACTION_RGB,
            "tooltip" : Blockly.Msg.MATATABOT_EYELED_ALL_OFF_TOOLTIP,
        });
    }
};