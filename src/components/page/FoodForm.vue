<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>新增食品信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="foodForm" label-width="80px">
                    <el-form-item label="食物名称">
                        <el-input v-model="foodForm.foodName"></el-input>
                    </el-form-item>
                    <el-form-item label="食品金额">
                        <el-input v-model="foodForm.foodPrice"></el-input>
                    </el-form-item>
                    <el-form-item label="食品分类" >
                        <el-select  placeholder="请选择" v-model="foodForm.foodCategory">
                            <el-option key="bbk" label="川菜" value="bbk"></el-option>
                            <el-option key="xtc" label="大众快餐" value="xtc"></el-option>
                            <el-option key="imoo" label="夹馍饼类" value="imoo"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="日期时间">
                        <el-col :span="11">
                            <el-date-picker
                                    type="date"
                                    placeholder="选择日期"
                                    v-model="foodForm.upDate"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
<!--                        <el-col class="line" :span="2">-</el-col>-->
<!--                        <el-col :span="11">-->
<!--                            <el-time-picker-->
<!--                                    placeholder="选择时间"-->
<!--                                    v-model="form.date2"-->
<!--                                    style="width: 100%;"-->
<!--                            ></el-time-picker>-->
<!--                        </el-col>-->
                    </el-form-item>

                    <el-form-item label="单选框">
                        <el-radio-group v-model="foodForm.foodHall">
                            <el-radio label="一食堂"></el-radio>
                            <el-radio label="二食堂"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input type="textarea" rows="5" v-model="foodForm.foodText"></el-input>
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
        name: 'FoodForm',
        data() {
            return {
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
                },
                foodForm:{
                    foodName:'',
                    foodPrice:'',
                    foodCategory:'',
                    foodHall:'',
                    foodText:'',
                    upDate:''
                }
            };
        },
        methods: {
            onSubmit() {
                this.$http({
                    method:'post',
                    url:"/food/foodCategory",
                    data:this.foodForm
                }).then(
                    ()=>{
                        this.$message.success('提交成功！');
                    }
                ).catch(()=>{
                    this.$message.success('提交失败！');
                    }
                )
            }
        }
    };
</script>