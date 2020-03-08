<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>新增食品种类信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="foodForm" label-width="80px">
                    <el-form-item label="分类名称">
                        <el-input v-model="foodForm.foodName"></el-input>
                    </el-form-item>
                    <el-form-item label="单选框">
                        <el-radio-group v-model="foodForm.foodHall">
                           <el-radio v-for="value in this.hallInfo.items" :label="{value}"></el-radio>
<!--                            <el-radio label="二食堂">{{hallInfo}}</el-radio>-->
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input type="textarea" rows="5" v-model="foodForm.foodText"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">品类添加</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CategoryForm',
        data() {
            return {
                foodForm:{
                    foodName:'',
                    foodPrice:'',
                    foodCategory:'',
                    foodHall:'',
                    foodText:'',
                    upDate:''
                },
                hallInfo:{}
            };
        },
        methods: {
            onSubmit() {
                // this.$http({
                //     method:'post',
                //     url:"/food/foodCategory",
                //     data:this.foodForm
                // }).then(
                //     ()=>{
                //         this.$message.success('提交成功！');
                //     }
                // ).catch(()=>{
                //         this.$message.success('提交失败！');
                //     }
                // )
            }
        },
        created() {
            this.$http.get("/hall/hallList").then(({data})=>{
                this.hallInfo.items = data;
                console.log(data)
                console.log(this.hallInfo)

            }).catch(()=>{
                this.$message.success('出现错误！');
            })
        }
    };
</script>