const router = require('express').Router();
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator')


const Expense = require('../models/Expense');



router.get('/', auth, async(req, res) => {
    const {expenseText, expenseAmount} = req.body
    try {
     const expenses = await Expense.find({user:req.user.id})
     res.json(expenses)
    } catch (err) {
     console.error(err.message)
     res.status(500).send('Server Error')
    }
})

router.post('/', auth, [
    check('expenseText', 'Please provide transaction description').not().isEmpty(),
    check('expenseAmount', 'Amount must not be empty').not().isEmpty()
],

    async(req, res) =>{
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({error:errors.array()})
        }
      const {expenseText, expenseAmount} = req.body
     try {
        let expense =  new Expense({
            user:req.user.id,
            expenseText,
            expenseAmount
        })
        expense = await expense.save()
        res.json(expense)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
     }
   })

   router.delete('/:id', auth, async(req, res) =>{
       const {expenseText, expenseAmount} = req.body
       try {
           let expense = await Expense.findById(req.params.id)
           if(!expense) {
               return res.status(404).json({msg : 'Transaction not found'})
           }
           await Expense.findByIdAndRemove(req.params.id)
           res.send('Transaction removed')

       } catch (err) {
         console.error(err.message)
         res.status(500).send('Server Error')
       }
   })


module.exports = router