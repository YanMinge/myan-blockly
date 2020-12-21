/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Text blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.texts');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.texts.HUE = 160;

Blockly.Blocks['text'] = {
    /**
     * Block for text value.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
        this.setColour(Blockly.CAT_TEXT_RGB);
        this.appendDummyInput().appendField(this.newQuote_(true)).appendField(new Blockly.FieldTextInput('', this.validate), 'TEXT').appendField(this.newQuote_(false));
        this.setOutput(true, 'String');
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        // Text block is trivial.  Use tooltip of parent block if it exists.
        this.setTooltip(function() {
            var parent = thisBlock.getParent();
            return (parent && parent.getInputsInline() && parent.tooltip) || Blockly.Msg.TEXT_TEXT_TOOLTIP;
        });
    },
    validate : function(content) {
        if (content && content.match(/[<>\$]/))
            return null;
        return content;
    },
    /**
     * Create an image of an open or closed quote.
     * 
     * @param {boolean}
     *            open True if open quote, false if closed.
     * @return {!Blockly.FieldImage} The field image of the quote.
     * @this Blockly.Block
     * @private
     */
    newQuote_ : function(open) {
        if (open == this.RTL) {
            var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
        } else {
            var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
        }
        return new Blockly.FieldImage(file, 12, 12, '"');
    }
};

Blockly.Blocks['text_comment'] = {
    /**
     * Block for text value.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
        this.setColour(Blockly.CAT_TEXT_RGB);
        var comment = new Blockly.FieldTextInput('', this.validate);
        comment.maxDisplayLength = 75;
        this.appendDummyInput().appendField(this.newComment_(true)).appendField(comment, 'TEXT').appendField(this.newComment_(false));        
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.TEXT_COMMENT_TOOLTIP);
    },
    validate : function(content) {
        if (content && content.match(/[<>\$]/))
            return null;
        return content;
    },
    /**
     * Create an image of an open or closed comment.
     * 
     * @param {boolean}
     *            open True if open comment, false if closed.
     * @return {!Blockly.FieldImage} The field image of the quote.
     * @this Blockly.Block
     * @private
     */
    newComment_ : function(open) {
        if (open) {
            var file = 'data:image/svg+xml;charset=UTF-8,<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" width="32" height="32" viewBox="0 0 32 32" fill="%23ffffff" ><path d="M24 8h-17.333c-2.2 0-4 1.8-4 4v9.333c0 2.2 1.8 4 4 4h1.333v4l4-4h12c2.2 0 4-1.8 4-4v-9.333c0-2.2-1.8-4-4-4zM25.333 21.333c0 0.723-0.611 1.333-1.333 1.333h-17.333c-0.723 0-1.333-0.611-1.333-1.333v-9.333c0-0.723 0.611-1.333 1.333-1.333h17.333c0.723 0 1.333 0.611 1.333 1.333v9.333zM9.333 19.333c-1.472 0-2.667-1.195-2.667-2.667s1.195-2.667 2.667-2.667 2.667 1.195 2.667 2.667-1.195 2.667-2.667 2.667zM9.333 15.333c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333 1.333-0.597 1.333-1.333-0.597-1.333-1.333-1.333zM15.333 19.333c-1.472 0-2.667-1.195-2.667-2.667s1.195-2.667 2.667-2.667 2.667 1.195 2.667 2.667-1.195 2.667-2.667 2.667zM15.333 15.333c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333 1.333-0.597 1.333-1.333-0.597-1.333-1.333-1.333zM21.333 19.333c-1.472 0-2.667-1.195-2.667-2.667s1.195-2.667 2.667-2.667 2.667 1.195 2.667 2.667-1.195 2.667-2.667 2.667zM21.333 15.333c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333 1.333-0.597 1.333-1.333-0.597-1.333-1.333-1.333z"></path></svg>';
        } else {
            var file = 'data:image/svg+xml;charset=UTF-8,<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" width="32" height="32" viewBox="-32 0 32 32" fill="%23ffffff"><path transform="scale(-1,1)" d="M24 8h-17.333c-2.2 0-4 1.8-4 4v9.333c0 2.2 1.8 4 4 4h1.333v4l4-4h12c2.2 0 4-1.8 4-4v-9.333c0-2.2-1.8-4-4-4zM25.333 21.333c0 0.723-0.611 1.333-1.333 1.333h-17.333c-0.723 0-1.333-0.611-1.333-1.333v-9.333c0-0.723 0.611-1.333 1.333-1.333h17.333c0.723 0 1.333 0.611 1.333 1.333v9.333zM9.333 19.333c-1.472 0-2.667-1.195-2.667-2.667s1.195-2.667 2.667-2.667 2.667 1.195 2.667 2.667-1.195 2.667-2.667 2.667zM9.333 15.333c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333 1.333-0.597 1.333-1.333-0.597-1.333-1.333-1.333zM15.333 19.333c-1.472 0-2.667-1.195-2.667-2.667s1.195-2.667 2.667-2.667 2.667 1.195 2.667 2.667-1.195 2.667-2.667 2.667zM15.333 15.333c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333 1.333-0.597 1.333-1.333-0.597-1.333-1.333-1.333zM21.333 19.333c-1.472 0-2.667-1.195-2.667-2.667s1.195-2.667 2.667-2.667 2.667 1.195 2.667 2.667-1.195 2.667-2.667 2.667zM21.333 15.333c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333 1.333-0.597 1.333-1.333-0.597-1.333-1.333-1.333z"></path></svg>';
        }
        return new Blockly.FieldImage(file, 18, 18, '"');
    },
    /**
     * Customized context menu
     */
    customContextMenu: function(options) {
        // remove comment function for this particular block
        options.splice(1, 1);
    }
};

Blockly.Blocks['text_join'] = {
    /**
     * Block for creating a string made up of any number of elements of any
     * type.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.setHelpUrl(Blockly.Msg.TEXT_JOIN_HELPURL);
        this.setColour(Blockly.CAT_TEXT_RGB);
        this.itemCount_ = 2;
        this.updateShape_();
        this.setOutput(true, 'String');
        this.setMutator(new Blockly.Mutator([ 'text_create_join_item' ]));
        this.setTooltip(Blockly.Msg.TEXT_JOIN_TOOLTIP);
    },
    /**
     * Create XML to represent number of text inputs.
     * 
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom : function() {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    /**
     * Parse XML to restore the text inputs.
     * 
     * @param {!Element}
     *            xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation : function(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * 
     * @param {!Blockly.Workspace}
     *            workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose : function(workspace) {
        var containerBlock = workspace.newBlock('text_create_join_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('text_create_join_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * 
     * @param {!Blockly.Block}
     *            containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose : function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * 
     * @param {!Blockly.Block}
     *            containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections : function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * 
     * @private
     * @this Blockly.Block
     */
    updateShape_ : function() {
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY').appendField(this.newQuote_(true)).appendField(this.newQuote_(false));
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i);
                if (i == 0) {
                    input.appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH);
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    },
    newQuote_ : Blockly.Blocks['text'].newQuote_
};

Blockly.Blocks['text_create_join_container'] = {
    /**
     * Mutator block for container.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.setColour(Blockly.CAT_TEXT_RGB);
        this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['text_create_join_item'] = {
    /**
     * Mutator block for add items.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.setColour(Blockly.CAT_TEXT_RGB);
        this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['text_append'] = {
    /**
     * Block for appending to a variable in place.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.setHelpUrl(Blockly.Msg.TEXT_APPEND_HELPURL);
        this.setColour(Blockly.CAT_TEXT_RGB);
        this.appendValueInput('TEXT').appendField(Blockly.Msg.TEXT_APPEND_TO).appendField(new Blockly.FieldVariable(Blockly.Msg.TEXT_APPEND_VARIABLE), 'VAR').appendField(Blockly.Msg.TEXT_APPEND_APPENDTEXT);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            return Blockly.Msg.TEXT_APPEND_TOOLTIP.replace('%1', thisBlock.getFieldValue('VAR'));
        });
    }
};

Blockly.Blocks['text_length'] = {
    /**
     * Block for string length.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.TEXT_LENGTH_TITLE,
            "args0" : [ {
                "type" : "input_value",
                "name" : "VALUE",
                "check" : [ 'String', 'Array' ]
            } ],
            "output" : 'Number',
            "colour" : Blockly.CAT_TEXT_RGB,
            "tooltip" : Blockly.Msg.TEXT_LENGTH_TOOLTIP,
            "helpUrl" : Blockly.Msg.TEXT_LENGTH_HELPURL
        });
    }
};

Blockly.Blocks['text_isEmpty'] = {
    /**
     * Block for is the string null?
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.TEXT_ISEMPTY_TITLE,
            "args0" : [ {
                "type" : "input_value",
                "name" : "VALUE",
                "check" : [ 'String', 'Array' ]
            } ],
            "output" : 'Boolean',
            "colour" : Blockly.CAT_TEXT_RGB,
            "tooltip" : Blockly.Msg.TEXT_ISEMPTY_TOOLTIP,
            "helpUrl" : Blockly.Msg.TEXT_ISEMPTY_HELPURL
        });
    }
};

Blockly.Blocks['text_indexOf'] = {
    /**
     * Block for finding a substring in the text.
     * 
     * @this Blockly.Block
     */
    init : function() {
        var OPERATORS = [ [ Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST, 'FIRST' ], [ Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST, 'LAST' ] ];
        this.setHelpUrl(Blockly.Msg.TEXT_INDEXOF_HELPURL);
        this.setColour(Blockly.CAT_TEXT_RGB);
        this.setOutput(true, 'Number');
        this.appendValueInput('VALUE').setCheck('String').appendField(Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT);
        this.appendValueInput('FIND').setCheck('String').appendField(new Blockly.FieldDropdown(OPERATORS), 'END');
        if (Blockly.Msg.TEXT_INDEXOF_TAIL) {
            this.appendDummyInput().appendField(Blockly.Msg.TEXT_INDEXOF_TAIL);
        }
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.TEXT_INDEXOF_TOOLTIP);
    }
};

Blockly.Blocks['text_charAt'] = {
    /**
     * Block for getting a character from the string.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.WHERE_OPTIONS = [ [ Blockly.Msg.TEXT_CHARAT_FROM_START, 'FROM_START' ], [ Blockly.Msg.TEXT_CHARAT_FROM_END, 'FROM_END' ],
                [ Blockly.Msg.TEXT_CHARAT_FIRST, 'FIRST' ], [ Blockly.Msg.TEXT_CHARAT_LAST, 'LAST' ], [ Blockly.Msg.TEXT_CHARAT_RANDOM, 'RANDOM' ] ];
        this.setHelpUrl(Blockly.Msg.TEXT_CHARAT_HELPURL);
        this.setColour(Blockly.CAT_TEXT_RGB);
        this.setOutput(true, 'String');
        this.appendValueInput('VALUE').setCheck('String').appendField(Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT);
        this.appendDummyInput('AT');
        this.setInputsInline(true);
        this.updateAt_(true);
        this.setTooltip(Blockly.Msg.TEXT_CHARAT_TOOLTIP);
    },
    /**
     * Create XML to represent whether there is an 'AT' input.
     * 
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom : function() {
        var container = document.createElement('mutation');
        var isAt = this.getInput('AT').type == Blockly.INPUT_VALUE;
        container.setAttribute('at', isAt);
        return container;
    },
    /**
     * Parse XML to restore the 'AT' input.
     * 
     * @param {!Element}
     *            xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation : function(xmlElement) {
        // Note: Until January 2013 this block did not have mutations,
        // so 'at' defaults to true.
        var isAt = (xmlElement.getAttribute('at') != 'false');
        this.updateAt_(isAt);
    },
    /**
     * Create or delete an input for the numeric index.
     * 
     * @param {boolean}
     *            isAt True if the input should exist.
     * @private
     * @this Blockly.Block
     */
    updateAt_ : function(isAt) {
        // Destroy old 'AT' and 'ORDINAL' inputs.
        this.removeInput('AT');
        this.removeInput('ORDINAL', true);
        // Create either a value 'AT' input or a dummy input.
        if (isAt) {
            this.appendValueInput('AT').setCheck('Number');
            if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
                this.appendDummyInput('ORDINAL').appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
            }
        } else {
            this.appendDummyInput('AT');
        }
        if (Blockly.Msg.TEXT_CHARAT_TAIL) {
            this.removeInput('TAIL', true);
            this.appendDummyInput('TAIL').appendField(Blockly.Msg.TEXT_CHARAT_TAIL);
        }
        var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(value) {
            var newAt = (value == 'FROM_START') || (value == 'FROM_END');
            // The 'isAt' variable is available due to this function being a closure.
            if (newAt != isAt) {
                var block = this.sourceBlock_;
                block.updateAt_(newAt);
                // This menu has been destroyed and replaced.  Update the replacement.
                block.setFieldValue(value, 'WHERE');
                return null;
            }
            return undefined;
        });
        this.getInput('AT').appendField(menu, 'WHERE');
    }
};

Blockly.Blocks['text_getSubstring'] = {
    /**
     * Block for getting substring.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this['WHERE_OPTIONS_1'] = [ [ Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START, 'FROM_START' ],
                [ Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END, 'FROM_END' ], [ Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST, 'FIRST' ] ];
        this['WHERE_OPTIONS_2'] = [ [ Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START, 'FROM_START' ],
                [ Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END, 'FROM_END' ], [ Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST, 'LAST' ] ];
        this.setHelpUrl(Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL);
        this.setColour(Blockly.CAT_TEXT_RGB);
        this.appendValueInput('STRING').setCheck('String').appendField(Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
        this.appendDummyInput('AT1');
        this.appendDummyInput('AT2');
        if (Blockly.Msg.TEXT_GET_SUBSTRING_TAIL) {
            this.appendDummyInput('TAIL').appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL);
        }
        this.setInputsInline(true);
        this.setOutput(true, 'String');
        this.updateAt_(1, true);
        this.updateAt_(2, true);
        this.setTooltip(Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP);
    },
    /**
     * Create XML to represent whether there are 'AT' inputs.
     * 
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom : function() {
        var container = document.createElement('mutation');
        var isAt1 = this.getInput('AT1').type == Blockly.INPUT_VALUE;
        container.setAttribute('at1', isAt1);
        var isAt2 = this.getInput('AT2').type == Blockly.INPUT_VALUE;
        container.setAttribute('at2', isAt2);
        return container;
    },
    /**
     * Parse XML to restore the 'AT' inputs.
     * 
     * @param {!Element}
     *            xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation : function(xmlElement) {
        var isAt1 = (xmlElement.getAttribute('at1') == 'true');
        var isAt2 = (xmlElement.getAttribute('at2') == 'true');
        this.updateAt_(1, isAt1);
        this.updateAt_(2, isAt2);
    },
    /**
     * Create or delete an input for a numeric index. This block has two such
     * inputs, independant of each other.
     * 
     * @param {number}
     *            n Specify first or second input (1 or 2).
     * @param {boolean}
     *            isAt True if the input should exist.
     * @private
     * @this Blockly.Block
     */
    updateAt_ : function(n, isAt) {
        // Create or delete an input for the numeric index.
        // Destroy old 'AT' and 'ORDINAL' inputs.
        this.removeInput('AT' + n);
        this.removeInput('ORDINAL' + n, true);
        // Create either a value 'AT' input or a dummy input.
        if (isAt) {
            this.appendValueInput('AT' + n).setCheck('Number');
            if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
                this.appendDummyInput('ORDINAL' + n).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
            }
        } else {
            this.appendDummyInput('AT' + n);
        }
        // Move tail, if present, to end of block.
        if (n == 2 && Blockly.Msg.TEXT_GET_SUBSTRING_TAIL) {
            this.removeInput('TAIL', true);
            this.appendDummyInput('TAIL').appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL);
        }
        var menu = new Blockly.FieldDropdown(this['WHERE_OPTIONS_' + n], function(value) {
            var newAt = (value == 'FROM_START') || (value == 'FROM_END');
            // The 'isAt' variable is available due to this function being a closure.
            if (newAt != isAt) {
                var block = this.sourceBlock_;
                block.updateAt_(n, newAt);
                // This menu has been destroyed and replaced.  Update the replacement.
                block.setFieldValue(value, 'WHERE' + n);
                return null;
            }
            return undefined;
        });
        this.getInput('AT' + n).appendField(menu, 'WHERE' + n);
        if (n == 1) {
            this.moveInputBefore('AT1', 'AT2');
        }
    }
};

Blockly.Blocks['text_changeCase'] = {
    /**
     * Block for changing capitalization.
     * 
     * @this Blockly.Block
     */
    init : function() {
        var OPERATORS = [ [ Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE, 'UPPERCASE' ], [ Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE, 'LOWERCASE' ],
                [ Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE, 'TITLECASE' ] ];
        this.setHelpUrl(Blockly.Msg.TEXT_CHANGECASE_HELPURL);
        this.setColour(Blockly.CAT_TEXT_RGB);
        this.appendValueInput('TEXT').setCheck('String').appendField(new Blockly.FieldDropdown(OPERATORS), 'CASE');
        this.setOutput(true, 'String');
        this.setTooltip(Blockly.Msg.TEXT_CHANGECASE_TOOLTIP);
    }
};

Blockly.Blocks['text_trim'] = {
    /**
     * Block for trimming spaces.
     * 
     * @this Blockly.Block
     */
    init : function() {
        var OPERATORS = [ [ Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH, 'BOTH' ], [ Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT, 'LEFT' ],
                [ Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT, 'RIGHT' ] ];
        this.setHelpUrl(Blockly.Msg.TEXT_TRIM_HELPURL);
        this.setColour(Blockly.CAT_TEXT_RGB);
        this.appendValueInput('TEXT').setCheck('String').appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
        this.setOutput(true, 'String');
        this.setTooltip(Blockly.Msg.TEXT_TRIM_TOOLTIP);
    }
};

Blockly.Blocks['text_print'] = {
    /**
     * Block for print statement.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.TEXT_PRINT_TITLE,
            "args0" : [ {
                "type" : "input_value",
                "name" : "TEXT"
            } ],
            "previousStatement" : null,
            "nextStatement" : null,
            "colour" : Blockly.CAT_TEXT_RGB,
            "tooltip" : Blockly.Msg.TEXT_PRINT_TOOLTIP,
            "helpUrl" : Blockly.Msg.TEXT_PRINT_HELPURL
        });
    }
};

Blockly.Blocks['text_prompt_ext'] = {
    /**
     * Block for prompt function (external message).
     * 
     * @this Blockly.Block
     */
    init : function() {
        var TYPES = [ [ Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, 'TEXT' ], [ Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, 'NUMBER' ] ];
        this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);
        this.setColour(Blockly.CAT_TEXT_RGB);
        // Assign 'this' to a variable for use in the closures below.
        var thisBlock = this;
        var dropdown = new Blockly.FieldDropdown(TYPES, function(newOp) {
            thisBlock.updateType_(newOp);
        });
        this.appendValueInput('TEXT').appendField(dropdown, 'TYPE');
        this.setOutput(true, 'String');
        this.setTooltip(function() {
            return (thisBlock.getFieldValue('TYPE') == 'TEXT') ? Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT : Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER;
        });
    },
    /**
     * Modify this block to have the correct output type.
     * 
     * @param {string}
     *            newOp Either 'TEXT' or 'NUMBER'.
     * @private
     * @this Blockly.Block
     */
    updateType_ : function(newOp) {
        this.outputConnection.setCheck(newOp == 'NUMBER' ? 'Number' : 'String');
    },
    /**
     * Create XML to represent the output type.
     * 
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom : function() {
        var container = document.createElement('mutation');
        container.setAttribute('type', this.getFieldValue('TYPE'));
        return container;
    },
    /**
     * Parse XML to restore the output type.
     * 
     * @param {!Element}
     *            xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation : function(xmlElement) {
        this.updateType_(xmlElement.getAttribute('type'));
    }
};

Blockly.Blocks['text_prompt'] = {
    /**
     * Block for prompt function (internal message). The 'text_prompt_ext' block
     * is preferred as it is more flexible.
     * 
     * @this Blockly.Block
     */
    init : function() {
        var TYPES = [ [ Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, 'TEXT' ], [ Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, 'NUMBER' ] ];
        // Assign 'this' to a variable for use in the closures below.
        var thisBlock = this;
        this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);
        this.setColour(Blockly.CAT_TEXT_RGB);
        var dropdown = new Blockly.FieldDropdown(TYPES, function(newOp) {
            thisBlock.updateType_(newOp);
        });
        this.appendDummyInput().appendField(dropdown, 'TYPE').appendField(this.newQuote_(true)).appendField(new Blockly.FieldTextInput(''), 'TEXT').appendField(this.newQuote_(false));
        this.setOutput(true, 'String');
        this.setTooltip(function() {
            return (thisBlock.getFieldValue('TYPE') == 'TEXT') ? Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT : Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER;
        });
    },
    newQuote_ : Blockly.Blocks['text'].newQuote_,
    updateType_ : Blockly.Blocks['text_prompt_ext'].updateType_,
    mutationToDom : Blockly.Blocks['text_prompt_ext'].mutationToDom,
    domToMutation : Blockly.Blocks['text_prompt_ext'].domToMutation
};

Blockly.Blocks['robText_join'] = {
    /**
     * Block for creating a string made up of any number of elements of any
     * type.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.setHelpUrl(Blockly.Msg.TEXT_JOIN_HELPURL);
        this.setColour(Blockly.CAT_TEXT_RGB);
        if (this.workspace.device === 'calliope' || this.workspace.device === 'microbit') {
            this.appendValueInput('ADD0').appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH).setCheck([ 'Number', 'String', 'Boolean' ]);
            this.appendValueInput('ADD1').setCheck([ 'Number', 'String', 'Boolean', 'String' ]);
        } else {
            this.appendValueInput('ADD0').appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH);
            this.appendValueInput('ADD1');
        }
        this.setOutput(true, 'String');
        this.setMutatorPlus(new Blockly.MutatorPlus(this));
        this.setTooltip(Blockly.Msg.TEXT_JOIN_TOOLTIP);
        this.itemCount_ = 2;
    },
    /**
     * Create XML to represent number of text inputs.
     * 
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom : function() {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    /**
     * Parse XML to restore the text inputs.
     * 
     * @param {!Element}
     *            xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation : function(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        for (var x = 2; x < this.itemCount_; x++) {
            var input = this.appendValueInput('ADD' + x);
            if (x == 2) {
                this.setMutatorMinus(new Blockly.MutatorMinus(this));
            }
        }
    },
    /**
     * Update the shape according to the number of item inputs.
     * 
     * @param {Number}
     *            number of item inputs.
     * @this Blockly.Block
     */
    updateShape_ : function(num) {
        Blockly.dragMode_ = Blockly.DRAG_NONE;
        if (num == 1) {
            if (this.itemCount_ == 2) {
                this.setMutatorMinus(new Blockly.MutatorMinus(this));
                this.render();
            }
            if (this.workspace.device === 'calliope' || this.workspace.device === 'microbit') {
                this.appendValueInput('ADD' + this.itemCount_).setCheck([ 'Number', 'String', 'Boolean' ]);
            } else {
                this.appendValueInput('ADD' + this.itemCount_);
            }
            this.itemCount_++;
        } else if (num == -1) {
            this.itemCount_--;
            var target = this.getInputTargetBlock('ADD' + this.itemCount_);
            if (target) {
                target.unplug();
                target.bumpNeighbours_();
            }
            this.removeInput('ADD' + this.itemCount_);
        }
        if (this.itemCount_ == 2) {
            this.mutatorMinus.dispose();
            this.mutatorMinus = null;
            this.render();
        }
    }
};

Blockly.Blocks['robText_append'] = {
    /**
     * Block for appending to a variable in place.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.setHelpUrl(Blockly.Msg.TEXT_APPEND_HELPURL);
        this.setColour(Blockly.CAT_TEXT_RGB);
        this.setInputsInline(true);
        this.appendValueInput('VAR').appendField(Blockly.Msg.TEXT_APPEND_TO).setCheck('String');
        if (this.workspace.device === 'calliope' || this.workspace.device === 'microbit') {
            this.appendValueInput('TEXT').appendField(Blockly.Msg.TEXT_APPEND_APPENDTEXT).setCheck([ 'Number', 'String', 'Boolean' ]);
        } else {
            this.appendValueInput('TEXT').appendField(Blockly.Msg.TEXT_APPEND_APPENDTEXT);
        }
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            return Blockly.Msg.TEXT_APPEND_TOOLTIP.replace('%1', thisBlock.getFieldValue('VAR'));
        });
    },
    onchange : function() {
      if (!this.workspace || Blockly.Block.dragMode_ == 2) {
        // Block has been deleted or is in move
        return;
      }
      var blockVar = this.getInputTargetBlock('VAR');
      if (blockVar && blockVar.type !== 'variables_get') {
        blockVar.unplug();
        blockVar.bumpNeighbours_();
      }
    }
};

Blockly.Blocks['text_cast_string_toNumber'] = {
    init : function() {
        this.jsonInit({
           "message0" : Blockly.Msg.TEXT_CAST_STRING_TONUMBER,
            "args0" : [ {
                "type" : "input_value",
                "name" : "VALUE",
                "check" : "String"
            }],
            "output" : "Number",
            "colour" : Blockly.CAT_TEXT_RGB,
            "tooltip" : Blockly.Msg.TEXT_CAST_STRING_TONUMBER_TOOLTIP
        });
    }
};

Blockly.Blocks['text_cast_char_toNumber'] = {
    init : function() {
        this.jsonInit({
           "message0" : Blockly.Msg.TEXT_CAST_CHAR_TONUMBER,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "AT",
          "check": "Number"
        },
      ],
      "inputsInline": true,
            "output" : "Number",
            "colour" : Blockly.CAT_TEXT_RGB,
            "tooltip" : Blockly.Msg.TEXT_CAST_CHAR_TONUMBER_TOOLTIP
        });
    }
};