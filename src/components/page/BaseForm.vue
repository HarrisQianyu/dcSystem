<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>食堂消费表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="学生学号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="消费金额">
                        <el-input ></el-input>
                    </el-form-item>
<!--                    <el-form-item label="消费菜品">-->
<!--                        <el-select  placeholder="请选择">-->
<!--                                <el-option key="bbk" label="川菜" value="bbk"></el-option>-->
<!--                            <el-option key="xtc" label="大众快餐" value="xtc"></el-option>-->
<!--                            <el-option key="imoo" label="夹馍饼类" value="imoo"></el-option>-->
<!--                        </el-select>-->
<!--                    </el-form-item>-->

<!--                    <div class="block">-->

                    <el-form-item label="消费金额">
                        <el-cascader
                                v-model="value"
                                :options="options"
                                :props="{ expandTrigger: 'hover' }"
                                @change="handleChange"></el-cascader>
                    </el-form-item>
<!--                    </div>-->
                    <el-form-item label="日期时间">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.date1"
                                value-format="yyyy-MM-dd"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker
                                placeholder="选择时间"
                                v-model="form.date2"
                                style="width: 100%;"
                            ></el-time-picker>
                        </el-col>
                    </el-form-item>
<!--                    <el-form-item label="城市级联">-->
<!--                        <el-cascader :options="options" v-model="form.options"></el-cascader>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="选择开关">-->
<!--                        <el-switch v-model="form.delivery"></el-switch>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="多选框">-->
<!--                        <el-checkbox-group v-model="form.type">-->
<!--                            <el-checkbox label="步步高" name="type"></el-checkbox>-->
<!--                            <el-checkbox label="小天才" name="type"></el-checkbox>-->
<!--                            <el-checkbox label="imoo" name="type"></el-checkbox>-->
<!--                        </el-checkbox-group>-->
<!--                    </el-form-item>-->
                    <el-form-item label="单选框">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="一食堂"></el-radio>
                            <el-radio label="二食堂"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">表单提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'baseform',
    data() {
        return {
            options: [
                {
                    value: 'guangdong',
                    label: '广东省',
                    children: [
                        {
                            value: 'guangzhou',
                            label: '广州市',
                            children: [
                                {
                                    value: 'tianhe',
                                    label: '天河区'
                                },
                                {
                                    value: 'haizhu',
                                    label: '海珠区'
                                }
                            ]
                        },
                        {
                            value: 'dongguan',
                            label: '东莞市',
                            children: [
                                {
                                    value: 'changan',
                                    label: '长安镇'
                                },
                                {
                                    value: 'humen',
                                    label: '虎门镇'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'hunan',
                    label: '湖南省',
                    children: [
                        {
                            value: 'changsha',
                            label: '长沙市',
                            children: [
                                {
                                    value: 'yuelu',
                                    label: '岳麓区'
                                }
                            ]
                        }
                    ]
                }
            ],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: true,
                type: ['步步高'],
                resource: '小天才',
                desc: '',
                options: []
            }
        };
    },
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
        }
    }
};
</script>