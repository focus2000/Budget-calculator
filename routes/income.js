const router = require('express').Router();
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator')


const Income = require('../models/Transaction');



router.get('/', auth, async(req, res) => {
    const {incomeText, incomeAmount} = req.body
    try {
     const incomes = await Income.find({user:req.user.id})
     res.json(incomes)
    } catch (err) {
     console.error(err.message)
     res.status(500).send('Server Error')
    }
})

router.post('/', auth, [
    check('incomeText', 'Please provide transaction description').not().isEmpty(),
    check('incomeAmount', 'Amount must not be empty').not().isEmpty()
],

    async(req, res) =>{
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({error:errors.array()})
        }
      const {incomeText, incomeAmount} = req.body
     try {
        let income =  new Income({
            user:req.user.id,
            incomeText,
            incomeAmount
        })
        income = await income.save()
        res.json(income)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
     }
   })

   router.delete('/:id', auth, async(req, res) =>{
       const {incomeText, incomeAmount} = req.body
       try {
           let income = await Income.findById(req.params.id)
           if(!income) {
               return res.status(404).json({msg : 'Transaction not found'})
           }
           await Income.findByIdAndRemove(req.params.id)
           res.send('Transaction removed')

       } catch (err) {
         console.error(err.message)
         res.status(500).send('Server Error')
       }
   })


module.exports = router